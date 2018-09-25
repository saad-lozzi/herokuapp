const express = require('express');
const fs = require('fs');
const https = require('https');
const path = require('path');

const app = express();
const directory = 'client'
const port = 3443

app.use('/',express.static(path.join(__dirname, '..',directory)))
const httpsOptions = {
	cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
	key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}
https.createServer(httpsOptions, app)
.listen(port, function(){
	console.log(`Serving the ${directory}/ directory at https://localhost:${port}`)
})
