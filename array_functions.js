function array_every(age) {
    console.log("Array age", age);
    return age > 6;
}

var arr = [12,13,14,15,16,17,5,8,10];
console.log("Array every result => ", arr.every(array_every));
// Note:
// 1) Every function will run through the array elements and check if the function is passes for every element or Notification.apply
// 2) If a function returns false somewhere in the mid of the array, then remaining part of the function will not be executed.Every
// 3) every function will not change the values of the input array.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill('Kiwi', 0, 2);
console.log("fruits after fill =>", fruits.toString());

// //Note:
// fill function changes all the elements of an array with a STATIC value, here KIWI is a static value;
// This method OVERWRITES the original array.
// array.fill(value, start, end)

function array_filter(age) {
    console.log("This value is => ", this);
    return age > 6;
}

console.log("array with filter fn =>" , arr.filter(array_filter).toString());

// FILTER fn return a NEW array with filtered elements which pass the criteria in call back fn
// filter() does not change the original array.
// Syntax:  array.filter(function(currentValue, index, arr), thisValue)
    // => currentValue = current value of the iteration
    // => index => current index;
    // => arr => Entire array Object
// If no element pass the filter test => it returns an EMPTY array

function array_find(age) {
    return age > 15;
}

console.log("Arr find fn", arr.find(array_find));

//Find fcuntion returns the first element which matches the serach criteria
// If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// Otherwise it returns undefined
// Note: find() does not execute the function for empty arrays.
// Note: find() does not change the original array.

console.log("Arr find Index fn", arr.findIndex(array_find));

//The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
// findIndex() does not change the original array.

console.log("Before FOR EACH =>", arr);
this.arr = [...arr];
this.arr.forEach((element, index)  => {
     return 2*element;
});
console.log("After FOR EACH =>", this.arr);

//from function:
// -> This fucntion converts any object to an Array using a length property. 
var myArr = Array.from("ABCDEFG"); 

console.log("myArr in Array FROM =>", myArr);

//includes()
// The includes() method determines whether an array contains a specified element.
// This method returns true if the array contains the element, and false if not. and the method is case sensitive.
// array.includes(element, start) => Start position of the search

// The indexOf() method searches the array for the specified item, and returns its position.
//Returns -1 if the item is not found.
// Array.isArray(fruits); -> Checks whether the input object is an array or not.
// The join() method returns the array as a string.

var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits1.join(" and ");
console.log("Array after joined is => ", energy);

var fk = fruits.keys();
console.log("keys() => ", fk);
//Keys function extracts only KEYS in an array


// map() => The map() method creates a new array with the results of calling a function for every array element.
// The map method DOES NOT change the original array.

let numbers = [4, 9, 16, 25];
console.log("Before MAP =>", numbers);
let x = numbers.map(Math.sqrt);
console.log("After MAP x=>", x);

let names = [  {firstname : "Malcom", lastname: "Reynolds"},
            {firstname : "Kaylee", lastname: "Frye"},
            {firstname : "Jayne", lastname: "Cobb"}];

let modifiedNames = names.map( name => {
    return name.firstname + '-' + name.lastname;
})
console.log("Full names after map => ", modifiedNames);

// The pop() method removes the last element of an array, and returns that element.
// Prototype => you can define your own method to an array and apply that method to your array.
// For example: If you want to do uppercase of every eleemnt in array of strings, you can write a method and assign to an array using prototype like below:
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
Array.prototype.myUcase = function() {
    for (i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };
fruits2.myUcase();
console.log("Fruits in upper case =>", fruits2);
// push adds an element to end of an array and RETURNS new length

//REDUCE -> this method will e appliced to an array of you want to reduce an array to a single value
//   -> Like find avg of numbers
//  This method doesnt change the values of an existing array 
// signature of the call back fn = function(total,currentValue, index,arr)
let amount = [10, 20, 30, 40, 50];
let avg = amount.reduce((total, am, index, amount) => {
    if(index != (amount.length-1))
        return total += am;
    else 
        return total/(amount.length);//some() => he some() method checks if any of the elements in an array pass a test
}, 0);
console.log("Total value ", avg);

// The reduceRight() method executes a provided function for each value of the array (from right-to-left).

am_rev = amount.reverse();
console.log("am_rev =>", am_rev);

// The shift() method removes the first item of an array.
// unshift() adds ana element to the beginning of an array
// array.slice(start, end) -> extract parts of array

//some() => The some() method checks if any of the elements in an array pass a test
// => If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)


// The sort() method sorts the items of an array.

// The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

// By default, the sort() method sorts the values as strings in alphabetical and ascending order.

var s1 = ['abc', 'ven', 'kat', 'esh', 'ram', 'aka', 'nth', 'abb'];
var n1 = [12, 32,12, 1, 4, 76,8, 2,45]
console.log("string sort() =>", s1.sort());
console.log("Number sort ", n1.sort());

console.log("toString() =>", s1.toString());