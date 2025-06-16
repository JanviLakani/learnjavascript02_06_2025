
// hoisting 

demo();

function demo(){
    console.log("hello");
    
}

demo();
demo();


// _______________________________arrow function 

// demo1();   // ans ReferenceError: Cannot access 'demo1' before initialization

const demo1 = () =>{
    console.log("hello world");
    console.log("learn javascript");
    
    
}

demo1();


const java=()=>{console.log("h");
}
java();