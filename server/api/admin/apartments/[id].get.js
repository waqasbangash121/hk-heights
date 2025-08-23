import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const apartmentId = getRouterParam(event, 'id')

  try {
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
    await prisma.$disconnect()
  }
})
