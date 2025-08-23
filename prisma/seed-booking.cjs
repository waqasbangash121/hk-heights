const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Create admin user if it doesn't exist
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { username: 'admin' }
  })

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    await prisma.adminUser.create({
      data: {
        username: 'admin',
        password: hashedPassword
      }
    })
    console.log('✅ Admin user created')
  } else {
    console.log('✅ Admin user already exists')
  }

  // Create amenities
  const amenities = [
    { name: 'WiFi', icon: 'wifi', description: 'High-speed internet' },
    { name: 'Mountain View', icon: 'mountain', description: 'Beautiful mountain views' },
    { name: 'Balcony', icon: 'balcony', description: 'Private balcony' },
    { name: 'Kitchen', icon: 'kitchen', description: 'Fully equipped kitchen' },
    { name: 'TV', icon: 'tv', description: 'Flat screen TV' },
    { name: 'Air Conditioning', icon: 'ac', description: 'Climate control' },
    { name: 'Heating', icon: 'heating', description: 'Central heating' },
    { name: 'Parking', icon: 'parking', description: 'Free parking' },
    { name: 'Spa Access', icon: 'spa', description: 'Access to spa facilities' },
    { name: 'Restaurant', icon: 'restaurant', description: 'On-site dining' }
  ]

  for (const amenity of amenities) {
    await prisma.amenity.upsert({
      where: { name: amenity.name },
      update: {},
      create: amenity
    })
  }
  console.log('✅ Amenities created')

  // Create property
  const property = await prisma.property.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'HK Heights',
      description: 'Premium hill station apartments with breathtaking mountain views',
      location: 'Hill Station, Pakistan'
    }
  })
  console.log('✅ Property created')

  // Create property images
  const propertyImages = [
    { imageUrl: '/images/property/main-view.jpg', altText: 'HK Heights Main Building', isMain: true, sortOrder: 1 },
    { imageUrl: '/images/property/mountain-view.jpg', altText: 'Mountain View from Property', isMain: false, sortOrder: 2 },
    { imageUrl: '/images/property/entrance.jpg', altText: 'Property Entrance', isMain: false, sortOrder: 3 },
    { imageUrl: '/images/property/garden.jpg', altText: 'Property Garden', isMain: false, sortOrder: 4 }
  ]

  for (const image of propertyImages) {
    const existingImage = await prisma.propertyImage.findFirst({
      where: { 
        propertyId: property.id, 
        imageUrl: image.imageUrl 
      }
    })
    
    if (!existingImage) {
      await prisma.propertyImage.create({
        data: {
          ...image,
          propertyId: property.id
        }
      })
    }
  }
  console.log('✅ Property images created')

  // Create apartments
  const apartments = [
    {
      name: 'Deluxe Mountain Suite',
      description: 'Spacious suite with panoramic mountain views and premium amenities',
      bedrooms: 2,
      bathrooms: 2,
      maxGuests: 4,
      pricePerNight: 15000
    },
    {
      name: 'Premium Valley View',
      description: 'Elegant apartment overlooking the beautiful valley',
      bedrooms: 1,
      bathrooms: 1,
      maxGuests: 2,
      pricePerNight: 12000
    },
    {
      name: 'Family Retreat',
      description: 'Perfect for families with multiple bedrooms and living space',
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6,
      pricePerNight: 20000
    }
  ]

  for (let i = 0; i < apartments.length; i++) {
    const apartment = await prisma.apartment.upsert({
      where: { id: i + 1 },
      update: {},
      create: {
        ...apartments[i],
        propertyId: property.id
      }
    })

    // Add apartment images
    const apartmentImages = [
      { imageUrl: `/images/apartments/apt${i+1}/main.jpg`, altText: `${apartment.name} Main View`, isMain: true, sortOrder: 1 },
      { imageUrl: `/images/apartments/apt${i+1}/bedroom.jpg`, altText: `${apartment.name} Bedroom`, isMain: false, sortOrder: 2 },
      { imageUrl: `/images/apartments/apt${i+1}/bathroom.jpg`, altText: `${apartment.name} Bathroom`, isMain: false, sortOrder: 3 },
      { imageUrl: `/images/apartments/apt${i+1}/kitchen.jpg`, altText: `${apartment.name} Kitchen`, isMain: false, sortOrder: 4 }
    ]

    for (const image of apartmentImages) {
      await prisma.apartmentImage.create({
        data: {
          ...image,
          apartmentId: apartment.id
        }
      })
    }

    // Add amenities to apartments
    const apartmentAmenityIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // All amenities
    for (const amenityId of apartmentAmenityIds) {
      await prisma.apartmentAmenity.create({
        data: {
          apartmentId: apartment.id,
          amenityId: amenityId
        }
      })
    }
  }
  console.log('✅ Apartments created with images and amenities')

  console.log('🎉 Seed completed successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
