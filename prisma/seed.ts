import { PrismaClient } from '../generated/prisma';
const prisma = new PrismaClient();

async function main() {
  // Create Admin User
  await prisma.adminUser.upsert({
    where: { username: 'admin' },
    update: { password: '$2b$10$G.WTsJ/odUKycblS/AB2g.LFkhMC6hzTzLjd3vN9qB9KRmVcRZrqa' },
    create: {
      username: 'admin',
      password: '$2b$10$G.WTsJ/odUKycblS/AB2g.LFkhMC6hzTzLjd3vN9qB9KRmVcRZrqa',
    },
  });

  // Create Amenities
  const wifi = await prisma.amenity.create({ data: { name: 'WiFi' } });
  const parking = await prisma.amenity.create({ data: { name: 'Parking' } });

  // Create Apartments
  const apt1 = await prisma.apartment.create({
    data: {
      name: 'Deluxe Suite',
      description: 'A beautiful deluxe suite.',
      bedrooms: 2,
      bathrooms: 2,
      maxGuests: 4,
      pricePerNight: 150,
      amenities: {
        create: [
          { amenity: { connect: { id: wifi.id } } },
          { amenity: { connect: { id: parking.id } } },
        ],
      },
    },
  });

  // Create Guest
  const guest = await prisma.guest.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '1234567890',
    },
  });

  // Create Booking
  await prisma.booking.create({
    data: {
      guestId: guest.id,
      apartmentId: apt1.id,
      checkIn: new Date('2025-09-01'),
      checkOut: new Date('2025-09-05'),
      guests: 2,
      totalAmount: 600,
      notes: 'No special requests.',
      status: 'CONFIRMED',
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
