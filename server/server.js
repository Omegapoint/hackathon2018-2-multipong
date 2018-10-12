const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const bound = require('./graphicLogic/courtBoundaries');
const ball = require('./graphicLogic/ballObject');

const state = {players: {}, bounds: [], balls: []};

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

createPlayer("aaa");
createPlayer("bbb");
createPlayer("ccc");
createPlayer("ddd");
createPlayer("eee");
calculateBounds(Object.keys(state.players).length);

function createPlayer(name) {
    state.players[Math.round(Math.random() * 10000)] = {name: name, padAngle: Math.random()*2*3.1415};
}

function calculateBounds(numberOfPlayers) {
    state.bounds = bound(numberOfPlayers, 800, 800);
}

app.post('/register', function (req, res) {
    calculateBounds(Object.keys(state.players).length + 1);
    createPlayer(req.body.name);
    res.status(200).send(state);
});

app.post('/start', function (req, res) {
    console.log("starts game...");
    state.balls[0] = {x: 400, y: 400, v: 100, radius: 20, angle: 0};
    res.status(200).send();
});

app.post('/stop', function (req, res) {
    console.log("stops game...");
});

app.delete('/unregister', function (req, res) {
    delete state.players[req.body.id];
    calculateBounds(Object.keys(state.players).length);
    res.status(200).send(state);
});

setInterval(() => {
    state.balls.forEach(element => {
        element = ball(element, 0.01);
    })
}, 10);

http.listen(3000, function () {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {
    setInterval(() => {
        io.emit('pong', state);
    }, 20);
});