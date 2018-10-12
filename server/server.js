const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

const state = {players: {}};

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
    state.players[req.body.name] = Math.round(Math.random() * 10000);
    res.status(200).send(state);
});

app.delete('/unregister', function (req, res) {
    delete state.players[req.body.name];
    res.status(200).send(state);
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

// https://socket.io/get-started/chat/
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});