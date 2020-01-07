let a = 'global';
function outer() {
    let b = 'outer';
    function inner() {
        let c = 'inner'
        console.log(c);   // prints 'inner'
        console.log(b);   // prints 'outer'
        console.log(a);   // prints 'global'
    }
    console.log(a);     // prints 'global'
    console.log(b);     // prints 'outer'
    // console.log(c);   // error
    inner();
}
outer();
console.log(a);         // prints 'global'
// console.log(b);         // error
// console.log(c);         //error

/////////////////////////////////

function parent() {
    let parent = 'This is parent var';
    return function () {
        let child = 'Child here'
        console.log("child =>", child);
        console.log("parent =>", parent);
    }
}
let closure1 = parent();
closure1();

//The above fn works like below:
// When we invoke parent function, it returns us the child function to a variable.When
// When we call the variable(child fn), it prints the variables of parent fn AudioScheduledSourceNode. PNote that the parent is already returned. Still we are able to access the parent variables.When

function getCounter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}
let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2