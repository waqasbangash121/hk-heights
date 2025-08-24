import { sql } from '../utils/neon'

export default defineEventHandler(async (event) => {
  try {
  const amenities = await sql`SELECT * FROM "Amenity" ORDER BY "name" ASC`;
    return { success: true, amenities };
  } catch (error) {
    console.error('Error fetching amenities:', error);
    return { error: error.message };
  }
})
