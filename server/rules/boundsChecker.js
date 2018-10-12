module.exports = (ball, nPlayers, canvasWidth, canvasHeight) => {
    const minDimension = Math.min(canvasHeight, canvasWidth);
    const radius = minDimension / 2.5;
    const midpoint = [canvasWidth / 2, canvasHeight / 2];

    const shortSide = radius * Math.tan(3.1415 / (2 * (nPlayers === 1 ? 2 : nPlayers)));
    const longSide = radius;
    const sliceAngle = Math.tan(shortSide / longSide);

    const ballx = ball.x - midpoint[0];
    const bally = midpoint[1] - ball.y;
    const ballDistance = Math.sqrt(Math.pow(ballx, 2) + Math.pow(bally, 2));
    const ballAngle = 3.1415 / 2 - Math.tan(bally / (ballx === 0 ? 0.0001 : ballx));

    if ((ballAngle % sliceAngle) % 2 === 0) {
        return ballDistance > (radius / Math.abs(Math.cos(ballAngle)));
    }
    return ballDistance > (radius / Math.abs(Math.cos(2 * sliceAngle - ballAngle)));
};