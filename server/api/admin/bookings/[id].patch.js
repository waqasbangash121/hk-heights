import { sql } from '../../../../server/utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const bookingId = getRouterParam(event, 'id')
  const body = await readBody(event)
  const { status } = body

  if (!status) {
    return { error: 'Status is required' }
  }

  const validStatuses = ['PENDING', 'CONFIRMED', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELLED']
  if (!validStatuses.includes(status)) {
    return { error: 'Invalid status' }
  }

  try {
    // Update booking status
    const bookings = await sql`
      UPDATE "Booking"
      SET "status" = ${status}
      WHERE id = ${parseInt(bookingId)}
      RETURNING *
    `;
    const booking = bookings[0];
    if (!booking) return { error: 'Booking not found' };

    // Fetch guest, apartment, and property details
  const [guest] = await sql`SELECT * FROM "Guest" WHERE id = ${booking.guestId}`;
  const [apartment] = await sql`SELECT * FROM "Apartment" WHERE id = ${booking.apartmentId}`;
  const [property] = apartment ? await sql`SELECT * FROM "Property" WHERE id = ${apartment.propertyId}` : [null];
    booking.guest = guest;
    booking.apartment = apartment ? { ...apartment, property } : null;

    return { success: true, booking };
  } catch (error) {
    return { error: error.message };
  }
})
