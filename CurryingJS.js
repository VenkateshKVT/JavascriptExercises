// Currying is a process of copying the existing functions using bind method and hardcoding the arguments....

// let multiply = function(a, b) {
//     console.log("Mul => ", a*b);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// let multiplyByThree = multiply.bind(this, 3);

let multiply = function(x) {
    return function(y) {
        console.log("multiply closure=", x*y);
    }
}

let multiplyByTwo = multiply(2);
let multiplyByThree = multiply(3);

multiplyByTwo(5);
multiplyByThree(6);

multiplyByTwo(7, 6);   // Here argument 6 is omitted bcoz here a=2 and b = 7