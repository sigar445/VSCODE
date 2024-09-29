// Import the Express module
const express = require("express");

// Create an instance of the Express app
const app = express();

// Set the port number
const PORT = process.env.PORT || 7777;

// Middleware to log the request
app.use((req, res, next) => {
    console.log(`Request received at ${new Date().toISOString()} on port ${PORT}`);
    next();
});

// Define the root route with a GET method
app.get("/", (req, res) => {
    const timestamp = new Date().toISOString(); // Get current timestamp
    res.send(`I am an endpoint served from port ${PORT} at ${timestamp}`);
});

// Start the server and listen on the specified port
app.listen(PORT, '0.0.0.0', () => { // Listen on 0.0.0.0 to accept requests from any interface
    console.log(`Server is listening on port ${PORT}`);
});

// Error handling for unexpected issues
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});
