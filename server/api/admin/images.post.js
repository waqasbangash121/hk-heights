import { sql } from '../../utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check - in production, use proper JWT validation
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const body = await readBody(event)
  const { type, entityId, imageUrl, altText, isMain } = body

  if (!type || !entityId || !imageUrl) {
    return { error: 'Missing required fields: type, entityId, imageUrl' }
  }

  try {
    let result;
  if (type === 'apartment') {
      // If setting as main image, unset other main images first
      if (isMain) {
        await sql`UPDATE "ApartmentImage" SET "isMain" = false WHERE "apartmentId" = ${parseInt(entityId)}`;
      }
      const images = await sql`
        INSERT INTO "ApartmentImage" ("apartmentId", "imageUrl", "altText", "isMain", "sortOrder")
        VALUES (${parseInt(entityId)}, ${imageUrl}, ${altText}, ${!!isMain}, 0)
        RETURNING *
      `;
      result = images[0];
    } else {
      return { error: 'Invalid type. Must be "property" or "apartment"' };
    }
    return { success: true, image: result };
  } catch (error) {
    return { error: error.message };
  }
})
