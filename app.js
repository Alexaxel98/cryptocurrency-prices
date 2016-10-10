var express = require('express');  
var app = express();  
var server = require('http').createServer(app);  
var io = require('socket.io')(server);
var mongoose = require('mongoose'); 
mongoose.connect("mongodb://localhost:27017/data");

var conn = mongoose.connection;
var request = require('request');


app.use(express.static(__dirname + '/bower_components'));  
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/index.html');
});

// Process API, obtain information and send to front end using socket.io
/* -------------------------------------------------------------------*/
var coin;
var coins;


request({
    url:'https://api.cryptonator.com/api/ticker/btc-usd',
    json:true},
    function(error,response,body){
        
        if(!error && response.statusCode === 200){
            coin = body;
            console.log(body);
            console.log(coin);
          conn.collection('crypto').insert(coin);
         
         conn.collection('crypto').find().toArray(function(err,results){
             if(err)
             throw err;
             coins = results;
             console.log(coins);
         });
             
        }
    }
    );


setInterval(
function coinMaker(){
request({
    url:'https://api.cryptonator.com/api/ticker/btc-usd',
    json:true},
    function(error,response,body){
        
        if(!error && response.statusCode === 200){
            coin = body;
            console.log(body);
            console.log(coin);
          conn.collection('crypto').insert(coin);
         
         conn.collection('crypto').find().toArray(function(err,results){
             if(err)
             throw err;
             coins = results;
             console.log(coins);
         });
             
        }
    }
    )}
    
    , 60000);
    
//setInterval(coinMaker(),60000);


/* -------------------------------------------------------------------*/

io.sockets.on('connection', function(socket) {  
    console.log('Client connected...');
        socket.emit('message', { message: 'welcome to the chat' });
        socket.emit('message',{type: JSON.stringify(coins)});
        setInterval(function(){
            socket.emit('message',{type:JSON.stringify(coins)});
        },65000);
    socket.on('join', function(data) {
       console.log(data.my);
       socket.emit('join', {my: 'hi'});
        //socket.emit('messages','hello');
    });

});


server.listen(8080);  