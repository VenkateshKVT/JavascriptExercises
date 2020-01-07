// Group in Order
// Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.

// [1, 2, 3, 4, 5, 6], 3
// [[1, 3, 5], [2, 4, 6]]
// // Divide array into groups of size 3.

// [1, 2, 3, 4, 5, 6], 2
// [[1, 4], [2, 5], [3, 6]]
// // Divide array into groups of size 2.

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4
// [[1, 4, 7, 10], [2, 5, 8, 11], [3, 6, 9]]
// // "Leftover" arrays are okay.

//Array.from function converts an input object to an array.
// Array.from(object, mapFunction, thisValue)

function group(arr, size) {
    let arrSize = arr.length;
    let totalGroups = Math.ceil(arrSize/size);
    console.log("Total groups", totalGroups);
    let resultArray = Array.from(new Array(totalGroups), () => []);
    for(let i=0; i<arrSize; i++) {
       resultArray[i % totalGroups].push(arr[i]);
    }
    return resultArray;
}

group([1, 2, 3, 4], 2);