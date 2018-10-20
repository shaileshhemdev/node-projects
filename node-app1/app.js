var http = require('http');
var moment = require('moment');

http.createServer(function(req, res){
    console.log(moment().format(""));
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(3000,'127.0.0.1');

