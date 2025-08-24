import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  let prisma
  if (event.method !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const body = await readBody(event)
  const { username, password } = body || {}

  console.log('Login attempt:', { username, hasPassword: !!password })

  if (!username || !password) {
    return { error: 'Missing credentials' }
  }

  try {
    // Check if DATABASE_URL is configured
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured')
      return { 
        error: 'Database not configured. Please contact administrator.',
        mock: true
      }
    }

    console.log('Attempting to find user in database...')
    try {
      prisma = new PrismaClient()
    } catch (clientErr) {
      console.error('PrismaClient instantiation failed:', clientErr)
      return { error: 'Database client init failed', details: clientErr?.message }
    }

    const user = await prisma.adminUser.findUnique({
      where: { username }
    })

    console.log('User found:', !!user)

    if (!user) {
      return { error: 'Invalid credentials' }
    }

    const valid = await bcrypt.compare(password, user.password)
    console.log('Password valid:', valid)

    if (!valid) {
      return { error: 'Invalid credentials' }
    }

    // For demo: use a simple token (in production, use JWT)
    const token = Buffer.from(`${user.id}:${user.username}`).toString('base64')
    return { success: true, token }
  } catch (err) {
    console.error('Login error:', err)
    return { 
      error: 'Login failed: ' + err.message,
      statusCode: 500
    }
  } finally {
    try {
      if (prisma) await prisma.$disconnect()
    } catch (e) {
      console.warn('Error disconnecting Prisma:', e.message)
    }
  }
})
