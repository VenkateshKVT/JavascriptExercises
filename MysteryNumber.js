// Write a function that takes an integer n and turns it into the ouput. No further instructions.

// Examples
// mysteryFunc(521) ➞ "151211"

// mysteryFunc(5211255) ➞ "1512211225"

// mysteryFunc(513515) ➞ "151113151115"

function mysteryFunc(n) {
    let splitN = n.toString().split('');
    let result = [];
    let count=1;
    for(let i=0; i<splitN.length; i++) {
        if(splitN[i] === splitN[i+1]) {
            count=count+1;
            continue;
        }
        else {
            result.push(count);
            result.push(splitN[i]);
            count = 1;
        }
        if(i === splitN.length - 1) {
            return result.join('');
        }
    }
    
}

console.log("O/p ", mysteryFunc(111111422));