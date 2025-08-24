import { sql } from '../../utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const body = await readBody(event)
  const { apartmentId, imageUrl, altText, isMain } = body

  if (!apartmentId || !imageUrl) {
    return { error: 'Missing required fields: apartmentId, imageUrl' }
  }

  try {
    // If setting as main image, unset other main images first
    if (isMain) {
      await sql`UPDATE "ApartmentImage" SET "isMain" = false WHERE "apartmentId" = ${parseInt(apartmentId)}`;
    }

    // Get current max sort order
    const maxSortOrderResult = await sql`
      SELECT MAX("sortOrder") AS max_order FROM "ApartmentImage" WHERE "apartmentId" = ${parseInt(apartmentId)}
    `;
    const maxSortOrder = maxSortOrderResult[0]?.max_order || 0;

    // Insert new image
    const images = await sql`
      INSERT INTO "ApartmentImage" (
        "apartmentId", "imageUrl", "altText", "isMain", "sortOrder"
      ) VALUES (
        ${parseInt(apartmentId)}, ${imageUrl}, ${altText || ''}, ${!!isMain}, ${maxSortOrder + 1}
      ) RETURNING *
    `;
    const image = images[0];

    return { success: true, image };
  } catch (error) {
    return { error: error.message };
  }
})
