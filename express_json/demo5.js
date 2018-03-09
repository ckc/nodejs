var express = require('express');
var server = express();

var parser = require('body-parser');
var urlParser = parser.urlencoded({extended:false});

server.use(express.static('public'));

server.get('/', function(req,resp){
    var file = __dirname + "/public/web/getname.html";
    resp.sendFile(file);
});

server.listen(80,function(){
    console.log('Started');
});


server.get('/show_name', function(req,resp){
    resp.send('show_name');
});

server.post('/show_name', urlParser, function(req,resp){
    var fname = req.body.first_name;
    var lname = req.body.last_name;
    reply = {
        first_name:fname,
        last_name:lname
    };
    resp.send(JSON.stringify(reply));
    resp.end();
    
});