module.exports = (ball, dt) => {
    ball.y += Math.sin(ball.angle) * ball.v * dt;
    ball.x += Math.cos(ball.angle) * ball.v * dt;

    return ball;
};
