const gridCellNeighborhoods = (grid, N) => {

    const gridRowLength = grid.length
    const gridColLength = grid[0].length
    
    let trueFalseGrid = []
    let count = 0

    for (let i = 0; i < gridRowLength; i++) {
        let tempArr = []
        for (let j = 0; j < gridColLength; j++) {
            tempArr.push(false)
        }
        trueFalseGrid.push(tempArr)
    }
            
    const flipToTrue = (targetRow, targetCol) => {
        // console.log(targetRow, targetCol, "flipToTruePoint")

        if (N == 0) {
            if (!trueFalseGrid[targetRow][targetCol]) {
                trueFalseGrid[targetRow][targetCol] = true
                count++
            }
            
            return
        }

        const topValue = targetRow - N
        const bottomValue = targetRow + N
        
        let increments = 0
        
        for (let r = topValue; r <= bottomValue; r++) {

            let xVal = r 
            if (xVal < 0) {
                xVal = gridRowLength + xVal 
            } else if (xVal > gridRowLength - 1) {
                xVal = xVal - gridRowLength
            }

            let leftValue = targetCol - increments 
            let rightValue = targetCol + increments 

            // this is where the problem is starting 
            for (let c = leftValue; c <= rightValue; c++) {
                let yVal = c 

                if (yVal < 0) {
                    yVal = gridColLength + yVal
                } else if (yVal > gridColLength - 1) {
                    yVal = yVal - gridColLength
                }

                // console.log(xVal, yVal)

                if (!trueFalseGrid[xVal][yVal]) {
                    count++
                    
                    // console.log(count, "count")

                    trueFalseGrid[xVal][yVal] = true 
                } 
            }

            if (r < targetRow) {
                increments++
            } else {
                increments--
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