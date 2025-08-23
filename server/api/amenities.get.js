import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const amenities = await prisma.amenity.findMany({
      orderBy: { name: 'asc' }
    })

    return { success: true, amenities }
  } catch (error) {
    console.error('Error fetching amenities:', error)
    return { error: error.message }
  } finally {
    await prisma.$disconnect()
  }
})
