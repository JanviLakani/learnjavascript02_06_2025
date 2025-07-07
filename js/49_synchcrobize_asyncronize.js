

// const firstProcess = () => {
//     console.log("First process run");
    
// }


// const secondProcess = () => {
//     console.log("Second process run");
    
// }


// const thirdProcess = () => {
//     console.log("Third process run");
    
// }

// firstProcess();
// secondProcess();
// thirdProcess();


// const firstProcess = () => {
//     console.log("First process run");
    
// }

// const secondProcess = () => {
//     var start =new Date().getTime();
//     var end = start;

//     while(end < start + 5000) {
//         end=new Date().getTime();
//     }

//     console.log("Second process run");
    
// }


// const thirdProcess = () => {
//     console.log("Third process run");
    
// }

// firstProcess();
// secondProcess();
// thirdProcess();





// let print = (a,b) => {

//     let data=a+b;

//     console.log(data);
     

// }

// ________________________________________________________________  asyncronize callback function 


// const balance = (a,b,callback) => {

//     let ans=a+b

  
//     callback(ans);
    

// }



// let print = (data) => {

//  console.log(data);
 

// }

// balance(40,20 ,print);


// ___________________________________________________________ 

// const firstProcess = () => {
//     console.log("First process run");
    
// }


const secondProcess = (a,b,callback) => {

    setTimeout(() => {

        let ans=a+b

        callback(ans)
        
         console.log("Second process run");

    }, 5000);

    
}

const print = (data) => {
    console.log(data);
    
}



secondProcess(10,20,print);

