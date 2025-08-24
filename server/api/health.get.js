// Simple health check endpoint
export default defineEventHandler(async (event) => {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      DATABASE_URL_EXISTS: !!process.env.DATABASE_URL,
      NITRO_PRESET: process.env.NITRO_PRESET
    },
    message: 'API is working'
  }
})
