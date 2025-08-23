import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'
import formidable from 'formidable'
import { readFile } from 'fs/promises'

export default defineEventHandler(async (event) => {
  let prisma
  
  try {
    console.log('Upload image endpoint called')
    
    // Import Prisma dynamically to avoid module issues
    const { PrismaClient } = await import('@prisma/client')
    prisma = new PrismaClient()
    
    // Check authentication
    const token = getCookie(event, 'admin_token') || getHeader(event, 'authorization')?.replace('Bearer ', '')
    if (!token) {
      console.log('No authentication token found')
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized'
      })
    }

    console.log('Parsing form data with formidable...')
    
    // Parse the multipart form data using formidable
    const form = formidable({
      uploadDir: '/tmp',
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    })

    const [fields, files] = await form.parse(event.node.req)
    
    console.log('Fields:', fields)
    console.log('Files:', Object.keys(files))

    const apartmentId = Array.isArray(fields.apartmentId) ? fields.apartmentId[0] : fields.apartmentId
    const altText = Array.isArray(fields.altText) ? fields.altText[0] : fields.altText
    const isMain = (Array.isArray(fields.isMain) ? fields.isMain[0] : fields.isMain) === 'true'
    const imageFile = Array.isArray(files.image) ? files.image[0] : files.image

    if (!apartmentId || !imageFile) {
      console.log('Missing required fields:', { apartmentId, hasFile: !!imageFile })
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields: apartmentId and image file'
      })
    }

    console.log('File details:', {
      originalFilename: imageFile.originalFilename,
      mimetype: imageFile.mimetype,
      size: imageFile.size,
      filepath: imageFile.filepath
    })

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif']
    const fileExtension = imageFile.originalFilename?.split('.').pop()?.toLowerCase()
    
    if (!allowedTypes.includes(imageFile.mimetype) && !allowedExtensions.includes(fileExtension)) {
      console.log('Invalid file type:', { mimetype: imageFile.mimetype, extension: fileExtension })
      throw createError({
        statusCode: 400,
        statusMessage: `Invalid file type. Only JPEG, PNG, WebP, and GIF images are allowed. Got: ${imageFile.mimetype}`
      })
    }

    // Create upload directory if it doesn't exist
    const uploadDir = join(process.cwd(), 'public', 'uploads', 'apartments')
    console.log('Upload directory:', uploadDir)
    
    if (!existsSync(uploadDir)) {
      console.log('Creating upload directory...')
      await mkdir(uploadDir, { recursive: true })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const extension = fileExtension || 'jpg'
    const filename = `${apartmentId}_${timestamp}.${extension}`
    const finalPath = join(uploadDir, filename)
    
    console.log('Moving file to:', finalPath)

    // Read the temporary file and write to final location
    const fileData = await readFile(imageFile.filepath)
    await writeFile(finalPath, fileData)
    console.log('File saved successfully')

    // Create image record in database
    console.log('Creating database record...')
    const imageRecord = await prisma.apartmentImage.create({
      data: {
        apartmentId: parseInt(apartmentId),
        imageUrl: `/uploads/apartments/${filename}`,
        altText: altText || imageFile.originalFilename,
        isMain: isMain
      }
    })
    console.log('Image record created:', imageRecord.id)

    // If this is set as main image, update other images to not be main
    if (isMain) {
      console.log('Updating other images to not be main...')
      await prisma.apartmentImage.updateMany({
        where: {
          apartmentId: parseInt(apartmentId),
          id: { not: imageRecord.id }
        },
        data: {
          isMain: false
        }
      })
    }

    // Get updated apartment with images
    console.log('Fetching updated apartment...')
    const apartment = await prisma.apartment.findUnique({
      where: { id: parseInt(apartmentId) },
      include: { images: true }
    })

    console.log('Upload completed successfully')
    
    return {
      success: true,
      image: imageRecord,
      apartment: apartment
    }

  } catch (error) {
    console.error('Image upload error:', error)
    console.error('Error stack:', error.stack)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || `Failed to upload image: ${error.message}`
    })
  } finally {
    // Close Prisma connection
    if (prisma) {
      await prisma.$disconnect()
    }
  }
})
