// index.js
const express = require('express');
const pug = require('pug')
const https = require('https');
const fs = require('fs');
const path = require('path')

// Express app object
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Dynamic Html with pug
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')

const port = process.env.PORT || 443;

// Load SSL/TLS certificates
const privateKey = fs.readFileSync('private-key.pem', 'utf8');
const certificate = fs.readFileSync('certificate.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };


// Set up a simple route
app.get('/', async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Taking form data and redirecting to user page
app.post('/', async (req, res) => {
  console.log(req.body);
  res.render('index' , { 
      title : "Profile",
      username : req.body.username,
    });
})

// Create the HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the server
httpsServer.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
