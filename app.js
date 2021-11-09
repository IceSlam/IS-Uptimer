const express = require('express')
const app = express()
const os = require('os')
const port = 20345

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'ISUpNGN/0.1a');
  function format(seconds){
    function pad(s){
      return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60*60));
    var minutes = Math.floor(seconds % (60*60) / 60);
    var seconds = Math.floor(seconds % 60);
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
  }
  var uptime = process.uptime();
  res.end(

      JSON.stringify({
        uptime: {
          days: Math.floor(os.uptime() / 86400),
          hours: Math.floor((os.uptime() - 86400) / (60*60)),
          minutes: Math.floor(os.uptime() % (60*60) / 60),
          seconds: Math.floor(os.uptime() % 60),
          total_seconds: os.uptime()
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

app.listen(port, () => {})
