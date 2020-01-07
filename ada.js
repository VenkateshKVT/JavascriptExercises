function ada(year) {
    let j = 0;
for (let i = 1; i < 15; i++) {
    var d = new Date(year, '09', i.toString());
    if (d.getDay() == 2) {
        j++;
    } if (j === 2) {
        return d.getDate();
    }
    else {
        continue;
    }
}

}

