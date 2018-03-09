var express = require('express');
var server = express();

server.get('/', function(req,resp){
   console.log('GET', '/');
    resp.send('Hello GET /');
});

server.get('/showUser:id', function(req,resp){
   console.log('GET', 'showUser');
    resp.send('showUser ' + req.params.id);
});

server.get('/listUser', function(req,resp){
   console.log('GET', 'listUser');
    resp.send('showUser');
});

server.put('/addUser', function(req,resp){
   console.log('PUT', '/addUser');
    resp.send('add user');
});



server.listen(80,function(){
    console.log('Started');
});