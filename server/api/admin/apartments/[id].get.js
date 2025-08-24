import { sql } from '../../../../server/utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const apartmentId = getRouterParam(event, 'id')

  try {
    // Fetch apartment
  const apartments = await sql`SELECT * FROM "Apartment" WHERE id = ${parseInt(apartmentId)}`;
    const apartment = apartments[0];
    if (!apartment) {
      return { error: 'Apartment not found' };
    }
    // Fetch property, images, amenities
    const [property] = await sql`SELECT * FROM "Property" WHERE id = ${apartment.propertyId}`;
    const images = await sql`SELECT * FROM "ApartmentImage" WHERE "apartmentId" = ${apartment.id} ORDER BY "sortOrder" ASC`;
    const amenities = await sql`
      SELECT aa.*, a.* FROM "ApartmentAmenity" aa
      JOIN "Amenity" a ON aa."amenityId" = a.id
      WHERE aa."apartmentId" = ${apartment.id}
    `;
    apartment.property = property;
    apartment.images = images;
    apartment.amenities = amenities;

    return { success: true, apartment };
  } catch (error) {
    return { error: error.message };
  }
})
