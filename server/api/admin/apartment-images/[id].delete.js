import { sql } from '../../../utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const imageId = getRouterParam(event, 'id')

  try {
  await sql`DELETE FROM "ApartmentImage" WHERE id = ${parseInt(imageId)}`;
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
})
