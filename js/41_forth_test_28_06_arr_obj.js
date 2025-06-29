

// // Q-1 [Each 1 Marks]  
// let obj1 = {
//    id: 101,
//    name: 'amit',
//    city: 'surat'
// }

// // 1. Check ‘percentage’ key is available or not in obj1. 


// console.log(obj1.hasOwnProperty("percentage"));  // ans false


// // 2. Add new property favColor: ‘blue’ in object. 

// obj1.favColor="blue";

// console.log(obj1);  // ans {id: 101, name: 'amit', city: 'surat', favColor: 'blue'}


// // 3. Change city to ‘vapi’ 

// obj1.city="vapi";

// console.log(obj1); // ans {id: 101, name: 'amit', city: 'vapi', favColor: 'blue'}

// // 4. Convert all property to array. 

// console.log(Object.entries(obj1)); // ans  [Array(2), Array(2), Array(2), Array(2)]

// // 5. Delete ‘city’ property from obj1. 

// delete obj1.city;

// console.log(obj1);  // ans {id: 101, name: 'amit', favColor: 'blue'}


// Q-2 [Each 3 Marks] 
// let arr4 = [
//    {id: 1, name: 'mobile', price: 8000, qty: 20},
//    {id: 2, name: 'laptop', price: 50000, qty: 3},
//    {id: 3, name: 'book', price: 120, qty: 60},
//    {id: 4, name: 'botle', price: 50, qty: 10},
//    {id: 5, name: 'ac', price: 35000, qty: 2}
// ]

// const x = arr4.some((v) => v.name === 'ac');
// console.log(x);


// 1. Display all data in table format 





// 2. Remove botle data from arr4 filter

// console.log(Object.entries(arr4).filter(([k,v],i)=> v.name[0].length ));

// console.log(arr4);
// console.log(Object.entries(arr4));



// let ans=Object.entries(arr4).filter(([k,v],i)=> v.id = 4)

// console.log(ans);

// let ans=arr4.map((v,i)=> {
//     return {
//         id : Object.entries(v.id[0]).filter(([key ,v1] ,i) => v1 = 3)

        

        
//     }
// })

// console.log(ans);

// console.log(arr4);



// 3. Search ‘ac’ is available or not in arr4 

// console.log(name.hasOwnProperty("ac"));

//  console.log(Object.entries(arr4).name.hasOwnProperty("ac"))
// _____________________________________________________________________ 

// const courses = [
//         {
//             name: 'Full Stack Development',
//             duration: '12 Month'
//         },
//         {
//             name: 'React Development',
//             duration: '10 Month'
//         },
//         {
//             name: 'UI/UX Designing',
//             duration: '6 Month'
//         }
//     ]

//     // Display onr course at a time with previous and next button. Apply disabled functionality in button. 



// const ans=Object.entries(courses)

// console.log(ans);

// const display = () => {
//     print = ``;

//     courses.map
// }



// ========================================================================== 



// let arr4 = [
//    {id: 1, name: 'mobile', price: 8000, qty: 20},
//    {id: 2, name: 'laptop', price: 50000, qty: 3},
//    {id: 3, name: 'book', price: 120, qty: 60},
//    {id: 4, name: 'botle', price: 50, qty: 10},
//    {id: 5, name: 'ac', price: 35000, qty: 2}
// ]

// 1. Display all data in table format 


// print = ``;

// print += `
// <table border>
//     <tr>
//         <th>id</th>
//         <th>name</th>
//         <th>price</th>
//         <th>qty</th>
//     </tr>
// `
// print += `
//     <tr>
//     <td>${1}</td>
//     <td>mobile</td>
//     <td>${8000}</td>
//     <td>20</td>
// </tr>`

// print += `
//     <tr>
//     <td>${2}</td>
//     <td>laptop</td>
//     <td>${50000}</td>
//     <td>3</td>
// </tr>`

// print += `
//     <tr>
//     <td>${3}</td>
//     <td>book</td>
//     <td>${120}</td>
//     <td>60</td>
// </tr>`

// print += `
//     <tr>
//     <td>${4}</td>
//     <td>botle</td>
//     <td>${50}</td>
//     <td>10</td>
// </tr>`

// print += `
//     <tr>
//     <td>${5}</td>
//     <td>ac</td>
//     <td>${35000}</td>
//     <td>2</td>
// </tr>`
// print +=  `</table>`

// document.getElementById("disk").innerHTML=print;

// =========================================================== 
// 2. Remove botle data from arr4 

// arr4=arr4.filter((v,i) => v.name !== 'botle')

// console.log(arr4);

// 3. Search ‘ac’ is available or not in arr4 

// const x = arr4.some((v) => v.name === 'ac');
// console.log(x);

// 4. Only Increase qty of laptop to 5. 


// let ans=arr4.find((v,i)=> v.name === 'laptop');
// console.log(ans);

// if (ans) {
//     ans.qty=5
// }

// console.log(arr4);

// 5. Give list of all products that have price more than 20000. 

// const x = arr4.filter((v) => v.price > 20000);

// console.log(x);



// ------------------------------------------------------------------------------------------- 


// const courses = [
//         {
//             name: 'Full Stack Development',
//             duration: '12 Month'
//         },
//         {
//             name: 'React Development',
//             duration: '10 Month'
//         },
//         {
//             name: 'UI/UX Designing',
//             duration: '6 Month'
//         }
//     ]

// //     // Display onr course at a time with previous and next button. Apply disabled functionality in button. 

// console.log(courses[0].name); 
// console.log(courses[0].duration);
