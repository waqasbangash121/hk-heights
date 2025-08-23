import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testApartments() {
  try {
    console.log('Testing apartment query...')
    
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

    console.log(`Found ${apartments.length} apartments:`)
    console.log(JSON.stringify(apartments, null, 2))
    
  } catch (error) {
    console.error('Error:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

testApartments()
