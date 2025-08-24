import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  let prisma
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
    try { prisma = new PrismaClient() } catch (clientErr) { console.error('PrismaClient instantiation failed:', clientErr); return { error: 'Database client init failed', details: clientErr?.message } }
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
    try { if (prisma) await prisma.$disconnect() } catch (e) { console.warn('Error disconnecting Prisma:', e.message) }
  }
})
