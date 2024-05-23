// api/timer.js

const { EdgeConfig } = require('@vercel/edge-config');
const edgeConfig = new EdgeConfig(process.env.EDGE_CONFIG_ID);

module.exports = async (req, res) => {
  try {
    // Get the timer start time from Edge Config
    const timerStart = await edgeConfig.get('timerStart');
    const startTime = new Date(timerStart);
    const currentTime = new Date();

    // Calculate the elapsed time in seconds
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);

    res.status(200).json({ elapsedTime });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch timer data' });
  }
};
