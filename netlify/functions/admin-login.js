const { Client } = require('pg');
const bcrypt = require('bcryptjs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const { username, password } = JSON.parse(event.body || '{}');
  if (!username || !password) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing credentials' }) };
  }
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_Q8km9DOTfFwb@ep-morning-star-adqatd6b-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  });
  try {
    await client.connect();
    const res = await client.query('SELECT * FROM admin_users WHERE username = $1', [username]);
    await client.end();
    if (res.rows.length === 0) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Invalid credentials' }) };
    }
    const user = res.rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Invalid credentials' }) };
    }
    // For demo: use a simple token (in production, use JWT)
    const token = Buffer.from(`${user.id}:${user.username}`).toString('base64');
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, token }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
