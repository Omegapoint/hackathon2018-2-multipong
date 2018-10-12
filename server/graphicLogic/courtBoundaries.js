module.exports = (nPlayers, canvasHeight, canvasWidth) => {
    const minDimension = Math.max(canvasHeight,canvasWidth)
    const radius = minDimension / 2
    const midpoint = [canvasWidth/2, canvasHeight/2]

    function boundaryFactory(midpoint, nPlayers, boundaryIndex) {
        if (nPlayers === 1) {
            nPlayers = 2
        }
        turnAngle = 3.1415 / (2 * nPlayers)
        pointLocationAngle = ( 3.1415 / nPlayers) * boundaryIndex
        pointLocation = [Math.cos(pointLocationAngle)*radius, Math.sin(pointLocationAngle)*radius]
        //startingPoint = [midpoint-(boundaryLength/2), midpoint+boundaryLength]
        boundaryLength = 2 * radius * Math.tan(90/nPlayers)
        startCoord = [pointLocation[0],pointLOcation[1]]
        endCoord = 
        jsonResponse = {}
    }

    if (nPlayers < 3) {
        [{},{},{},{}]
    }
}