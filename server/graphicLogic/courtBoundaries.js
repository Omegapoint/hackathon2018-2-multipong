module.exports = (nPlayers, canvasHeight, canvasWidth) => {
    const minDimension = Math.max(canvasHeight,canvasWidth)
    const radius = minDimension / 2
    const midpoint = [canvasWidth/2, canvasHeight/2]

    const pi = 3.1415

    function boundaryFactory(midpoint, nPlayers, boundaryIndex) {
        if (nPlayers === 1) {
            nPlayers = 2
        }

        turnAngle = pi / (2 * nPlayers)
        pointLocationAngle = ( pi / nPlayers) * boundaryIndex
        pointLocation = [Math.cos(pointLocationAngle)*radius, Math.sin(pointLocationAngle)*radius]
        //startingPoint = [midpoint-(boundaryLength/2), midpoint+boundaryLength]
        boundaryLength = 2 * radius * Math.tan(pi/(2*nPlayers))
        startCoord = [pointLocation[0]*(boundaryLength/2)*Math.sin(pointLocationAngle-(pi/2)),pointLOcation[1]]
        endCoord =
            jsonResponse = {}
    }

    if (nPlayers < 3) {
        return [{},{},{},{}]
    }