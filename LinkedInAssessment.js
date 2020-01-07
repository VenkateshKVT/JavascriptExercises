function sayHello() {
    var a = 0;
}
var func = sayHello;

func.answer = 42;

console.log("sayHello.answer => ", sayHello.answer);  // Answer = 42

var animal = ['cat', 'dog', 'pig'];
animal[100]='buffalo';
console.log("Length of animal is =>", animal.length);  //answer = 101 .. The remaining values from 4 to 100 are undefined

const dessert = {'type' : 'pudding'};
dessert.type = 'pie';
console.log("Type of dessert =>", dessert.type);  // answer = 'pie'

if([3] == [3]) {
    console.log("If 1");
}
if(3 != 3) {
    console.log("If 2");
}
if( (3 == '3')) {
    console.log("If 3");            // true
}
if(3 === '3') {
    console.log("If 4");
}

const x = 6 % 2;
const y = x ? 'One' : 'Two';
console.log("value of y => ",y);   // Two

class X {

    get Y() {
        return 42;
    }
}

z = new X();

console.log("valu of x.Y() => ", z.Y);
// console.log("valu of x.Y() => ", z.Y());    // Y is not a function
// console.log("valu of x.Y() => ", z.get().Y);    // z.get is not a fuinction
