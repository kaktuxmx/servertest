const http = require('http');

const PORT7000 = 7000;

const PORT7500 = 7500;

const handleRequest7000 = function (req, res) {

    res.end('Martin loves la Cindy and Beer and Bacon' + req.url);

}

const handleRequest7500 = function (req, res) {

    res.end('Martin loves tacos too much and is now gordito' + req.url);

}

const server7000 = http.createServer(handleRequest7000);

const server7500 = http.createServer(handleRequest7500);

server7000.listen(PORT7000, () =>
    console.log('Server is listening on: ' + PORT7000));

server7500.listen(PORT7500, () =>
    console.log('Server is listening on: ' + PORT7500));
