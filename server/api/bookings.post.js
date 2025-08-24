import getPrisma from '../utils/getPrisma'

export default defineEventHandler(async (event) => {
  let prisma
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
    try { prisma = await getPrisma() } catch (clientErr) { console.error('PrismaClient instantiation failed:', clientErr); return { error: 'Database client init failed', details: clientErr?.message } }
    // Check if apartment is available for the selected dates
    const existingBooking = await prisma.booking.findFirst({
      where: {
        apartmentId: parseInt(apartmentId),
        status: { not: 'CANCELLED' },
        OR: [
          {
            checkIn: { lte: new Date(checkIn) },
            checkOut: { gt: new Date(checkIn) }
          },
          {
            checkIn: { lt: new Date(checkOut) },
            checkOut: { gte: new Date(checkOut) }
          },
          {
            checkIn: { gte: new Date(checkIn) },
            checkOut: { lte: new Date(checkOut) }
          }
        ]
      }
    })

    if (existingBooking) {
      return { error: 'Apartment is not available for the selected dates' }
    }

    // Create or find guest
    let guest = await prisma.guest.findUnique({
      where: { email }
    })

    if (!guest) {
      guest = await prisma.guest.create({
        data: {
          firstName,
          lastName,
          email,
          phone
        }
      })
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        guestId: guest.id,
        apartmentId: parseInt(apartmentId),
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guests: parseInt(guests),
        totalAmount: parseFloat(totalAmount),
        notes,
        status: 'PENDING'
      },
      include: {
        guest: true,
        apartment: {
          include: {
            property: true
          }
        }
      }
    })

    return { success: true, booking }
  } catch (error) {
    return { error: error.message }
  }
  finally {
    try { if (prisma) await prisma.$disconnect() } catch (e) { console.warn('Error disconnecting Prisma:', e.message) }
  }
})
