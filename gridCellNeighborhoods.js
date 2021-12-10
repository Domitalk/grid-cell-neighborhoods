const gridCellNeighborhoods = (grid, N) => {

    const gridRowLength = grid.length
    const gridColLength = grid[0].length
    
    // changed duplicate sized Array of Arrays into a hashMap
    let trueFalseGrid = {}
    let count = 0
            
    const flipToTrue = (targetRow, targetCol) => {

        // exit case of N=0
        if (N == 0) {
            if (!trueFalseGrid[targetRow]) {
                trueFalseGrid[targetRow] = {}
                trueFalseGrid[targetRow][targetCol] = true
                count++
            } else if (trueFalseGrid[targetRow] && !trueFalseGrid[targetRow][targetCol]) {
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
            
            // adjust for wrap around 
            if (xVal < 0) {
                xVal = gridRowLength + xVal 
            } else if (xVal > gridRowLength - 1) {
                xVal = xVal - gridRowLength
            }

            const leftValue = targetCol - increments 
            const rightValue = targetCol + increments 

            for (let c = leftValue; c <= rightValue; c++) {
                let yVal = c 

                // adjust for wrap around
                if (yVal < 0) {
                    yVal = gridColLength + yVal
                } else if (yVal > gridColLength - 1) {
                    yVal = yVal - gridColLength
                }

                // if the column key doesn't exist, the row definitely doesn't. So, create col key and row key 
                if (!trueFalseGrid[xVal]) {
                    trueFalseGrid[xVal] = {}
                    trueFalseGrid[xVal][yVal] = true
                    count++
                // if column key exists, but row doesn't. 
                } else if (trueFalseGrid[xVal] && !trueFalseGrid[xVal][yVal]) {
                    trueFalseGrid[xVal][yVal] = true
                    count++
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