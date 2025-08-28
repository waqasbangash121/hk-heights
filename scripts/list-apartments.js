import { sql } from '../server/utils/neon'

async function listApartments() {
  try {
    const apartments = await sql`SELECT id, name FROM "Apartment" ORDER BY id ASC`;
    console.log('Apartments:');
    apartments.forEach(a => {
      console.log(`ID: ${a.id}, Name: ${a.name}`);
    });
  } catch (error) {
    console.error('Error fetching apartments:', error);
  }
}

listApartments();
