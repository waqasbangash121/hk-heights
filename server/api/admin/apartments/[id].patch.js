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
    // DEBUG: Log current DB row before update
    const beforeUpdate = await sql`SELECT * FROM "Apartment" WHERE id = ${parseInt(apartmentId)}`;
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

    // Dynamically build the update query using the standard sql tag
    let updateResult = null;
    if (
      name !== undefined || description !== undefined || bedrooms !== undefined ||
      bathrooms !== undefined || maxGuests !== undefined || pricePerNight !== undefined || isActive !== undefined
    ) {
      let setFragments = [];
      if (name !== undefined) setFragments.push(sql`"name" = ${String(name)}`);
      if (description !== undefined) setFragments.push(sql`"description" = ${description === null ? null : String(description)}`);
      if (bedrooms !== undefined) setFragments.push(sql`"bedrooms" = ${Number(bedrooms)}`);
      if (bathrooms !== undefined) setFragments.push(sql`"bathrooms" = ${Number(bathrooms)}`);
      if (maxGuests !== undefined) setFragments.push(sql`"maxGuests" = ${Number(maxGuests)}`);
      if (pricePerNight !== undefined) setFragments.push(sql`"pricePerNight" = ${Number(pricePerNight)}`);
      if (isActive !== undefined) setFragments.push(sql`"isActive" = ${Boolean(isActive)}`);
      const setSql = setFragments.reduce((prev, curr, idx) => idx === 0 ? curr : sql`${prev}, ${curr}`);
      updateResult = await sql`
        UPDATE "Apartment"
        SET ${setSql}
        WHERE id = ${Number(apartmentId)}
        RETURNING *
      `;
    }

    let apartment = null;
    if (updateResult && updateResult.length > 0) {
      apartment = updateResult[0];
    } else {
      const apartments = await sql`SELECT * FROM "Apartment" WHERE id = ${Number(apartmentId)}`;
      apartment = apartments[0];
    }

    if (!apartment) {
      return { error: 'Apartment not found or could not be updated.' };
    }

    // Fetch images and amenities
    const images = await sql`SELECT * FROM "ApartmentImage" WHERE "apartmentId" = ${apartment.id} ORDER BY "sortOrder" ASC`;
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
