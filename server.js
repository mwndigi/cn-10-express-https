const http = require('http');
const https = require('https');
const fs = require('fs');
const express = require('express')
const app = express()
const httpApp = express()

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

httpApp.get('*', (req, res, next) => {
    if (!req.secure) {
        res.redirect('https://' + req.hostname + req.path)
    }
    next()
});

http.createServer(httpApp).listen(80, () => {
    console.log('Express HTTP server listening on port 80')
})

https.createServer(options, app).listen(443, () => {
    console.log('Express HTTP server listening on port 443')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
