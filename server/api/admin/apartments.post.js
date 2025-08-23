import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
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
    await prisma.$disconnect()
  }
})
