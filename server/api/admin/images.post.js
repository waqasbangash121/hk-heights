import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // Simple auth check - in production, use proper JWT validation
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const body = await readBody(event)
  const { type, entityId, imageUrl, altText, isMain } = body

  if (!type || !entityId || !imageUrl) {
    return { error: 'Missing required fields: type, entityId, imageUrl' }
  }

  try {
    let result

    if (type === 'property') {
      // If setting as main image, unset other main images first
      if (isMain) {
        await prisma.propertyImage.updateMany({
          where: { propertyId: parseInt(entityId) },
          data: { isMain: false }
        })
      }

      result = await prisma.propertyImage.create({
        data: {
          propertyId: parseInt(entityId),
          imageUrl,
          altText,
          isMain: isMain || false,
          sortOrder: 0
        }
      })
    } else if (type === 'apartment') {
      // If setting as main image, unset other main images first
      if (isMain) {
        await prisma.apartmentImage.updateMany({
          where: { apartmentId: parseInt(entityId) },
          data: { isMain: false }
        })
      }

      result = await prisma.apartmentImage.create({
        data: {
          apartmentId: parseInt(entityId),
          imageUrl,
          altText,
          isMain: isMain || false,
          sortOrder: 0
        }
      })
    } else {
      return { error: 'Invalid type. Must be "property" or "apartment"' }
    }

    return { success: true, image: result }
  } catch (error) {
    return { error: error.message }
  }
})
