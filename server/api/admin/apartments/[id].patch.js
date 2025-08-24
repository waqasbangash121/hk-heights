import { sql } from '../../../../server/utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const apartmentId = getRouterParam(event, 'id')
  const body = await readBody(event)
  const { 
    name, 
    description, 
    bedrooms, 
    bathrooms, 
    maxGuests, 
    pricePerNight,
    isActive,
    amenityIds
  } = body

  try {
    // If amenityIds are provided, update them
    if (amenityIds !== undefined) {
      // Delete existing amenity associations
  await sql`DELETE FROM "ApartmentAmenity" WHERE "apartmentId" = ${parseInt(apartmentId)}`;
      // Create new amenity associations
      if (amenityIds.length > 0) {
        await Promise.all(
          amenityIds.map(amenityId =>
            sql`INSERT INTO "ApartmentAmenity" ("apartmentId", "amenityId") VALUES (${parseInt(apartmentId)}, ${parseInt(amenityId)})`
          )
        );
      }
    }

    // Update apartment
    const updates = [];
  if (name) updates.push(sql`"name" = ${name}`);
  if (description) updates.push(sql`"description" = ${description}`);
  if (bedrooms) updates.push(sql`"bedrooms" = ${parseInt(bedrooms)}`);
  if (bathrooms) updates.push(sql`"bathrooms" = ${parseInt(bathrooms)}`);
  if (maxGuests) updates.push(sql`"maxGuests" = ${parseInt(maxGuests)}`);
  if (pricePerNight) updates.push(sql`"pricePerNight" = ${parseFloat(pricePerNight)}`);
  if (isActive !== undefined) updates.push(sql`"isActive" = ${Boolean(isActive)}`);

    let apartment = null;
    if (updates.length > 0) {
  const updateSql = sql.unsafe(`UPDATE "Apartment" SET ${updates.map(u => u.sql).join(', ')} WHERE id = $1 RETURNING *`, [parseInt(apartmentId)]);
      const apartments = await updateSql;
      apartment = apartments[0];
    } else {
  const apartments = await sql`SELECT * FROM "Apartment" WHERE id = ${parseInt(apartmentId)}`;
      apartment = apartments[0];
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
