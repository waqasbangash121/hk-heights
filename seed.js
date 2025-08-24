import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Create a property first
    const property = await prisma.property.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'HK Heights Resort',
        description: 'Premium hill station resort with breathtaking mountain views',
        location: 'Hill Station, Pakistan',
        isActive: true
      }
    })

    // Create some amenities
    const amenities = await Promise.all([
      prisma.amenity.upsert({
        where: { name: 'WiFi' },
        update: {},
        create: { name: 'WiFi', icon: 'wifi', description: 'Free high-speed internet' }
      }),
      prisma.amenity.upsert({
        where: { name: 'Mountain View' },
        update: {},
        create: { name: 'Mountain View', icon: 'mountain', description: 'Stunning mountain views' }
      }),
      prisma.amenity.upsert({
        where: { name: 'Balcony' },
        update: {},
        create: { name: 'Balcony', icon: 'balcony', description: 'Private balcony' }
      })
    ])

    // Create sample apartments
    const apartments = [
      {
        name: 'Deluxe Mountain Suite',
        description: 'Spacious suite with panoramic mountain views and modern amenities',
        bedrooms: 2,
        bathrooms: 2,
        maxGuests: 4,
        pricePerNight: 8500.00
      },
      {
        name: 'Cozy Valley View',
        description: 'Comfortable apartment overlooking the beautiful valley',
        bedrooms: 1,
        bathrooms: 1,
        maxGuests: 2,
        pricePerNight: 6500.00
      },
      {
        name: 'Family Garden Villa',
        description: 'Perfect for families with garden access and play area',
        bedrooms: 3,
        bathrooms: 2,
        maxGuests: 6,
        pricePerNight: 12000.00
      }
    ]

    for (const apt of apartments) {
      // Check if apartment already exists
      const existingApartment = await prisma.apartment.findFirst({
        where: { name: apt.name }
      })

      let apartment
      if (existingApartment) {
        apartment = existingApartment
        console.log(`Apartment "${apt.name}" already exists, skipping...`)
      } else {
        apartment = await prisma.apartment.create({
          data: {
            ...apt,
            propertyId: property.id,
            isActive: true
          }
        })
        console.log(`Created apartment: ${apt.name}`)
      }

      // Add some images
      const existingImage = await prisma.apartmentImage.findFirst({
        where: { 
          apartmentId: apartment.id,
          sortOrder: 0
        }
      })

      if (!existingImage) {
        await prisma.apartmentImage.create({
          data: {
            apartmentId: apartment.id,
            imageUrl: `https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop`,
            altText: `${apt.name} - Main View`,
            isMain: true,
            sortOrder: 0
          }
        })
      }

      // Add amenities to apartments
      for (let i = 0; i < amenities.length; i++) {
        const existingAmenity = await prisma.apartmentAmenity.findFirst({
          where: {
            apartmentId: apartment.id,
            amenityId: amenities[i].id
          }
        })

        if (!existingAmenity) {
          await prisma.apartmentAmenity.create({
            data: {
              apartmentId: apartment.id,
              amenityId: amenities[i].id
            }
          })
        }
      }
    }

    console.log('✅ Database seeded successfully!')
    console.log(`Created/updated:`)
    console.log(`- 1 property`)
    console.log(`- ${amenities.length} amenities`)
    console.log(`- ${apartments.length} apartments`)
    
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
