var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle={};
handle["/"] = requestHandler.begin;
handle["/begin"] = requestHandler.begin;
handle["/upload"] = requestHandler.begin;

server.start(router.route, handle);
