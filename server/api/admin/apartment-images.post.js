import { PrismaClient } from '@prisma/client'

export default defineEventHandler(async (event) => {
  let prisma
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const body = await readBody(event)
  const { apartmentId, imageUrl, altText, isMain } = body

  if (!apartmentId || !imageUrl) {
    return { error: 'Missing required fields: apartmentId, imageUrl' }
  }

  try {
  try { prisma = new PrismaClient() } catch (clientErr) { console.error('PrismaClient instantiation failed:', clientErr); return { error: 'Database client init failed', details: clientErr?.message } }
    // If setting as main image, unset other main images first
    if (isMain) {
      await prisma.apartmentImage.updateMany({
        where: { apartmentId: parseInt(apartmentId) },
        data: { isMain: false }
      })
    }

    // Get current max sort order
    const maxSortOrder = await prisma.apartmentImage.findFirst({
      where: { apartmentId: parseInt(apartmentId) },
      orderBy: { sortOrder: 'desc' },
      select: { sortOrder: true }
    })

    const image = await prisma.apartmentImage.create({
      data: {
        apartmentId: parseInt(apartmentId),
        imageUrl,
        altText: altText || '',
        isMain: isMain || false,
        sortOrder: (maxSortOrder?.sortOrder || 0) + 1
      }
    })

    return { success: true, image }
  } catch (error) {
    return { error: error.message }
  } finally {
  try { if (prisma) await prisma.$disconnect() } catch (e) { console.warn('Error disconnecting Prisma:', e.message) }
  }
})
