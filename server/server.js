var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const bodyParser = require('body-parser');

const state = { players: {} };

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', function(req, res) {
   console.log(req.body);
   state.players[req.body.name] = Math.round(Math.random()*10000);
   console.log(state);
   res.status(200).send(state);
});

app.delete('/unregister', function(req, res) {
    delete state.players[req.body.name];
    res.status(200).send(state);

    console.log(state);
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

// https://socket.io/get-started/chat/
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});