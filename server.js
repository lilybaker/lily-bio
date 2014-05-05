var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
 
app.get('/', function(request, response) {
    response.sendfile(__dirname + '/public/index.html');
}).configure(function() {
    app.use('/', express.static(__dirname + '/public'));
}).listen(port);