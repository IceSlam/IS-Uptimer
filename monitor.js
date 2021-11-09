const express = require('express')
const app = express()
const os = require('os')
const port = 20345

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'ISUpNGN/0.1a');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  var uptime = process.uptime();
  res.end(
      JSON.stringify({
        uptime: {
          days: Math.floor(os.uptime() / 86400),
          hours: Math.trunc((Math.floor(os.uptime() / 60 / 60 / 24) - Math.floor(os.uptime() / (60*60)) / 24) * -24),
          minutes: Math.floor(os.uptime() % (60*60) / 60),
          seconds: Math.floor(os.uptime() % 60),
          total_seconds: Math.trunc(os.uptime())
        },
        powered_by: {
          platform: 'ISUpNGN/0.1a',
          author: 'IceSlam',
          website: 'https://iceslam.ru',
          git: 'https://github.com/iceslam/ISUpNGN'
        }
      })
  );
})

app.listen(process.env.APP_PORT || port, process.env.APP_IP || 'localhost', () => {})
