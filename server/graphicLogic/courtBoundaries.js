module.exports = (nPlayers, canvasHeight, canvasWidth) => {
    const minDimension = Math.max(canvasHeight,canvasWidth)
    const radius = minDimension / 2
    const midpoint = [canvasWidth/2, canvasHeight/2]
    let nBoundaries = 0
    if (nPlayers < 3) {
        nBoundaries = 4 
    } else {
        nBoundaries = nPlayers * 2
    }

    const pi = 3.1415

    function boundaryFactory(midpoint, nPlayers, boundaryIndex) {
        if (nPlayers === 1) {
            nPlayers = 2
        }
        const pointLocationAngle = (pi/2) - ( pi / nPlayers) * boundaryIndex
        const pointLocation = [(midpoint[0]+Math.cos(pointLocationAngle)*radius), (midpoint[1]+Math.sin(pointLocationAngle)*radius)]
        const boundaryLength = 2 * radius * Math.tan(pi/(2*nPlayers))
        console.log(pointLocation)
        const startCoord = [pointLocation[0]+(boundaryLength/2)*Math.sin(pointLocationAngle-(pi/2)),
        pointLocation[1]+(boundaryLength/2)*Math.cos(pointLocationAngle-(pi/2))]
        const endCoord = [pointLocation[0]+(boundaryLength/2)*Math.sin(pointLocationAngle+(pi/2)),
        pointLocation[1]+(boundaryLength/2)*Math.cos(pointLocationAngle+(pi/2))]

        let playerBool = false
        if (boundaryIndex % 2) {
            playerBool = true
        }

        return {
            start: startCoord,
            end: endCoord,
            player: playerBool
        }

    }

    boundaryArray = []

    for(let i = 0 ; i < nBoundaries ; i++) {
        boundaryArray.push(boundaryFactory(midpoint, nPlayers, i))
    }

    return boundaryArray
}