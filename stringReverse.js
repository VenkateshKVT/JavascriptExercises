function strReverse(str) {
    var arr = str.split('');
    arr.reverse();
    return arr.join('');  
}

console.log("Reversed str => ", strReverse("Hello"));