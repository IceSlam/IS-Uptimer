const express = require('express')
const app = express()
const os = require('os')
const port = 20345

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'ISUptimer/0.1a');
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

      JSON.stringify({ uptime: os.uptime()})
  );
})

app.listen(port, () => {})
