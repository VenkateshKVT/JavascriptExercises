// Given a string of lowercase letters in the range ascii[a-z], determine a character that can be removed to make the string a palindrome. There may be more than one solution, but any will do. For example, if your string is "bcbc", you can either remove 'b' at index  or 'c' at index . If the word is already a palindrome or there is no solution, return -1. Otherwise, return the index of a character to remove.

// Function Description

// Complete the palindromeIndex function in the editor below. It must return the index of the character to remove or .

// palindromeIndex has the following parameter(s):

// s: a string to analyze
// Input Format

// The first line contains an integer , the number of queries. 
// Each of the next  lines contains a query string .

// Constraints

// All characters are in the range ascii[a-z].
// Output Format

// Print an integer denoting the zero-indexed position of the character to remove to make  a palindrome. If  is already a palindrome or no such character exists, print .

// Complete the palindromeIndex function below.
let stringIndex1;
let stringIndex2;
function palindromeIndex(s) {
    let l = s.length;
    if(s.length == 0 || s.length == 1) {
        return 0;
    }
    if(s.length % 2 == 0) {
        for(let i=0; i<(l/2 +1); i++) {
            if(s[i] === s[l-i-1]) {
                continue;
            } else {
                stringIndex1 = i;
                stringIndex2 = l-i-1;
                sArr = s.splice('');
                if(palindromeIndex(sArr.splice(stringIndex1, 1)) == 1) {
                    return stringIndex1;
                } else if(palindromeIndex(s.splice(stringIndex2, 1)) == 1){
                    return stringIndex2;
                }
                console.log("EVEN => not pallindrome");
            }
        }
        console.log("EVEN => IS pallindrome");
        return -1;
    } else {
        for(let i=0; i<(l/2 +1); i++) {
            if( i== (l/2 +1) || s[i] === s[l-i-1]){
                continue;
            } else {
                stringIndex1 = i;
                stringIndex2 = l-i-1;
                sArr = s.splice('');
                if(palindromeIndex(sArr.splice(stringIndex1, 1)) == 1) {
                    return stringIndex1;
                } else if(palindromeIndex(s.splice(stringIndex2, 1)) == 1){
                    return stringIndex2;
                }
                console.log("ODD => not pallindrome");
            }
        }
        console.log("ODD => IS pallindrome");
        return -1;
    }

}

console.log("O/p => ", palindromeIndex('madam1'));