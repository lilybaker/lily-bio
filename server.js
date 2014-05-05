server.use(express.static('public'));
server.listen(3000)

var express = require("express");
var logfmt = require("logfmt");
var server = express();

server.use(logfmt.requestLogger());
server.use(express.static('public'));

var port = Number(process.env.PORT || 3000);
server.listen(port, function() {
  console.log("Listening on " + port);
});
