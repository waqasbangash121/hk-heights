import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  let prisma
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const apartmentId = getRouterParam(event, 'id')

  try {
    try {
      prisma = new PrismaClient()
    } catch (clientErr) {
      console.error('PrismaClient instantiation failed:', clientErr)
      return { error: 'Database client init failed', details: clientErr?.message }
    }

    const apartment = await prisma.apartment.findUnique({
      where: { id: parseInt(apartmentId) },
      include: {
        property: true,
        images: {
          orderBy: { sortOrder: 'asc' }
        },
        amenities: {
          include: {
            amenity: true
          }
        }
      }
    })

    if (!apartment) {
      return { error: 'Apartment not found' }
    }

    return { success: true, apartment }
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
