-- CreateTable
CREATE TABLE "public"."AdminUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Property" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PropertyImage" (
    "id" SERIAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PropertyImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Apartment" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "maxGuests" INTEGER NOT NULL,
    "pricePerNight" DOUBLE PRECISION NOT NULL,
    "propertyId" INTEGER NOT NULL,

    CONSTRAINT "Apartment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ApartmentImage" (
    "id" SERIAL NOT NULL,
    "apartmentId" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "altText" TEXT,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ApartmentImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Amenity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Amenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ApartmentAmenity" (
    "id" SERIAL NOT NULL,
    "apartmentId" INTEGER NOT NULL,
    "amenityId" INTEGER NOT NULL,

    CONSTRAINT "ApartmentAmenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Guest" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Booking" (
    "id" SERIAL NOT NULL,
    "guestId" INTEGER NOT NULL,
    "apartmentId" INTEGER NOT NULL,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "guests" INTEGER NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "notes" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUser_username_key" ON "public"."AdminUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Amenity_name_key" ON "public"."Amenity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_email_key" ON "public"."Guest"("email");

-- AddForeignKey
ALTER TABLE "public"."PropertyImage" ADD CONSTRAINT "PropertyImage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Apartment" ADD CONSTRAINT "Apartment_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ApartmentImage" ADD CONSTRAINT "ApartmentImage_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "public"."Apartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ApartmentAmenity" ADD CONSTRAINT "ApartmentAmenity_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "public"."Apartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ApartmentAmenity" ADD CONSTRAINT "ApartmentAmenity_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "public"."Amenity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "public"."Guest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Booking" ADD CONSTRAINT "Booking_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "public"."Apartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
