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
    // For now, return an error about database not being configured
    // This will be clearer than a 500 error
    return { 
      error: 'Admin login requires database configuration. Please set up DATABASE_URL environment variable.',
      mock: true
    }
  } catch (err) {
    console.error('Login error:', err)
    return { 
      error: err.message,
      statusCode: 500
    }
  }
})
