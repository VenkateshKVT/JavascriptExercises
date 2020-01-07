// Number of times the while loop should run till the number reaches 6174

function getDescendingOrderNum(num) {
  let numArr = num.toString().split('');
  numArr = numArr.sort();
  numArr = numArr.reverse();
  // console.log("Desc order is => ", parseInt(numArr.join('')));
  return parseInt(numArr.join(''));
}

function getAscendingOrderNum(num) {
  let numArr = num.toString().split('');
  numArr = numArr.sort();
  // console.log("Asc order is => ", parseInt(numArr.join('')));
  return parseInt(numArr.join(''));
}

function subtract(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

function addAdditionalZeros(num) {
  while (num < 1000) {
    num = num * 10;
  }
  return num;
}
function KaprekarsConstant(num) {
  let i = 0;
  // code goes here  
  num = addAdditionalZeros(num);
  while (num !== 6174) {
    num1 = getDescendingOrderNum(num);
    num2 = getAscendingOrderNum(num);
    num = subtract(num1, num2);
    i++;
  }
  return i;

}

// keep this function call here 
console.log("O/p =>", KaprekarsConstant(2111));