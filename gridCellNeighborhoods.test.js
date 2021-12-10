const gridCellNeighborhoods = require('./gridCellNeighborhoods.js')

let sampleGrid = [
    [0, 0, 0, 1, 0],
    [2, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

const createInput = () => {
    let elevenByEleven = []
    for (let i = 0; i < 11; i++) {
        let tempArr = []
        for (let j = 0; j < 11; j++) {
            tempArr.push(0)
        }
        elevenByEleven.push(tempArr)
    }
    return elevenByEleven
}

// test("sample test for visualizing the problem", () => {
//     expect(gridCellNeighborhoods(sampleGrid, 2)).toEqual(14)
// })

let exampleOneInput = createInput()
exampleOneInput[5][5] = 1

test("Example 1: One positive cell fully contained; N=3", () => {
    expect(gridCellNeighborhoods(exampleOneInput, 3)).toEqual(25)
})

// let exampleTwoInput = createInput()
// exampleTwoInput[1][5] = 1

// test("Example 2: One positive cell near an edge; N=3", () => {
//     expect(gridCellNeighborhoods(exampleTwoInput, 3)).toEqual(21)
// })

// let exampleThreeInput = createInput()
// exampleThreeInput[7][3] = 1
// exampleThreeInput[3][7] = 1

// test("Example 3: Two positive values with disjoint neighborhoods; N=2", () => {
//     expect(gridCellNeighborhoods(exampleThreeInput, 2)).toEqual(26)
// })

// let exampleFourInput = createInput()
// exampleFourInput[5][6] = 1
// exampleFourInput[3][7] = 1

// test("Example 4: Two positive values with overlapping neighborhoods; N=2", () => {
//     expect(gridCellNeighborhoods(exampleFourInput, 2)).toEqual(22)
// })

// test("Edge case in which N = 0", () => {
//     expect(gridCellNeighborhoods(sampleGrid, 0)).toEqual(2)
// })