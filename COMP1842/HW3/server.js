const http = require('http'); // Import http module

const hostname = 'localhost'; // Define hostname
const port = 9000; // Define port

const server = http.createServer((req, res) => {
    // Set the status code and content type for the response
    // Handle different routes
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' }); // Set content type to JSON
        res.write('Homepage!'); // Write response for homepage
        res.end(); // End response
    } else if (req.url === '/student') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Set content type to HTML
        res.write('Student'); // Write response for student page
        res.end(); // End response
    } else if (req.url === '/admin') {
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Set content type to HTML
        res.write('Admin'); // Write response for admin page
        res.end(); // End response
    } else if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' }); // Set content type to JSON
        res.write('{"message": "HELLO WORLD JSON?"}'); // Write JSON response - Not Finished
        res.end(); // End response
    } else {
        // Default response for any other route
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Set content type to HTML
        res.write('<img src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg" width="1600" height="900">'); // Write image response
        res.end(); // End response
    }
});

// Start the server and log that it's running
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

