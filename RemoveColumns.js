function removeColumns(originalGrid, numColumns) {
    for (let i = 0; i <= originalGrid.length - 1; i++) {
        for (let j = 0; j < numColumns; j++) {
            originalGrid[i].pop();
        }
    } return originalGrid
}