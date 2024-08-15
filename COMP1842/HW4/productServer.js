var express = require('express'); // Import Express
var app = express(); // Create Express app

const mongoose = require('mongoose'); // Import Mongoose
const db = "mongodb://localhost:27017/api"; // MongoDB connection string
mongoose.connect(db)
    .then(() => console.log('Connected to DB successfully!')) // DB connection success
    .catch((err) => console.error('Connection to DB failed: ' + err)); // DB connection failure

const bodyParser = require('body-parser'); // Import Body-Parser
app.use(bodyParser.urlencoded({ extended : true })); // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

const router = require('./routes/productRoute'); // Import routes
router(app); // Use routes

var port = 5000; // Define port
app.listen(port); // Start server
console.log('Server is running at http://localhost:' + port + '/products'); // Log server running