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
    
    const flipToTrue = (targetRow, targetCol) => {

        if (N == 0) {
            trueFalseGrid[targetRow][targetCol] = true
            return
        }

        for (let r = 0; r < gridRowLength; r++) {
            for (let c = 0; c < gridColLength; c++) {
                const currentCabDistance = Math.abs(targetRow - r) + Math.abs(targetCol - c)
                if (currentCabDistance <= N) {
                    trueFalseGrid[r][c] = true
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

    let count = 0
    
    for (let i = 0; i < gridRowLength; i++) {
        for (let j = 0; j < gridColLength; j++) {
            if (trueFalseGrid[i][j]) {
                count += 1
            }
        }
    }

    return count 
}

module.exports = gridCellNeighborhoods