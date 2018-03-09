var express = require('express');
var server = express();

server.use(express.static('public')); // access server file

server.get('/', function(req,resp){
    resp.send('Root ');
});


server.get('/showUser', function(req,resp){
    resp.send('showUser');
});

server.listen(80,function(){
    console.log('Started');
});
