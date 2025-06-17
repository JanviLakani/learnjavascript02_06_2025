
// const arr=[10,20,30,40,50];

// console.log(arr);


// ________________________ 


// const arr=new Array(10,20,78);

// console.log(arr);

// _______________________________ 


// const arr=[30,29,69];

// for(i=0; i<arr.length; i++) {
//     console.log(arr[i]);
    
// }


// ________________________________ 

// const arr=[30,29,69];
// arr.forEach((v,i) => {
//     console.log(i,v);
    
// })


// ____________________________ map with bracket
// const arr=[30,29,69,99,100];

// arr.map((v,i) => {
//     console.log(i,v);
    
// })


// ____________________________ map without bracket use for single line condition

// const arr=[30,29,69,99,100];

// arr.map((v,i) => console.log(i,v))


// __________________________________ isArray ckeck passed value is array or not 

// const arr=[10,11,12];

// console.log(Array.isArray(arr));  // ans true


// _________________________________________ return array ,

// combine two or array

// const arr3=[99,85,74,21];

// const arr4=[10,20,30,40];

// const ans=arr3.concat(arr4);

// console.log(ans);    

// ________________________________ 

// search  

// const arr=[50,60,85,60,100,60];

// const ans=arr.some((v,i) => v > 50)

// console.log(ans);  // ans Boolean 

// _ _ _ _ _ _ _ _ _ 

// find

// const arr1=[10,20,30,50,60];

// const ans1=arr1.find((v,i) => v >20)

// console.log(ans1);  // 30 return ma array element... match first occurence element

// _ _ _ _ _ _ _ _ _ _ _ 

// includes  

// const arr11=[20,30,40,50];

// const ans2=arr11.includes(50);

// console.log(ans2);   // return boolean , direct check specific element 


// __________________________________________ 

// toString 

// const arr=[10,111,"janvi",1111,11111];

// const ans=arr.toString();

// console.log(ans);  return string 

// _____________________________________________________________________

// add element mate 3 type chhe 

// let arr=[10,20,30,40];

// let ans=arr.push(99);

// console.log(ans);   // return array length ans //  5 // add at last position


// _ _ _ _ _ _ _ _ _ 


// let arr=[20,33,52,60,60,75];

// let ans=arr.unshift(99);

// console.log(ans);   // return array length ans // 7 // add at first position


// _ _ _ _ _ _ _ _ _ 

// let arr=[10,20,30,40,50,60];

// let ans=arr.splice(3,0,99,88,77);

// console.log(ans);  // return empty specified position []

// _____________________________________________________________________________ 





// delete mate 3 type chhe 

// pop

// let arr=[10,20,30,40,50,60];

// let ans=arr.pop();

// console.log(ans);   // return removed element // ans 60 //  delete at last position


// * * * * * *  * * * * *  

// shift 

// const arr=[5,10,20,30,40,50];

// const ans=arr.shift();

// console.log(ans);   // return removed element // 5 // delete at first position


// * * * * * *  * * * * *  

// splice 

// const arr=[11,22,33,44,55,66]

// const ans=arr.splice(1,2);

// console.log(ans);   // return removed element array
                   // delete specified position


// _________________________________________________________________________________ 

// let arr=[11,22,33];

// arr[2]=99;

// console.log("arr",typeof arr); 

// console.log(ans);  // ans nai aavto 

// // ans object 

// _ _ _ _ _ _ _ _ _ 


// ___________________________________________________________________________ 

// slice 

// 1 

// const arr=[10,20,30,40,50,60,70];

// const ans=arr.slice(3);

// console.log(ans);   // return new array slice [40,50,60,70]

// // 2

// const arr1=[10,20,99,88,77,40,50];

// const ans1=arr1.slice(2,5);

// console.log(ans1);  // new array [99,88,77] return 


// _____________________________________________________________________________

// map 

// 1 

// const arr=[10,20,30,40,50,60,70];

// const ans=arr.map((v,i) => v*10);

// console.log(ans);  // ans [100,200,300,400,500,600,700]

// visit each and every element and return new array with work 

// 2 

// const arr=[99,88,66,55];

// const ans=arr.map((v,i) => v+10);

// console.log(ans);  //ans  [109,98,76,65]


// _____________________________________________________________________________ 


// filter 

// 1

// const arr=[10,20,30,40,50,60,70];

// const ans=arr.filter((v,i) => v >= 50);

// console.log(ans); //  ans [50,60,70] return array element who pass condition

// 2

// const arr=["ravi",'mahi','janvi','priyanka'];

// const ans=arr.filter((v,i) => v.length >= 5)

// console.log(ans);  // ['janvi' , 'priyanka']

// ____________________________________________________________________________ 


// reduce 

// const arr=[10,20,30,40,50];

// const ans=arr.reduce((accumulator,value,i) => accumulator + value);  

// console.log(ans);  // ans 150



// _______________________________________________________________________________ 

// indexof 

// 1 

// let arr=[10,20,30,40,50];   // 2 parameter // search element , start index

// let ans=arr.indexOf(30)

// console.log(ans);  // ans return first check index 

// 2 

// let arr=[10,20,30,40,20,50];

// let ans=arr.indexOf(20,2);

// console.log(ans);  // ans 4 

// 3

// let arr=[1,2,3,4,5];

// let ans=arr.indexOf(10);

// console.log(ans);  // -1 reason is not found 10 so 


// _____________________________________________________________________________________ 

// lastindexof 

// const arr=[15,50,85,50 ,65,98];

// const ans=arr.lastIndexOf(50);

// console.log(arr,ans);




// ____________________________________________________________________ 

// every 

// const arr=[100,200,300,400,500];

// const ans=arr.every((v,i) => v>99);

// // console.log(ans);  // true 



// ______  

// let arr=[10,15,25];

// let ans=arr.every((v,i) => v>15);

// console.log(ans);  // ans false




// ____________________________________________________________________ 

// includes

// const arr=[10,20,30,40,50];

// const ans=arr.includes(30);

// console.log(ans); // ans truw




// ____________________________________________________________________ 

// findindex 


// let arr=[10,56,199,87,85,21,45,98,100];

// let ans=arr.findIndex((v,i) => v > 60);

// console.log(ans);  // first check element index intrue in condition 



// ____________________________________________________________________ 

// fill 

// const arr=[10,3,5,85,78,45,6,12];

// const ans=arr.fill(99);

// console.log(ans); // return array with filled all element 



// ____________________________________________________________________ 

// sort 


// let arr=['janvi', 'kajal' ,'maya','tina', 'mina'];

// let ans= arr.sort();

// console.log(ans);


// let arr=[10,85,25,3,45,79];

// let ans=arr.sort((a,b) => a-b);

// console.log(ans);   

// let arr1=[10,65,78,54,95,47,30,999];

// let ans1=arr1.sort((a,b) => b - a);

// console.log(ans1);



// ____________________________________________________________________ 

// reverse 

// const arr=[10,20,30,40,50];

// const ans=arr.reverse();

// console.log(ans);  // [50,40,30,20,10] return reverse array 

// ____________________________________________________________________ 




// class 


// slice  return part of array 

// const arr=[12,45,67,89,90,56,76]

// const ans=arr.slice(2 ,5);

// console.log(ans);   // ans[67, 89, 90]


// map iteration return array 


// const arr=[12,45,67,89,90,56,76]

// const ans=arr.map((v,i) => v+ 10);

// console.log(ans);  // ans 22, 55, 77, 99, 100, 66, 86]


// const arr=[12,45,67,89,90,56,76]

// const ans=arr.map((v,i) => {
//     if(v>50) {
//         return 1
//     } else if(v<50) {
//         return 0;
//     } else {
//         return 'x'
//     }
// })

// filter :- fitering element base on condition 
// return array 


// const arr=[12,45,67,89,90,56,76]

// const ans=arr.filter((v,i) => v>50)

// console.log(ans);  // [67, 89, 90, 56, 76]



// const arr=[12,45,67,89,90,56,76]
// const ans=arr.map((v,i) => {
//     if(v>50) {
//         return v;
//     }
// })

// console.log(ans); 

// not worl in this so use filter method so 
// first check when use right method so 
// this is based on condition 

//  [undefined, undefined, 67, 89, 90, 56, 76]


// reduce 

// most inportent method many work 0,[],{} in reduce 


// function excecute , return accumated value 
// orignal array not change 

// most inportent 3 perameter in this method  (accmated , value , index)

// const arr=[12,45,67,89,90,56,76]

// const ans=arr.reduce((acc,v,i)=> acc+v , 0)

// console.log(ans);  // ans 435


// indexof  return index of first occurance  of element 

// const arr=[12,45,67,89,90,56,76]

// const ans=arr.indexOf(50);  // e element tya nathi to ans ma -1 aavshe 

// const ans=arr.indexOf(45);  // ans 1 (index)

// console.log(ans);



// lastindexof :- return index of last occurance  of element  
 
const arr=[12,45,67,89,90,56,76] 









