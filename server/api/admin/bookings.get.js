import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Simple auth check - in production, use proper JWT validation
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  try {
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
  }
})
