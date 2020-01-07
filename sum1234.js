
let sum = function (a) {
    return function(b) {
        if(b) {
            return sum(a+b);
        } else {
            return a;
        }
    }
}



let result = sum(1)(2)(3)(4)(5)(6)();
console.log("Res = ", result);