import { sql } from '../../utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check - in production, use proper JWT validation
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  try {
    // Fetch bookings with guest and apartment details only
    const bookings = await sql`
      SELECT b.*, g.*, a.*
      FROM "Booking" b
      LEFT JOIN "Guest" g ON b."guestId" = g.id
      LEFT JOIN "Apartment" a ON b."apartmentId" = a.id
      ORDER BY b."createdAt" DESC
    `;
    // Map guest fields into a guest object for each booking
    const shapedBookings = bookings.map(row => {
      const {
        id, checkIn, checkOut, guests, totalAmount, notes, status, createdAt, apartmentid, guestid,
        firstName, lastName, email, phone, name: apartmentName,
        ...rest
      } = row;
      return {
        ...row,
        guest: firstName || lastName || email || phone ? {
          firstName,
          lastName,
          email,
          phone
        } : null,
        apartmentName: apartmentName || null
      };
    });
    return { success: true, bookings: shapedBookings };
  } catch (error) {
    return { error: error.message };
  }
})
