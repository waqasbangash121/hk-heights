import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const apartmentId = getRouterParam(event, 'id')
  const body = await readBody(event)
  const { 
    name, 
    description, 
    bedrooms, 
    bathrooms, 
    maxGuests, 
    pricePerNight,
    isActive,
    amenityIds
  } = body

  try {
    // If amenityIds are provided, update them
    if (amenityIds !== undefined) {
      // Delete existing amenity associations
      await prisma.apartmentAmenity.deleteMany({
        where: { apartmentId: parseInt(apartmentId) }
      })
      
      // Create new amenity associations
      if (amenityIds.length > 0) {
        await prisma.apartmentAmenity.createMany({
          data: amenityIds.map(amenityId => ({
            apartmentId: parseInt(apartmentId),
            amenityId: parseInt(amenityId)
          }))
        })
      }
    }

    const apartment = await prisma.apartment.update({
      where: { id: parseInt(apartmentId) },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(bedrooms && { bedrooms: parseInt(bedrooms) }),
        ...(bathrooms && { bathrooms: parseInt(bathrooms) }),
        ...(maxGuests && { maxGuests: parseInt(maxGuests) }),
        ...(pricePerNight && { pricePerNight: parseFloat(pricePerNight) }),
        ...(isActive !== undefined && { isActive: Boolean(isActive) })
      },
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

    return { success: true, apartment }
  } catch (error) {
    return { error: error.message }
  } finally {
    await prisma.$disconnect()
  }
})
