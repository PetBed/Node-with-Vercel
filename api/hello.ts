import type { VercelRequest, VercelResponse } from '@vercel/node';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const startTimeKey = 'server_start_time';

  // Check if the start time exists in Redis
  let startTime = await redis.get(startTimeKey);
  
  if (!startTime) {
    // Set the start time if it doesn't exist
    startTime = Date.now().toString();
    await redis.set(startTimeKey, startTime);
  }

  const elapsedSeconds = Math.floor((Date.now() - parseInt(startTime, 10)) / 1000);
  
  return res.json({
    timer: elapsedSeconds,
  });
}