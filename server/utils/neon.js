// Neon serverless Postgres utility
import { neon } from '@neondatabase/serverless'

const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error('DATABASE_URL is not set')

export const sql = neon(connectionString)

// Example usage:
// const rows = await sql`SELECT * FROM apartments`;
