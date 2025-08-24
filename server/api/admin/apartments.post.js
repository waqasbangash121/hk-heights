import getPrisma from '../../utils/getPrisma'

export default defineEventHandler(async (event) => {
  let prisma
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const body = await readBody(event)
  const { 
    name, 
    description, 
    bedrooms, 
    bathrooms, 
    maxGuests, 
    pricePerNight,
    amenityIds = [],
    propertyId = 1 // Default to HK Heights property
  } = body

  if (!name || !bedrooms || !bathrooms || !maxGuests || !pricePerNight) {
    return { error: 'Missing required fields' }
  }

  try {
    try {
      prisma = new PrismaClient()
    } catch (clientErr) {
      console.error('PrismaClient instantiation failed:', clientErr)
      return { error: 'Database client init failed', details: clientErr?.message }
    }
    const apartment = await prisma.apartment.create({
      data: {
        name,
        description,
        bedrooms: parseInt(bedrooms),
        bathrooms: parseInt(bathrooms),
        maxGuests: parseInt(maxGuests),
        pricePerNight: parseFloat(pricePerNight),
        propertyId: parseInt(propertyId),
        amenities: {
          create: amenityIds.map(amenityId => ({
            amenityId: parseInt(amenityId)
          }))
        }
      },
      include: {
        property: true,
        images: true,
        amenities: {
          include: {
            amenity: true
          }
        }
      }
    })

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
