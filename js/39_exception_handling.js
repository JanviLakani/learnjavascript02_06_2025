


let a=parseInt(prompt("plase enetr a value :"));

let b=parseInt(prompt("plase enetr b value :"));

// let c;

// c = a / b

// console.log(c);

try {
let c;

if(b === 0) {
    throw new Error("not possible")
}

c = a / b

console.log(c);

    
} catch (error) {
    console.log(error);
    
} finally{
    console.log("programend");
    
}

