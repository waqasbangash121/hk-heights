
import { sql } from '../utils/neon'

// Mock data as fallback when database is not available
const mockApartments = [
  {
    id: 1,
    name: 'Deluxe Mountain Suite',
    description: 'Spacious suite with panoramic mountain views and modern amenities',
    bedrooms: 2,
    bathrooms: 2,

    maxGuests: 4,
    // ...existing code...
  }
]

export default defineEventHandler(async (event) => {
  try {
    if (!process.env.DATABASE_URL) {
      return { success: true, apartments: mockApartments, mock: true, source: 'fallback' }
    }

    // Query apartments with property, images, amenities
    const apartments = await sql`
      SELECT a.*, 
        row_to_json(p.*) as property,
        COALESCE(json_agg(DISTINCT i.*) FILTER (WHERE i.id IS NOT NULL), '[]') as images,
        COALESCE(json_agg(DISTINCT jsonb_build_object('amenity', row_to_json(am.*))) FILTER (WHERE am.id IS NOT NULL), '[]') as amenities
      FROM "Apartment" a
      LEFT JOIN "Property" p ON a."propertyId" = p.id
      LEFT JOIN "ApartmentImage" i ON i."apartmentId" = a.id
      LEFT JOIN "ApartmentAmenity" aa ON aa."apartmentId" = a.id
      LEFT JOIN "Amenity" am ON am.id = aa."amenityId"
      WHERE a."isActive" = true
      GROUP BY a.id, p.id
      ORDER BY a.id ASC
    `;

    const result = apartments.map(row => ({
      ...row,
      images: Array.isArray(row.images) ? row.images : [],
      amenities: Array.isArray(row.amenities) ? row.amenities : [],
      property: row.property || null
    }))

    if (result.length === 0) {
      return { success: true, apartments: mockApartments, mock: true, source: 'empty_db' }
    }
    return { success: true, apartments: result, source: 'database' }
  } catch (error) {
    return {
      success: false,
      apartments: mockApartments,
      mock: true,
      source: 'error_fallback',
      error_message: error?.message,
      error_stack: error?.stack
    }
  }
})
