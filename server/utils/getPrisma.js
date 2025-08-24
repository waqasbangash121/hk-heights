// Returns a cached PrismaClient instance (singleton per datasource URL). If
// PRISMA_DATA_PROXY_URL is set it will be used so the same client targets the
// Prisma Data Proxy in serverless environments.
export default async function getPrisma() {
  const dsUrl = process.env.PRISMA_DATA_PROXY_URL || process.env.DATABASE_URL || ''

  // Use a global cache so the client is reused across lambda invocations where
  // possible (avoids many cold-start creations). Keyed by datasource URL so
  // different targets can coexist in the same process.
  if (!globalThis.__prismaClients) globalThis.__prismaClients = new Map()
  const cacheKey = `prisma:${dsUrl}`
  if (globalThis.__prismaClients.has(cacheKey)) {
    return globalThis.__prismaClients.get(cacheKey)
  }

  const prismaModule = await import('@prisma/client')
  const PrismaClient = prismaModule?.PrismaClient || prismaModule?.default || prismaModule
  const options = dsUrl ? { datasources: { db: { url: dsUrl } } } : {}
  const client = new PrismaClient(options)

  // Store in global cache
  try {
    globalThis.__prismaClients.set(cacheKey, client)
  } catch (e) {
    // ignore cache failures
  }

  return client
}
