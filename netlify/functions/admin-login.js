import { PrismaClient } from '../../generated/prisma';
import bcrypt from 'bcryptjs';

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const { username, password } = JSON.parse(event.body || '{}');
  if (!username || !password) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing credentials' }) };
  }
  const prisma = new PrismaClient();
  try {
    const user = await prisma.adminUser.findUnique({ where: { username } });
    if (!user) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Invalid credentials' }) };
    }
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
  } finally {
    await prisma.$disconnect();
  }
}
