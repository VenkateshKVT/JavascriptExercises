function sevenBoom(arr) {
	for(let i=0; i < arr.length; i++) {
		console.log("i value", i);
		console.log("array value", arr[i]);
		if(arr[i] == 7)
			return "Boom!";
		else 
			continue;
    }
    return "there is no 7 in the array";
}

function sevenBoom1(arr) {
	let arra = arr.join('').split('').indexOf('7');
	console.log("arra is", arra);
	return (parseInt(arra) === -1) ? 'there is no 7 in the array':'Boom!'
}

arr = [10,4,5,6,7,6]
console.log(sevenBoom(arr));
console.log(sevenBoom1(arr));