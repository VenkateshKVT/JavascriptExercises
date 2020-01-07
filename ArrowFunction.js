function getSecondLargest(nums) {
    // Complete the function
    let numSet = new Set(nums);
    var numArr = [...numSet];
    console.log("Rem Dup", numArr);
    let lar = largest(numArr);
    let id = numArr.indexOf(lar);
    console.log("LAR 1", lar);
    numArr.splice(id, 1);
    console.log("NUM ARR 2 ", numArr);
    return largest(numArr);
}

function largest(nums1) {
    let lar = nums1[0];
    for(let i=0; i<nums1.length; i++) {
        if(lar < nums1[i]) {
            lar = nums1[i];
        }
    }
    return lar;
}
console.log("O/p", getSecondLargest([2, 3, 6, 6, 5]));
