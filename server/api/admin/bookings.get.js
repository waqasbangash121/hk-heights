import { sql } from '../../utils/neon'

export default defineEventHandler(async (event) => {
  // Simple auth check - in production, use proper JWT validation
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  try {
    // Fetch bookings with guest, apartment, and property details
    const bookings = await sql`
      SELECT b.*, g.*, a.*, p.*
      FROM "Booking" b
      LEFT JOIN "Guest" g ON b."guestId" = g.id
      LEFT JOIN "Apartment" a ON b."apartmentId" = a.id
      LEFT JOIN "Property" p ON a."propertyId" = p.id
      ORDER BY b."createdAt" DESC
    `;
    // Group/shape results for response
    // (If needed, post-process to match previous Prisma structure)
    return { success: true, bookings };
  } catch (error) {
    return { error: error.message };
  }
})
