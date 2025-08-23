const { Client } = require('pg');
const bcrypt = require('bcryptjs');

exports.handler = async (event) => {
  // Only allow POST to avoid accidental runs
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Set your desired admin username and password here
  const username = 'admin';
  const password = 'admin123'; // Change this to a secure password!

  const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_Q8km9DOTfFwb@ep-morning-star-adqatd6b-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  });

  try {
    await client.connect();
    // Create table if not exists
    await client.query(`CREATE TABLE IF NOT EXISTS admin_users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )`);
    // Check if user exists
    const exists = await client.query('SELECT * FROM admin_users WHERE username = $1', [username]);
    if (exists.rows.length === 0) {
      const hash = await bcrypt.hash(password, 10);
      await client.query('INSERT INTO admin_users (username, password) VALUES ($1, $2)', [username, hash]);
      await client.end();
      return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Admin user created.' }) };
    } else {
      await client.end();
      return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Admin user already exists.' }) };
    }
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
