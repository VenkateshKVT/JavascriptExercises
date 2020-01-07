// A Capital Challenge
// Given two strings, s1 and s2, select only the characters in each string where the character in the same position in the other string is in uppercase. Return these as a single string.

// To illustrate, given the strings s1 = "heLLo" and s2 = "GUlp", we select the letters "he" from s1, because "G" and "U" are uppercase. We then select "lp" from s2, because "LL" is in uppercase. Finally, we join these together and return "help".

// Examples
// selectLetters("heLLO", "GUlp") ➞ "help"

// selectLetters("1234567", "XxXxX")  ➞ "135"

// selectLetters("EVERYTHING", "SomeThings") ➞  "EYSomeThings"

function selectLetters(s1, s2) {
    let s1Array = s1.split('');
    let s2Array = s2.split('');
    let resultStringArray = [];
    s2Array.forEach((ch, index) =>{
        if(ch.match(/[a-z]/i) && ch === ch.toUpperCase()) {
            resultStringArray.push(s1Array[index]);
        }
    })
    s1Array.forEach((ch, index) =>{
        if(ch.match(/[a-z]/i) && ch === ch.toUpperCase()) {
            resultStringArray.push(s2Array[index]);
        }
    });
    return resultStringArray.join('');
}