

import { PrismaClient } from '~/generated/prisma';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {
    name,
    email,
    phone,
    apartmentId,
    checkinDate,
    checkoutDate,
    guests,
    specialRequests
  } = body

  // Split name into firstName and lastName (simple split)
  const [firstName, ...lastArr] = (name || '').split(' ');
  const lastName = lastArr.join(' ');

  if (!firstName || !lastName || !email || !apartmentId || !checkinDate || !checkoutDate || !guests) {
    return { error: 'Missing required fields' }
  }

  try {
    // Check if apartment is available for the selected dates
    const existingBooking = await prisma.booking.findFirst({
      where: {
        apartmentId: Number(apartmentId),
        status: { not: 'CANCELLED' },
        OR: [
          {
            checkIn: { lte: new Date(checkinDate) },
            checkOut: { gt: new Date(checkinDate) }
          },
          {
            checkIn: { lt: new Date(checkoutDate) },
            checkOut: { gte: new Date(checkoutDate) }
          },
          {
            checkIn: { gte: new Date(checkinDate) },
            checkOut: { lte: new Date(checkoutDate) }
          }
        ]
      }
    });
    if (existingBooking) {
      return { error: 'Apartment is not available for the selected dates' };
    }

    // Create or find guest
    let guest = await prisma.guest.findUnique({ where: { email } });
    if (!guest) {
      guest = await prisma.guest.create({
        data: { firstName, lastName, email, phone }
      });
    }

    // Calculate totalAmount (optional: can be calculated on backend)
    const apartment = await prisma.apartment.findUnique({ where: { id: Number(apartmentId) } });
    let totalAmount = 0;
    if (apartment) {
      const nights = Math.ceil((new Date(checkoutDate).getTime() - new Date(checkinDate).getTime()) / (1000 * 60 * 60 * 24));
      totalAmount = nights * Number(apartment.pricePerNight);
    }

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        guestId: guest.id,
        apartmentId: Number(apartmentId),
        checkIn: new Date(checkinDate),
        checkOut: new Date(checkoutDate),
        guests: Number(guests),
        totalAmount,
        notes: specialRequests,
        status: 'PENDING'
      },
      include: {
        guest: true,
        apartment: true
      }
    });

    // Format response for frontend
    return {
      success: true,
      booking: {
        id: booking.id,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        guests: booking.guests,
        totalAmount: booking.totalAmount,
        notes: booking.notes,
        status: booking.status,
        guest: booking.guest
          ? {
              id: booking.guest.id,
              firstName: booking.guest.firstName,
              lastName: booking.guest.lastName,
              email: booking.guest.email,
              phone: booking.guest.phone
            }
          : null,
        apartment: booking.apartment
      }
    };
  } catch (error) {
    return { error: error.message };
  } finally {
    await prisma.$disconnect();
  }
});
