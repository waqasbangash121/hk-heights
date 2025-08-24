import getPrisma from '../../../utils/getPrisma'

export default defineEventHandler(async (event) => {
  let prisma
  // Simple auth check
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { error: 'Unauthorized' }
  }

  const imageId = getRouterParam(event, 'id')

  try {
  try { prisma = new PrismaClient() } catch (clientErr) { console.error('PrismaClient instantiation failed:', clientErr); return { error: 'Database client init failed', details: clientErr?.message } }
  await prisma.apartmentImage.delete({
      where: { id: parseInt(imageId) }
    })

    return { success: true }
  } catch (error) {
    return { error: error.message }
  } finally {
  try { if (prisma) await prisma.$disconnect() } catch (e) { console.warn('Error disconnecting Prisma:', e.message) }
  }
})
