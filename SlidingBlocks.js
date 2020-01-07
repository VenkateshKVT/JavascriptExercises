function movesToSolve(puzzle) {
    // Write your code here
    let x_coordinate = 0;
    let y_coordinate = 0;
    let n=0;
    console.log("puzzle =>", puzzle.length);
    for (let i = 0; i < puzzle.length; i++) {
        let arr = puzzle[i];
        if (arr.includes(0)) {
            x_coordinate = i;
            y_coordinate = arr.indexOf(0);
            console.log("x =>", + x_coordinate + "y =>", + y_coordinate)
        }
    }
    n = (x_coordinate+y_coordinate); 
    return n;
}

movesToSolve([[0, 1, 2], [3, 4, 5], [6, 7, 8]])