// index.js
const express = require('express');
const pug = require('pug')
const path = require('path')

// Express app object
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Dynamic Html with pug
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')

const port = process.env.PORT || 80;

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
