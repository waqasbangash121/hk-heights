import getPrisma from '../../utils/getPrisma'

export default defineEventHandler(async (event) => {
  let prisma
  // Simple auth check - in production, use proper JWT validation
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  try {
    try {
      prisma = new PrismaClient()
    } catch (clientErr) {
      console.error('PrismaClient instantiation failed:', clientErr)
      return { error: 'Database client init failed', details: clientErr?.message }
    }
    const bookings = await prisma.booking.findMany({
      include: {
        guest: true,
        apartment: {
          include: {
            property: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    return { success: true, bookings }
  } catch (error) {
    return { error: error.message }
  } finally {
    try {
      if (prisma) await prisma.$disconnect()
    } catch (e) {
      console.warn('Error disconnecting Prisma:', e.message)
    }
  }
})
