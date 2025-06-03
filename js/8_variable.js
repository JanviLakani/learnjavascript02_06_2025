// ************************************ 
// var variable 


// we can declare the same name variable 

// var x = 10;
// var x = 20;

// console.log(x);   // ans 20

// __________________________ 

// var x;

// console.log(x);   // ans undefinded


// _____________________________ 

// var x = 10;

// var x;

// console.log(x);  // ans 10

// __________________________ 

// var does not have any block scope  

// var x = 10;

// {
//     var x = 99;
// } 

// console.log(x);  // ans 99  

// _____________________________ 

// *********************************** 


// let variable 

// we can not reduclare the same name variable 

// let x = 10;

// let x = 99;

// console.log(x);  // ans error 


// ______________________________ 

// let have a block scope 

// let x = 10;

// {
//     let x = 20;
// }


// console.log(x);  // ans 10;

//  ______________________________________ 

// let x = 10;        // globle variable

// {
//     x = 999;       // local variable so global variable can access 
// }


// console.log(x);     // ans 999






// _________________________________ 

// ************************************************** 

// const variable 

// we can not redeclare the same name variable 

// const x = 10;
// const x = 20;

// console.log(x);  // error 


// _______________ 

// we can not change the value of const variable 

// const x = 10;

// x = 20;

// console.log(x);  // error 


// ___________________ 

// let x = 10;

// x = x + 20;

// console.log(x);  // ans

// _____________________ 

// declaration and initilization  must be done at same time 

// const x;

// x = 50;

// console.log(x);   // error

// ___________________ 

// let x;

// x = 50;

// console.log(x);  // 50 

// _________________________ 

// const x = 10;

// {
//     const x = 20;
// }

// console.log(x);   // 10


// _____________ 

// const x = 10;

// {
//     x = 20;
// }

// console.log(x);  // error 

//  _______________ 

// var x = 10;

// let x = 20;

// const x = 30;

// console.log(x);  // error

// ______________________ 

// var x = 10;

// {
//     let x = 20;
// }

// console.log(x);  // 10

//  ________________________ 


// let x = 10;

// {
//     var  x = 20;
// }


// console.log(x); // error 


// ******************************************************************************** 

// 03/06/2025 H.W

// ********************************************************************************

// 1. 

// var a = 1;
// let b = 2;

// {
//     var a = 3;
//     let b = 4;

//     console.log("inside block a",a);   // ans 3
//     console.log("inside block b",b);   // ans 4
    
    
// }

// console.log("out side block a", a);   // ans 3
// console.log("out side block b", b);   // ans 2

// ______________________________________________________________________ 

// 2. 

// let x = 10;

// {
//     let x = 20;

//     x = x + 10;

//     console.log("inside block",x);     // ans 30
    
// }

// x = x + 5;

// console.log(x);    // ans 15


//  __________________________________________________ 

// 3.

// console.log(x);        ans undefined 


// let x = 10;

// console.log(x);       // ans 10

 

// ___________________________________________ 

// 4. 


// let courseName = "reactjs";

// if (true) {
//     let courseName = "nodejs";

//     console.log("inside block : ",courseName);   // ans nodejs
    
// }

// console.log(courseName);    // ans reactjs


// _______________________________________________ 

// 5. 

// let x = 10;

// {
//     let  x = 20;
// }

// {
//     x = 99;
// }

// console.log(x);    // ans 99


//  ___________________________________________________ 

// 6. 

// {
//    let x = 10;
// }

// {
//     x = 11;
// }

// console.log(x);   // ans 11 aa raha hai to eroor nahi aani sahiye kyuki block ke andar hai to 


// _______________________________________________________ 

// 7.

// {
//     let x = 10;
// }

// {
//     let x = 100;
// }

// console.log(x);   // ans error 

// ______________________________________________________  

// 8.

// const x = 10;

// {
//     let x = 11;
// }

//  x=15;       // first ans error

//  x = x + 5

// console.log(x);     // ans error 

//  ____________________________________________ 

// 9. 

// const fruits = ["Orange" ,"Grape" ,"Mango"] ;


// fruits[0] = 'banana';

// console.log(fruits);   // we can change element in const variable means ki e value
                        // object and array me hai to ham change kar sakte hai.. reference fix hai value nai 



                        
                        
// ____________________________________________________

// 10.

// const person = {
//     name : 'rehani',
//     age : 22,
//     city : "surat"
// }

// person.name = "suhani";
// person.age ="25";

// console.log(person);

// ________________________________________   {name : "suhani" ,age : "25", city : "surat "}

// 11

// but we not change object // reference not change ans error 

// const car = {
//     name : "toyoto",
//     color : "black"
// }

// car = {name : "maruti" }

// console.log(car);    // ans error 



// ______________________________________________ 

























