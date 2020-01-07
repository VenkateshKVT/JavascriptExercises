function logic(a=0, b=0) {
    console.log("Arguments =", arguments);
    console.log("Hello => ", Date.now());
}

const throttle = (logic, limit) => {
    let flag = true;
    return function() {
        let args = arguments;
        let context = this;
         if(flag) {
             logic.apply(context, args);
             flag=false;
             setTimeout(()=> {
                 flag = true;
             }, limit)
         }
 
    }
 
 }

var but = document.getElementById('but');
if(but) {
    but.addEventListener('click', throttle(logic, 5000));
}


