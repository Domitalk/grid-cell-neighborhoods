const gridCellNeighborhoods = require('./gridCellNeighborhoods.js')

let sampleGrid = [
    [0, 0, 0, 1, 0],
    [2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

test("sample test for visualizing the problem", () => {
    expect(gridCellNeighborhoods(sampleGrid, 2)).toEqual(14)
})