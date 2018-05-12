var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    var params = url.parse(req.url, true).query;
    res.write("Keyword = " + params.keyword);
    res.write("\n");
    res.write("Category = " + params.category);
    res.write("\n");
    res.write("distance = " + params.distance);
    res.write("\n");
    res.write("location = " + params.distance);
    res.write("\n");

    res.end();
}).listen(63342);