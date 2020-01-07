// function factorial(a) {
//     if(a == 0 || a == 1) {
//         return 1;
//     } else {
//         while(a>1) {
//             return factorial(a-1)*a;
//         }
//     }
// }

// console.log("Factorial => ", factorial(4));

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}

const arr1 = [10, 12, 15, 21];
for (var i = 0; i < arr1.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr1[i]);
  }, 3000);
}