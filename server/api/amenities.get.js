import getPrisma from '../utils/getPrisma'

export default defineEventHandler(async (event) => {
  let prisma
  try {
    try {
      prisma = await getPrisma()
    } catch (clientErr) {
      console.error('PrismaClient instantiation failed:', clientErr)
      return { error: 'Database client init failed', details: clientErr?.message }
    }

    const amenities = await prisma.amenity.findMany({
      orderBy: { name: 'asc' }
    })

    return { success: true, amenities }
  } catch (error) {
    console.error('Error fetching amenities:', error)
    return { error: error.message }
  } finally {
    try {
      if (prisma) await prisma.$disconnect()
    } catch (e) {
      console.warn('Error disconnecting Prisma:', e.message)
    }
  }
})
