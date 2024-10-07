// Create web server
// Create a web server that listens for requests on port 3000 and responds with the comments array.

const http = require('http');
const comments = require('./comments');
const port = 3000;

const requestHandler = (request, response) => {
    response.end(JSON.stringify(comments));
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('An error occurred: ', err);
    }

    console.log(`server is listening on ${port}`);
});