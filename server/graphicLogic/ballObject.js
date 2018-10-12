module.exports = (ball, dt) => {
    function isOutOfBounds(aBall) {
        return false
    }

    function collidedWithPad() {
        return false
    }

    function hej() {
        return false
    }

    ball.y += Math.cos(ball.angle) * ball.v * dt;
    ball.x += Math.sin(ball.angle) * ball.v * dt;

    return ball;
};
