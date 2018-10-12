const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const bound = require('./graphicLogic/courtBoundaries');
const ballUpdate = require('./graphicLogic/ballObject');
const boundaryCalculator = require('./rules/boundsChecker');

const state = {players: {}, bounds: [], balls: [], gameOver: false};

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
    let id = Math.round(Math.random() * 10000);
    state.players[id] = {name: name, padAngle: Math.random()*2*3.1415, direction: 0};
    return id;
}

function calculateBounds(numberOfPlayers) {
    state.bounds = bound(numberOfPlayers, 800, 800);
}

app.post('/register', function (req, res) {
    calculateBounds(Object.keys(state.players).length + 1);
    const id = createPlayer(req.body.name);
    res.status(200).send({id: id});
});

app.post('/start', function (req, res) {
    console.log("starts game...");
    state.balls[0] = {x: 400, y: 400, v: 100, radius: 5, angle: 3.9*3.1415/2};
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
    if (!state.gameOver) {
        state.balls.forEach(element => {
            element = ballUpdate(element, 0.01);
            state.gameOver = boundaryCalculator(element, Object.keys(state.players).length, 800, 800);

            if (state.gameOver) {
                console.log("GAME OVER");
            }
        });
    }
}, 10);

http.listen(3000, function () {
    console.log('listening on *:3000');
});

io.on('connection', function (socket) {
    setInterval(() => {
        io.emit('pong', state);
    }, 20);

    socket.on('pongkey', function(msg){
        if (state.players[msg.token]) {
            state.players[msg.token].direction = msg.direction;
        }
    });
});