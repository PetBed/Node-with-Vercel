// server.js
require('@babel/register')({
    extensions: ['.js', '.ts']
  });
  
  const express = require('express');
  const { getTimerData } = require('./api/hello.ts'); // Import the function from hello.ts
  
  const app = express();
  
  const startTime = Date.now(); // Record the server start time
  
  app.use(express.json());
  
  app.get('/timer', (req, res) => {
    // Get the current timer data
    const data = getTimerData(startTime);
    
    // Send the timer data as a response
    res.json(data);
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  