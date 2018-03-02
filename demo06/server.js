var http = require("http");
var url = require("url");

function start(route, handle) {
    
function onRequest(req,res){
    var pathname=url.parse(req.url).pathname;
    console.log(pathname);
    
    
    
    res.writeHead(200, {"Content-Type":"text/plain"});
    
    var content = route(handle, pathname);
    res.write(content);
    res.end();
}
    http.createServer(onRequest).listen(80);
}



exports.start = start;
