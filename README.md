# Unhandled Errors in Node.js HTTP Server
This repository demonstrates a common yet easily overlooked error in Node.js: the absence of proper error handling in an HTTP server.  The provided `bug.js` file showcases a server without any error handling mechanisms.  This can lead to silent crashes or unexpected behavior when errors occur (network issues, invalid requests, etc.).  The `bugSolution.js` file provides a corrected version with comprehensive error handling.

## Bug
The `bug.js` file creates a simple HTTP server but fails to implement error handling. This means that any errors during the server's operation will not be caught, resulting in the server potentially crashing without a clear indication of the problem.

## Solution
The `bugSolution.js` file demonstrates how to properly handle errors within the server using `server.on('error', ...)` to gracefully handle various potential failures. This approach ensures the server doesn't crash unexpectedly and allows for more robust logging and error reporting.