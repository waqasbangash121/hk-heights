import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'
import formidable from 'formidable'
import { readFile } from 'fs/promises'
import { sql } from '../../utils/neon'

export default defineEventHandler(async (event) => {
  try {
    // Check authentication
    const token = getCookie(event, 'admin_token') || getHeader(event, 'authorization')?.replace('Bearer ', '')
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      })
    }

    // Parse the multipart form data using formidable
    const form = formidable({
      uploadDir: '/tmp',
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    })
    const [fields, files] = await form.parse(event.node.req)

    const apartmentId = Array.isArray(fields.apartmentId) ? fields.apartmentId[0] : fields.apartmentId
    const altText = Array.isArray(fields.altText) ? fields.altText[0] : fields.altText
    const isMain = (Array.isArray(fields.isMain) ? fields.isMain[0] : fields.isMain) === 'true'
    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image

    if (!apartmentId || !imageFile) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields: apartmentId and image file'
      })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif']
    const fileExtension = imageFile.originalFilename?.split('.').pop()?.toLowerCase()
    if (!allowedTypes.includes(imageFile.mimetype) && !allowedExtensions.includes(fileExtension)) {
      throw createError({
        statusCode: 400,
        statusMessage: `Invalid file type. Only JPEG, PNG, WebP, and GIF images are allowed. Got: ${imageFile.mimetype}`
      })
    }

    // Create upload directory if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'apartments')
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const extension = fileExtension || 'jpg'
    const filename = `${apartmentId}_${timestamp}.${extension}`
    const finalPath = join(uploadDir, filename)

    // Read the temporary file and write to final location
    const fileData = await readFile(imageFile.filepath)
    await writeFile(finalPath, fileData)

    // If this is set as main image, update other images to not be main
    if (isMain) {
      await sql`UPDATE "ApartmentImage" SET "isMain" = false WHERE "apartmentId" = ${parseInt(apartmentId)}`;
    }

    // Create image record in database
    const images = await sql`
      INSERT INTO "ApartmentImage" (
        "apartmentId", "imageUrl", "altText", "isMain"
      ) VALUES (
        ${parseInt(apartmentId)}, ${`/uploads/apartments/${filename}`}, ${altText || imageFile.originalFilename}, ${isMain}
      ) RETURNING *
    `;
    const imageRecord = images[0];

    // Get updated apartment with images
    const apartments = await sql`SELECT * FROM "Apartment" WHERE id = ${parseInt(apartmentId)}`;
    const apartment = apartments[0];
    if (apartment) {
      apartment.images = await sql`SELECT * FROM "ApartmentImage" WHERE "apartmentId" = ${apartment.id}`;
    }

    return {
      success: true,
      image: imageRecord,
      apartment: apartment
    }
  } catch (error) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || `Failed to upload image: ${error.message}`
    })
  }
})
