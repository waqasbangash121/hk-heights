import { sql } from '../../utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const body = await readBody(event)
  const { 
    name, 
    description, 
    bedrooms, 
    bathrooms, 
    maxGuests, 
    pricePerNight,
    amenityIds = [],
  // propertyId removed, only one property exists
  } = body

  if (!name || !bedrooms || !bathrooms || !maxGuests || !pricePerNight) {
    return { error: 'Missing required fields' }
  }

  try {
    // Create apartment
    const apartments = await sql`
      INSERT INTO "Apartment" (
        "name", "description", "bedrooms", "bathrooms", "maxGuests", "pricePerNight"
      ) VALUES (
        ${name}, ${description}, ${parseInt(bedrooms)}, ${parseInt(bathrooms)},
        ${parseInt(maxGuests)}, ${parseFloat(pricePerNight)}
      ) RETURNING *
    `;
    const apartment = apartments[0];

    // Insert amenities if provided
    if (amenityIds.length > 0) {
      await Promise.all(
        amenityIds.map(amenityId =>
          sql`INSERT INTO "ApartmentAmenity" ("apartmentId", "amenityId") VALUES (${apartment.id}, ${parseInt(amenityId)})`
        )
      );
    }

    // Fetch images and amenities for response
    const images = await sql`SELECT * FROM "ApartmentImage" WHERE "apartmentId" = ${apartment.id}`;
    const amenities = await sql`
      SELECT aa.*, a.* FROM "ApartmentAmenity" aa
      JOIN "Amenity" a ON aa."amenityId" = a.id
      WHERE aa."apartmentId" = ${apartment.id}
    `;
    apartment.images = images;
    apartment.amenities = amenities;

    return { success: true, apartment };
  } catch (error) {
    return { error: error.message };
  }
})
