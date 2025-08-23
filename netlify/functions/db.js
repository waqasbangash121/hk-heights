const { Client } = require('pg');

exports.handler = async (event, context) => {
  const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_Q8km9DOTfFwb@ep-morning-star-adqatd6b-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  });

  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    await client.end();
    return {
      statusCode: 200,
      body: JSON.stringify({ time: res.rows[0] }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
