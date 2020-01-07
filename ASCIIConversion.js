//charCodeAt => converts charcter to ASCII value
//fromCharCode = converts ASCII to character
// map should use return in the callback fn
//regex for vowels

function LetterChanges(str) { 
  
    strArr = str.split('');
    resArr = strArr.map((every)=> {
     if (every.length > 0 && every.match(/[a-z]/i)) {
        return  String.fromCharCode(every.charCodeAt(0) + 1)
      }
      else {
       return every;
      }
    });
    
    // check if resArr has vowel ?
    resArr = resArr.map((_)=>{
      if(_.match(/[aeiou]/)){
        return _.toUpperCase();
      } else {
        return _;
      }
    })
    str = resArr.join('');
    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(LetterChanges("Venkatesh"));