// Float sum

function floatSum(A, B) {
    return ((A * 1000000000) + (B * 1000000000)) / 1000000000;
}


//Function which concates all input array of arrays to single array
// flatten([[true, false], [false, false]])
// Expected: [true, false, false, false]
function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2 = arr2.concat(arr[i]);
    }
    return arr2; 
  }