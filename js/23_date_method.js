
// let x=new Date();

// console.log(x);  // pura date aa  gaya Mon Jun 09 2025 15:25:36 GMT+0530 (India Standard Time)


// ______________________________________ 

// let x=new Date("2025-06-09");

// console.log(x);

// get method 

// let today= new Date();

// console.log("year" , today.getFullYear());  // 2025
// console.log("month" , today.getMonth() + 1);  // 6
// console.log("day" , today.getDay());  // 1 mean monday
// console.log("date" , today.getDate());  // 9
// console.log("hours", today.getHours()); // 15
// console.log("minutes", today.getMinutes()); // 38
// console.log("second", today.getSeconds());  // 17 , 20, 25 , 29
// console.log("time", today.getTime());  //  1749463824588
// console.log("getUTCDate", today.getUTCDate()); // 9
// console.log("getTimezoneOffset",today.getTimezoneOffset());  // -330




// set date method 


// let d = new Date();

// d.setFullYear(2026);
// d.setDate(25)
// d.setHours(19)
// d.setMilliseconds(10)
// d.setMinutes(21)
// d.setTime(10)  //new hi date banake denga



// console.log(d);

// _______________________________________________________ 

// let text;
// let date = new Date();

// let futuredate=new Date();

// futuredate.setDate(2027 ,5,6);

// if(futuredate > date) {
//     text = "greater date";
// } else {
//     text = "less date";
// }

// console.log(text);


// ____________________________________________ 

// let d=new Date();

// console.log(d.toDateString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.getUTCDate());
// console.log(d.getTimezoneOffset()); 

// __________________________________________________ 

let d1 = new Date("2025,6,30");
let d2 =new Date()

// d2.setDate("2025-7-20");

// if (d2 > d1) {
//     console.log("ans is correct");
    
// } else {
//     console.log("ans is incorrect");
    
// }


for (let i=d2; i<d1;  d1.setDate(d2.getDate() + 1)) {
   console.log( d1.setDate(d2.getDate() + 1));
   
   
}


































