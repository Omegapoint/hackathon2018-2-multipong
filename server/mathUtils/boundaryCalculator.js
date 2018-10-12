module.exports = (ball, nPlayers, canvasHeight, canvasWidth) => {
    const minDimension = Math.max(canvasHeight,canvasWidth)
    const radius = minDimension / 2.5
    const midpoint = [canvasWidth/2, canvasHeight/2]

    const shortSide = radius * Math.tan(3.1415/(2*nPlayers))
    const longSide = radius
    const sliceAngle = Math.tan(shortSide/longSide)
    

    const ballx = ball.x - midpoint[0]
    const bally = ball.y - midpoint[1]

    ballAngle = Math.tan(bally/ballx)

    let rOut = 0

    if ((ballAngle % sliceAngle) % 2 === 0) {
        rOut = radius / Math.cos(ballAngle)
    } else {
        rOut = radius / Math.cos(2*sliceAngle-ballAngle)
    }

    return rOut
}