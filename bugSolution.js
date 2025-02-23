const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle potential errors
server.on('error', (err) => {
  console.error('Server error:', err);
  // Add more sophisticated error handling here, like logging to a file or notifying an external service
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
//This solution adds an 'error' event listener to the server. If an error occurs, it is logged to the console. More robust handling (like writing to a log file or sending alerts) could be implemented here.