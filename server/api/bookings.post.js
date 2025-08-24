import { sql } from '../utils/neon'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { 
    firstName, 
    lastName, 
    email, 
    phone, 
    apartmentId, 
    checkIn, 
    checkOut, 
    guests, 
    totalAmount,
    notes 
  } = body

  if (!firstName || !lastName || !email || !apartmentId || !checkIn || !checkOut || !guests || !totalAmount) {
    return { error: 'Missing required fields' }
  }

  try {
    // Check if apartment is available for the selected dates
    const existingBooking = await sql`
      SELECT * FROM "Booking"
      WHERE "apartmentId" = ${parseInt(apartmentId)}
        AND status != 'CANCELLED'
        AND (
          ("checkIn" <= ${new Date(checkIn)} AND "checkOut" > ${new Date(checkIn)}) OR
          ("checkIn" < ${new Date(checkOut)} AND "checkOut" >= ${new Date(checkOut)}) OR
          ("checkIn" >= ${new Date(checkIn)} AND "checkOut" <= ${new Date(checkOut)})
        )
      LIMIT 1
    `;
    if (existingBooking.length > 0) {
      return { error: 'Apartment is not available for the selected dates' };
    }

    // Create or find guest
  let guest = (await sql`SELECT * FROM "Guest" WHERE "email" = ${email} LIMIT 1`)[0];
    if (!guest) {
      const guests = await sql`
        INSERT INTO "Guest" ("firstName", "lastName", "email", "phone")
        VALUES (${firstName}, ${lastName}, ${email}, ${phone})
        RETURNING *
      `;
      guest = guests[0];
    }

    // Create booking
    const bookings = await sql`
      INSERT INTO "Booking" (
        "guestId", "apartmentId", "checkIn", "checkOut", "guests", "totalAmount", "notes", "status"
      ) VALUES (
        ${guest.id}, ${parseInt(apartmentId)}, ${new Date(checkIn)}, ${new Date(checkOut)},
        ${parseInt(guests)}, ${parseFloat(totalAmount)}, ${notes}, 'PENDING'
      ) RETURNING *
    `;
    const booking = bookings[0];

    // Fetch guest and apartment details for response
  const [apartment] = await sql`SELECT * FROM "Apartment" WHERE id = ${booking.apartmentId}`;
  const [property] = apartment ? await sql`SELECT * FROM "Property" WHERE id = ${apartment.propertyId}` : [null];
    booking.guest = guest;
    booking.apartment = apartment ? { ...apartment, property } : null;

    return { success: true, booking };
  } catch (error) {
    return { error: error.message };
  }
})
