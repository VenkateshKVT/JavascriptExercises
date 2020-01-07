// Find the number of ways to reach position2 from position1 on chess board.
// Given all the moverments are towards top and right only
// extract only numbers from string regex => matches = str.match(/\d+/g)
function extractCoordinates(str) {
    strArr= str.split('');
    // console.log("coordinates 0 => ", strArr);
    strArr = strArr.filter((_)=> {
      if(_ !== '(' && _!== ')' && _!== ' ') {
        return _;
      }
    });
    // console.log("coordinates 1 => ", strArr);
    return strArr;
  }

  function factorial(a) {
      if(a == 0 || a == 1) {
          return 1;
      } else {
          while(a>1) {
              return factorial(a-1)*a;
          }
      }
  }
  function calcRes(arr) {
    if(arr.length == 4) {
        let n = (arr[2] - arr[0]) + (arr[3] - arr[1]);
        let r = arr[2]-arr[0];
        if(n > r) {
            return (factorial(n))/(factorial(r)*factorial(n-r))
        } else {
            return (factorial(n))/(factorial(r)*factorial(r-n))
        }
    }
  }
  function ChessboardTraveling(str) { 
  
    // code goes here  
    arr = extractCoordinates(str);
    arr = arr.map(_ => parseInt(_));
    result = calcRes(arr); 
    return result; 
  
  }
     
  // keep this function call here 
  console.log(ChessboardTraveling("(2 2)(4 3)"));