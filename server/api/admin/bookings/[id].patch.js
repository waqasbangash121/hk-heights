import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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
    const booking = await prisma.booking.update({
      where: { id: parseInt(bookingId) },
      data: { status },
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
  } finally {
    await prisma.$disconnect()
  }
})
