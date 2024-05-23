// hello.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';

// This function will be called by the server to get the current timer value.
export function getTimerData(startTime: number) {
  const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
  return {
    timer: elapsedSeconds,
  };
}

// Vercel handler if you are using this with Vercel
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Assuming you pass the startTime somehow
  const startTime = Number(req.query.startTime);
  const data = getTimerData(startTime);
  return res.json(data);
}
