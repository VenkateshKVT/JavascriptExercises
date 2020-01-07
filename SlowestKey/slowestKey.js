function getResultKey(keyTimes) {
    let len = keyTimes.length;
    let initialKey = keyTimes[0];
    let maxTime= initialKey[1]-0;
    let saveKey = keyTimes[0];
    for(let i=1; i<len; i++) {
        let previousKey = keyTimes[i-1];
        let currentKey = keyTimes[i];
        if(maxTime < (currentKey[1] - previousKey[1])) {
            maxTime = currentKey[1] - previousKey[1];
            saveKey = currentKey;
        }
    }
    return saveKey;
}

function getCharacter(key) {
    console.log("Key => ", key);
    return String.fromCharCode(key[0]+97);
}

function slowestKey(keyTimes) {
    var resultKey = getResultKey(keyTimes);
    return getCharacter(resultKey);
}

keyTimes = [[0,2],[5,7],[0,9]];

console.log("The slowest key pressed is :: ", slowestKey(keyTimes));