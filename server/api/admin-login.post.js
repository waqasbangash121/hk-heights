import { sql } from '../utils/neon'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
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

  // Query admin user by username
  const users = await sql`SELECT * FROM "AdminUser" WHERE "username" = ${username}`;
  const user = users[0];


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

  // No disconnect needed for Neon
  }
})
