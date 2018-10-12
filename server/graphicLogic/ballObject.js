module.exports = (ball, dt) => {
    ball.y += Math.sin(ball.angle) * ball.v * dt;
    ball.x += Math.cos(ball.angle) * ball.v * dt;

    if (ball.x > 600) {
        const reflectionAngle = 0;

        // const ballAngle = ball.angle;
        // const dx = Math.cos(ballAngle);
        // const dy = Math.sin(ballAngle);
        //
        // const tempAngle = -(Math.PI - 2 * reflectionAngle);
        // const newStepX = -Math.cos(tempAngle) * dx + Math.sin(tempAngle) * dy;
        // const newDy = Math.sin(tempAngle) * dx + Math.cos(tempAngle) * dy;
        // const newDx = newStepX;
        //
        // // const newBallAngle = Math.atan(newDy / newDx);
        // // const newBallAngle = ballAngle + reflectionAngle;
        // const newBallAngle = 2*ballAngle - reflectionAngle/2;

        const dx = Math.cos(ball.angle);
        const dy = Math.sin(ball.angle);

        const a = 3.14/2 - reflectionAngle;

        const nx = -Math.cos(a)*Math.cos(-a)*dx + Math.cos(a)*Math.sin(-a)*dy;
        const ny = -Math.sin(a)*Math.cos(-a)*dx + Math.sin(a)*Math.sin(-a)*dy;

        const newBallAngle = Math.atan(ny/nx);

        ball.angle = newBallAngle + 3.14/2;
        ball.x = ball.x - 5;
    }

    if (ball.x < 200) {
        const reflectionAngle = 0;

        // const ballAngle = ball.angle;
        // const dx = Math.cos(ballAngle);
        // const dy = Math.sin(ballAngle);
        //
        // const tempAngle = -(Math.PI - 2 * reflectionAngle);
        // const newStepX = -Math.cos(tempAngle) * dx + Math.sin(tempAngle) * dy;
        // const newDy = Math.sin(tempAngle) * dx + Math.cos(tempAngle) * dy;
        // const newDx = newStepX;
        //
        // // const newBallAngle = Math.atan(newDy / newDx);
        // // const newBallAngle = ballAngle + reflectionAngle;
        // const newBallAngle = 2*ballAngle - reflectionAngle/2;

        const dx = Math.cos(ball.angle);
        const dy = Math.sin(ball.angle);

        const a = 3.14/2 - reflectionAngle;

        const nx = (-Math.cos(a)*Math.cos(-a) - Math.sin(a)*Math.sin(-a))*dx + (Math.cos(a)*Math.sin(-a) - Math.sin(a)*Math.cos(-a))*dy;
        const ny = -(Math.sin(a)*Math.cos(-a) + Math.cos(a)*Math.sin(-a))*dx + (Math.sin(a)*Math.sin(-a) + Math.cos(a)*Math.cos(-a))*dy;

        const newBallAngle = Math.atan(ny/nx);

        ball.angle = newBallAngle;
        ball.x = ball.x + 5;
    }

    return ball;
};

//
// private void reflectRay(double theta) {
//
//     double newStepX, angle;
//     angle = Math.PI - 2*theta;
//     newStepX = -Math.cos(angle)*stepX + Math.sin(angle)*stepY;
//
//     stepY = Math.sin(angle)*stepX + Math.cos(angle)*stepY;
//
//     stepX = newStepX;
//
// }