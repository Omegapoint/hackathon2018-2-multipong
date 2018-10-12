module.exports = (ball, dt) => {
    ball.y += Math.cos(ball.angle) * ball.v * dt;
    ball.x += Math.sin(ball.angle) * ball.v * dt;

    return ball;
};
