import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const apartments = await prisma.apartment.findMany({
      where: { isActive: true },
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
      },
      orderBy: { id: 'asc' }
    })

    return { success: true, apartments }
  } catch (error) {
    return { error: error.message }
  }
})
