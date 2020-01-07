var a = {name: 'Venk'};
var b = {ph: '63456'};
var c = {city: 'Columbus'};

///Shallow copy
console.log('a initial value =>', a);
a=b;
console.log('copy a  =>', a);
b.ph = '123';
console.log('shallow copy a =>', a);
console.log('After b value =>', b);
console.log('object concat =>', {...a, ...c}); // You can only merge 2 objects at a time

//Deep copy 
{
    let objOld = {name: 'OLD'};
    let  objNew = JSON.parse(JSON.stringify(objOld));
    //change the property of old object
    objOld.name = "Change old value";
    console.log('Deep copy method 1 objOld =>', objOld);
    console.log('deep copy method 1 objNew =>', objNew);
}

{
    let objOld = {name: 'OLD'};
    let  objNew = {...objOld}
    //change the property of old object
    objOld.name = "Change old value";
    console.log('Deep copy method 2 objOld =>', objOld);
    console.log('deep copy method 2 objNew =>', objNew);
}

{
    let objOld = {name: 'OLD'};
    let  objNew = {...objOld}
    //change the property of old object
    objOld.name = "Change old value";
    console.log('Deep copy method 2 objOld =>', objOld);
    console.log('deep copy method 2 objNew =>', objNew);
}

{
    let b = Object.assign({}, a)   // copis a into b;
    //generally the first argument is always empty obj
}

//NESTED OBJECTS:
// If you want to copy an object "a" to "b" and if a is an nested object then the inner object will be copied in shallow.

// Ex:

{
    const a = {
         name: 'Venk',
         food: {
             name: 'pasta'
         }   
    };

    const b = {...a};
    a.name = "Venk 1"
    a.food.name = 'puff';

    console.log("A before copy =>", a.name, " and food name is =>", a.food.name);
    console.log("A after copy =>", b.name, " and food name is =>", b.food.name);
}

{
    const a = {
         name: 'Venk',
         food: {
             name: 'pasta'
         }   
    };

    const b = JSON.parse(JSON.stringify(a));
    b.name = "Venk 1"
    b.food.name = 'puff';

    console.log("A before copy =>", a.name, " and food name is =>", a.food.name);
    console.log("A after copy =>", b.name, " and food name is =>", b.food.name);
}

// function test1() {
//     var testing_functionscope = 'Heyyy!!';
//     console.log("Inside fn =>", testing_functionscope);
// }
// test1();
// console.log("Outside fn scope =>", testing_functionscope);

{
    var testing_functionscope1 = 'Heyyy!!';
    console.log("Inside fn =>", testing_functionscope1);
}
console.log("Outside fn scope =>", testing_functionscope1);