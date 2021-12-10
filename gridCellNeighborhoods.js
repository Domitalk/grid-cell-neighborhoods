const gridCellNeighborhoods = (grid, N) => {

    const gridRowLength = grid.length
    const gridColLength = grid[0].length
    
    let trueFalseGrid = []

    for (let i = 0; i < gridRowLength; i++) {
        let tempArr = []
        for (let j = 0; j < gridColLength; j++) {
            tempArr.push(false)
        }
        trueFalseGrid.push(tempArr)
    }
    
    let count = 0
        
    const flipToTrue = (targetRow, targetCol) => {

        if (N == 0) {
            trueFalseGrid[targetRow][targetCol] = true
            return
        }

        const topValue = targetRow - N
        const bottomValue = targetRow + N
        
        let increments = 0
        
        for (let r = topValue; r <= bottomValue; r++) {
            if (r <= targetRow) {
                increments++
            } else {
                increments--
            }

            let xVal = r 
            // if wrapping, then find the value on the other side 
            if (xVal < 0) {
                xVal = gridRowLength + xVal - 1
            } else if (xVal > gridRowLength) {
                xVal = xVal - gridRowLength - 1
            }

            for (let c = (targetCol - increments); c <= (targetCol + increments); c++) {
                let yVal = c 

                if (yVal < 0) {
                    yVal = gridColLength + yVal - 1
                } else if (yVal > gridColLength) {
                    yVal = yVal - gridColLength - 1
                }

                console.log(xVal, yVal)

                if (!trueFalseGrid[xVal][yVal]) {
                    count++
                    trueFalseGrid[xVal][yVal] = true 
                } 
            }         
        }
    }

    for (let i = 0; i < gridRowLength; i++) {
        for (let j = 0; j < gridColLength; j++) {
            if (grid[i][j] > 0) {
                flipToTrue(i, j)
            }
        }
    }

    return count 
}

module.exports = gridCellNeighborhoods