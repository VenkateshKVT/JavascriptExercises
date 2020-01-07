var str = '123A$$12B$$13C$$14D$$15E$$16F$$17G$$18H$$19I$$20J$$21K$$22L';
var patients = str.split('$$');
for(let i=0; i<12; i++) {
    this["patient"+i] = patients[i];
    console.log("patient"+(i+1), this["patient"+i]);
}