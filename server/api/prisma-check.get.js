// Lightweight runtime check endpoint.
// Do NOT instantiate PrismaClient here to avoid opening connections in an
// environment where we only want to verify module resolution and availability.
export default defineEventHandler(async (event) => {
  const result = {
    success: false,
    node_env: process.env.NODE_ENV || null,
    env_DATABASE_URL_exists: !!process.env.DATABASE_URL,
    timestamp: new Date().toISOString()
  }

  try {
    // Dynamic import to avoid import-time failures
    const prismaModule = await import('@prisma/client')
    const PrismaClient = prismaModule?.PrismaClient || prismaModule?.default || prismaModule

    result.success = true
    result.prisma_imported = true
    result.prisma_type = typeof PrismaClient
    result.prisma_name = PrismaClient?.name || null
  } catch (err) {
    result.prisma_imported = false
    result.error_message = err?.message
    // keep stack short
    result.error_stack_short = err?.stack ? err.stack.split('\n').slice(0,6).join('\n') : undefined
  }

  return result
})
