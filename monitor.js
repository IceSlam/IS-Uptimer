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
            server_time: new Date(),
            uptime: {total_uptime: Math.floor(os.uptime() / 86400) + ' дней ' + Math.trunc((Math.floor(os.uptime() / 60 / 60 / 24) - Math.floor(os.uptime() / (60*60)) / 24) * -24) + ' часов ' + Math.floor(os.uptime() % (60*60) / 60) + ' минут ' + Math.floor(os.uptime() % 60) + ' секунд',
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

app.listen(process.env.APP_PORT || 20345, process.env.APP_IP || '0.0.0.0', () => {
    console.log(`Uptime monitor ISUpNGN started on ${process.env.APP_IP || '0.0.0.0'}:${process.env.APP_PORT || 20345}`)
})
