import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Mock data as fallback when database is not available
const mockApartments = [
  {
    id: 1,
    name: 'Deluxe Mountain Suite',
    description: 'Spacious suite with panoramic mountain views and modern amenities',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    pricePerNight: 8500.00,
    isActive: true,
    property: {
      name: 'HK Heights Resort',
      description: 'Premium hill station resort',
      location: 'Hill Station, Pakistan'
    },
    images: [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
        altText: 'Deluxe Mountain Suite - Main View',
        isMain: true,
        sortOrder: 0
      }
    ],
    amenities: [
      {
        amenity: {
          name: 'WiFi',
          icon: 'fas fa-wifi',
          description: 'Free high-speed internet'
        }
      },
      {
        amenity: {
          name: 'Mountain View',
          icon: 'fas fa-mountain',
          description: 'Stunning mountain views'
        }
      }
    ]
  },
  {
    id: 2,
    name: 'Cozy Valley View',
    description: 'Comfortable apartment overlooking the beautiful valley',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    pricePerNight: 6500.00,
    isActive: true,
    property: {
      name: 'HK Heights Resort',
      description: 'Premium hill station resort',
      location: 'Hill Station, Pakistan'
    },
    images: [
      {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        altText: 'Cozy Valley View - Main View',
        isMain: true,
        sortOrder: 0
      }
    ],
    amenities: [
      {
        amenity: {
          name: 'WiFi',
          icon: 'fas fa-wifi',
          description: 'Free high-speed internet'
        }
      },
      {
        amenity: {
          name: 'Balcony',
          icon: 'fas fa-door-open',
          description: 'Private balcony'
        }
      }
    ]
  },
  {
    id: 3,
    name: 'Family Garden Villa',
    description: 'Perfect for families with garden access and play area',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    pricePerNight: 12000.00,
    isActive: true,
    property: {
      name: 'HK Heights Resort',
      description: 'Premium hill station resort',
      location: 'Hill Station, Pakistan'
    },
    images: [
      {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
        altText: 'Family Garden Villa - Main View',
        isMain: true,
        sortOrder: 0
      }
    ],
    amenities: [
      {
        amenity: {
          name: 'WiFi',
          icon: 'fas fa-wifi',
          description: 'Free high-speed internet'
        }
      },
      {
        amenity: {
          name: 'Mountain View',
          icon: 'fas fa-mountain',
          description: 'Stunning mountain views'
        }
      },
      {
        amenity: {
          name: 'Garden Access',
          icon: 'fas fa-seedling',
          description: 'Private garden access'
        }
      }
    ]
  }
]

export default defineEventHandler(async (event) => {
  try {
    // Check if DATABASE_URL is configured
    if (!process.env.DATABASE_URL) {
      console.log('DATABASE_URL not configured, using mock data')
      return { 
        success: true, 
        apartments: mockApartments,
        mock: true,
        source: 'fallback'
      }
    }

    console.log('Attempting to connect to database...')
    
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

    console.log(`Found ${apartments.length} apartments from database`)
    
    // If no apartments in database, return mock data
    if (apartments.length === 0) {
      console.log('No apartments found in database, returning mock data')
      return { 
        success: true, 
        apartments: mockApartments,
        mock: true,
        source: 'empty_db'
      }
    }

    return { 
      success: true, 
      apartments,
      source: 'database'
    }
  } catch (error) {
    console.error('Apartments API error:', error.message)
    console.log('Falling back to mock data due to database error')
    
    return { 
      success: true,
      apartments: mockApartments,
      mock: true,
      source: 'error_fallback',
      error_details: error.message
    }
  } finally {
    try {
      await prisma.$disconnect()
    } catch (e) {
      console.warn('Error disconnecting Prisma:', e.message)
    }
  }
})
