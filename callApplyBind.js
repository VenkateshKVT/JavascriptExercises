let name1 = {
    firstName: "Venkat",
    lastName: "Kallep",
    printFullName: function() {
        console.log("Full name = ", this.firstName+" "+this.lastName);
    }
}

let name2 = {
    firstName: "Dan",
    lastName: "Amber",
}

let printAddress = function(city, state) {
    console.log("Name = ", this.firstName+this.lastName);
    console.log("Adress = "+ city, " "+ state);
}

// function printAddress(city, state) {
//     console.log("Adress = "+ city, " "+ state);   
// }  This way of declaring also not works

name1.printFullName();

//Borrow printName() method from name1 and use it for name2

name1.printFullName.apply(name2);
// So apply is used to assign the this instance to a function which is outside or with in the other obj

// name1.printAddress("hyd", "Telangana"); // Throws error saying print address is not function

// instead try this
printAddress.call(name1, "Sklm", "AP");
printAddress.apply(name2, ["Hyd", "Tg"]);

let bindedFn = printAddress.bind(name1, "Columbus", 'Ohio');
// bind fn creates a new function by binding an existing fn to a new instance of this.

// if you call the new created fn then the it will be execued with the binded instance. 

bindedFn();