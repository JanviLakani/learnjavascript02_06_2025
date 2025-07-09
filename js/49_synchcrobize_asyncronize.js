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

// const secondProcess = (a,b,callback) => {

//     setTimeout(() => {

//         let ans=a+b

//         callback(ans)

//          console.log("Second process run");

//     }, 5000);

// }

// const print = (data) => {
//     console.log(data);

// }

// secondProcess(10,20,print);

// =====================================================================
////////////////////////////////////////////////////////////////// ////

// home practice

// const firstProcess = () => {
//   console.log("learn javascript1");
// };

// const secondProcess = () => {
//   console.log("learn javascript2");
// };

// const thirdProcess = () => {
//   console.log("learn javascript3");
// };

// firstProcess();
// secondProcess();
// thirdProcess();

// //====================================================

// const firstprocess = () => {
//   console.log("hello");
// };

// const secondprocess = () => {
//   var start = new Date().getTime();
//   var end = start;

//   while (end < start + 5000) {
//     end = new Date().getTime();
//   }

//   console.log("Second process run");
// };

// const thirdprocess = () => {
//     console.log("taught javascript");

// }

// firstprocess();
// secondprocess();
// thirdprocess();

// //  ===========================================================  second function 5 second no time le chhe to
//  ena reason third vala ne pn run nathi thtu means ke synchronize chhe e order wise agal vadhe kram vise em

// to ena mate ansynchronize no use karva ma aave chhe

// ==================================================

// const add = (a,b , callback) => {
//  let ans = a+b
// callback(ans);

// }

// let print = (data) => {
//     console.log(data);

// }

// add(20,20,print);

// =================================================

// const secondprocess = (callback) => {
//   setTimeout(() => {
//     let data = [10, 20, 30];
//     callback(data);
//     console.log("second process run");
//   }, 5000);
// };

// const display = (data) => {
//   console.log(data);
// };

// secondprocess(display);

// const firstprocess = () => {
//   console.log("learn js");
// };

// const thirdprocess = () => {
//   console.log("third process run");
// };
// thirdprocess();
// firstprocess();

// =======================================

// setTimeout(() => {
//     console.log("hello");

// } ,5000)

// const secondprocess = (callback) => {
//     setTimeout(() => {
//     callback(data)
// console.log("helloooo");

//     } ,3000)
// }

// secondprocess(display);

// const display (data) => {
//     console.log(data);

// }

// -----------------------------------------------------------

// promise

// let p = new Promise((resolve ,reject ) => {
// console.log("promise is pending");

//     setTimeout(() => {
//         console.log("i am promise and i am fullfilled ")
//     } ,5000)
// })

// p1.then((value)=> {
//     console.log(value);

// })

// p2.catch((error)=> {
//     console.log("spme error occurred in p2");

// })

// ==============================
// promise :-future kuch kam hone ka promise karta hai
// pending (fulfilled) :- jab kam successfully ho gaya
// rejected :- jab kaam fail ho gaya

// promise is asynchronous

// console.log("Start1");

// const p1= new Promise((resolve ,reject) => {
//     setTimeout(() => {
//         resolve("data is received2")
//     } ,5000)
// })

// p1.then((data)=> {
//     console.log(data);

// })

// console.log("End3");

// ----------------------------------------------------

// const pizzaOrder = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         resolve("pizza dellived")
//     },2000)
// })

// pizzaOrder.then((msg)=> {
//     console.log(msg);

// })

// // __________________________________________________________ number

// const numPromise = new Promise((resolve,reject) => {
//     resolve(999)
// })

// numPromise.then((value)=> {
//     console.log("value",value);

// })

// // ------------------------------------------------------------ array

// const arrayPromise = new Promise((resolve , reject) => {
//     resolve(["apple","banana","mango"])
// })

// arrayPromise.then((fruits)=> {
//     console.log("fruits",fruits);

// })

// // ans:- ['apple', 'banana', 'mango']

// ____________________________________________________________________ object

// const objectPromise = new Promise((resolve,reject) => {
//     resolve({ name : "siya" , age : 20} )

// })

// objectPromise.then((user) => {
//     console.log("user name", user.name);
//     console.log("user age" ,user.age);

// })

// ans :- user name siya
//        user age 20

// -------------------------------------------------------------------------

// const logicPromise = new Promise((resolve,reject)=>{
//     let userName = "test";
//     let userPassword = "wrong";

//     if(userName === "test" && userPassword === "1234") {
//         resolve({ success : true , message : "logic is done"})
//     } else {
//         reject({ success : false , message : "logic is wrong"})
//     }
// })

// logicPromise
// .then((result) => {
//     console.log(result.message);

// })
// .catch((error)=> {
//     console.log(error.message);

// })

// ==================================================================================================  async/await

// "async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise

// The await keyword can only be used inside an async function.

// let value = await Promise;   ( Await Syntax )

// async function myDisplay() {} // Syntax

//  Syntax style	.then(), .catch()	await, try/catch

// The two arguments (resolve and reject) are pre-defined by JavaScript.

// We will not create them, but call one of them when the executor function is ready.

// Very often we will not need a reject function.

// =================================================================================================

// Simple, readable like normal code

// function wait3Second(){
//    return new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve(" 3 second complete ho gaya ! ")
//     } ,3000)
//    })
// }

// async function run(){
//     console.log("wait for 3 second..................");

//     const msg= await wait3Second();

//     console.log(msg);

// }

// run();

// fetch api

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function fetchUserData(){
//     return new Promise((resolve)=> {
//         setTimeout(() => {
//             resolve ({ name : "reem" , role : "admin"})
//         } ,5000)
//     })
// }

// async function loginUser(){

//     console.log("logging in............");

//     const user = await fetchUserData();

//     console.log("login successfull");
//     console.log("welcome" , user.name);
//     console.log("role" , user.role);

// }

// loginUser();

// _____________________________________________________________________________ class

// const firstprocess = () => {
//   console.log("first process run ");
// };

// const secondprocess  = async () => {

//    try {

//     const response = await fetch ('https://fakestoreapi.com/products')

//     const data=await response.json()

//      console.log(data);

//    } catch (error) {
//     console.log(error);

//    }

//    console.log("second process run");

// };

// const thirdprocess = () => {
//     console.log("third process run");

// }

// firstprocess();
// secondprocess();
// thirdprocess();

// ====================================================================== promise

// const firstprocess = () => {
//   console.log("first process run ");
// };

// const secondprocess  = () => {

//     return new Promise((resolve,reject)=> {
//         fetch ('https://fakestoreapi.com/products')
//         .then((response) =>  response.json())
//         .then((data) => resolve(data))
//         .catch((error) => reject(error))

//     })

// };

// const thirdprocess = () => {
//     console.log("third process run");

// }

// firstprocess();
// secondprocess()

// .then((data) => {
//     console.log(data);

// })

// .catch((error) => {
//     console.log(error);

// })

// .finally(()=> console.log("second process run"));

// thirdprocess();

// _____________________________________________________________________________

// callback hell

// const first = (a, callback) => {
//   setTimeout(() => {
//     callback(a + 5);
//   }, 2000);
// };

// const second = (b, callback) => {
//   setTimeout(() => {
//     callback(b * 2);
//   }, 2000);
// };

// const third = (c, callback) => {
//   setTimeout(() => {
//     callback(c - 3);
//   }, 2000);
// };

// first(10, (r1) => {
//   console.log(r1);

//   second(r1, (r2) => {
//     console.log(r2);

//     third(r2, (r3) => {
//       console.log(r3);
//     });
//   });
// });

// ------------------------------------------------------------------------------

const first = (a) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + 5);
    }, 2000);
  });
};

const second = (b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(b * 2);
    }, 2000);
  });
};


const third = (c) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(c - 5);
    }, 2000);
  });
};



first(10)
  .then((r1) => {
    console.log(r1);
    return second(r1);
  })
  .then((r2) => {
    console.log(r2);
    return third(r2)

  })
  .then((r3) => console.log(r3)
  )
// https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en // formate cromm apli jova mate 
//   https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en&pli=1 
// https://fakestoreapi.com/docs 

// https://fakestoreapi.com/ 

// 1. Promise Style:

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(" Data mil gaya");
//     }, 2000);
//   });
// }

// getData().then((data) => {
//   console.log(data);
// }).catch((err) => {
//   console.log("Error:", err);
// });

// // async/await Style:
// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data mil gaya");
//     }, 2000);
//   });
// }

// async function showData() {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (err) {
//     console.log(" Error:", err);
//   }
// }

// showData();

// Real-Life Example	                          JavaScript Version
// Aap: "Jab kaam ho jaye to bata dena"	        Promise + .then()
// Aap: "Main wait karti hoon jab tak kaam ho jaye"	async/await

// Promise = Asynchronous task ko handle karne ka tarika

// async/await = Promise ko likhne ka clean aur readable version


// https://github.com/JanviLakani/Cinema_admin.git 
