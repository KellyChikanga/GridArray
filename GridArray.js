let width = []
let grid = []

function makeGrid(numColumns, numRows) {
    for (let i = 1; i < numColumns + 1; i++) {
        width.push(i)
    } for (let j = 1; j <= numRows; j++) {
        grid.push(width)
    } return grid
}