const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const bound = require('./graphicLogic/courtBoundaries');

const state = {players: {}, bounds: []};

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
    state.players[Math.round(Math.random() * 10000)] = req.body.name;
    res.status(200).send(state);
});

app.post('/start', function (req, res) {
   console.log("starts game...");
});

app.post('/stop', function (req, res) {
   console.log("stops game..."); 
});

app.delete('/unregister', function (req, res) {
    delete state.players[req.body.id];
    res.status(200).send(state);
});

setInterval(() => {
   state.bounds = bound(Object.keys(state.players).length, 800, 800);
}, 20);

http.listen(3000, function () {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {
    setInterval(() => {
       io.emit('chat message', JSON.stringify(state));
    }, 3000);
});