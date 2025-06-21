// ___________________________________________________________________ 1

// 1.    Finding the maximum element in an array. 


// const arr=Math.max(10,50,99,87,58,42,38,98);

// console.log(arr);  // ans 99;

// class 

//  const arr=Math.max(10,50,99,87,58,42,199,38,98);

//  max=arr[0]
//  for(let i=0; i<=arr.langth; i++) {
//     if(arr[i] > max) {
//         max=arr[i]
//     }
//  }

// console.log(arr);


// ___________________________________________________________________ 2


// 2.    Finding the minimum element in an array.


// const arr=Math.min(10,50,99,87,58,42,38,98);

// console.log(arr);   // 10


// class 
// withoufunction 

// const arr=Math.min(10,50,99,87,58,42,38,98);
//  max=arr[0]
//  for(let i=0; i<=arr.langth; i++) {
//     if(arr[i] < max) {
//         max=arr[i]
//     }
//  }

// console.log(arr);
// ___________________________________________________________________ 3
  

// 3.    Sorting an array in ascending order. 

// const arr=[10,50,99,87,58,42,38,98];

// const ans=arr.sort((a,b) => a-b);

// console.log(ans);  // ans [10, 38, 42, 50, 58, 87, 98, 99] ascending

// class 
// withoufunction 

// const arr=[10,50,99,87,58,42,38,98]; 
//         // i  j 

// for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++ ) {
//         if(arr[i] > arr[j]) {
//             let temp;
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }

// console.log(arr);



// ___________________________________________________________________ 4




// 4.    Sorting an array in descending order. 

// const arr=[10,50,99,87,58,42,38,98]

// const ans=arr.sort((a,b) => b-a);

// console.log(ans);  // ans [99, 98, 87, 58, 50, 42, 38, 10] descending

// withoufunction 







// ___________________________________________________________________ 5


// 5.    Reversing an array. 

// const arr=[10,20,30,40,50,60,70,80,90,100];

// const ans=arr.reverse();

// console.log(ans);  // ans [100, 90, 80, 70, 60, 50, 40, 30, 20, 10] Reversing


// class 
// withoufunction 

// const arr=[10,20,30,40,50,60,70,80,90,100];
// let arr1=[];
// for(let i=arr.length-1; i>=0; i--){
//     arr1.push(arr[i])
// }

// console.log(arr1);

// let x=10; 
// console.log(x);



// ___________________________________________________________________ 6


// 6.    Finding the sum of all elements in an array. 

// const  arr=[10,20,30,40,50,60,70,80,90,100];

// const ans=arr.reduce((acc , v ,i) => acc+v, 0);

// console.log(ans);  // ans 550  sum of all elements

// withoufunction 

// const arr=[10,20,30,40,50,60,70,80,90,100];

// let sum=0;
// for(i=0; i<arr.length; i++) {
//     sum=sum+arr[i];
// }

// console.log(sum );

// ___________________________________________________________________ 7


// 7.    Finding the average of all elements in an array. 

// const arr=[10,20,30,40,50,60,70,80,90,100];

// const ans=arr.reduce((acc ,v,i) => acc + v);

// console.log(ans / 10);  // 55 average of all elements


// const arr=[10,20,30,40,50,60,70,80,90,100];

// let sum=0;
// for(i=0; i<arr.length; i++) {
//     sum=sum+arr[i];
// }

// console.log(sum / arr.length);

// _____ 

// const arr=[10,20,30,40,50,60,70,80,90,100]; 

// let sum=0;
// const ans=arr.forEach((v,i) => {
//   return sum += arr[i]
    
// })

// console.log(ans);


// _ _ _ _ _ _ _ 

// const arr=[10,20,30,40,50,60,70,80,90,100];

// let sum=0;

// for(i=0; i<arr.length; i++) {
//     sum += arr[i]
// }


// console.log(sum); 

// let average=sum / arr.length;

// console.log(average);    // ans 55 average of all elements

// ___________________________________________________________________ 8


// 8.    Checking if an array contains a specific element.  // means ki find

// const arr=[10,20,30];

// const ans=arr.some((v,i) => 20 === arr[1]);


// console.log(ans);


// const arr=[10,20,30];

// const ans=arr.find((v,i) => v>15);

// console.log(ans);  // 20 element return 



// const arr=[10,20,30];

// let ans=arr.includes(20);
// console.log(ans)    // ans true 

// class 


// const arr=[10,20,30,40]; 
// let ans=0;
// for(let i=0; i<=arr.length; i++) {
//     if(arr[i] === 20) {
//     ans=arr[i]
//     break;
// }
// }

// console.log(ans); // ans = 20



// const arr=[10,20,30,40]; 
// let ans =false;
// for(let i=0; i<=arr.length; i++) {
//     if(arr[i] === 20) {
//     ans=true
//     break;
// }
// }

// console.log(ans); // ans true 





// const arr=[10,20,30];

// const ans=arr.filter((v,i) => v === 20);

// console.log(ans)    // ans [20]

// ___________________________________________________________________ 9

// 9.    Removing duplicates from an array. 

//  const arr=[10,50,99,10,87,58,42,38,98 ,10];

//  let unicnum=[];

//  arr.map((v,i) =>{
//     if(!unicnum.includes(v)) {
//         unicnum.push(v);
//     }
//  });

//  console.log(arr,unicnum);   // ans [10, 50, 99, 87, 58, 42, 38, 98]

// ___________________________________________________________________ 10

//  10.    Merging two arrays into a new array. 

// const arr=[10,20,30,40,50];
// const arr1=[11,22,33,44,55];

// const ans=arr.concat(arr1);

// console.log(ans);  // ans [10, 20, 30, 40, 50, 11, 22, 33, 44, 55]

// ___________________________withou use 


// const arr=[10,20,30,40,50];
// const arr1=[11,22,33,44,55];

// let ans=[];

// for(let i=0; i<arr.length; i++) {
//     ans.push(arr[i]);
// }   

// for(let i=0; i<arr.length; i++) {
//     ans.push(arr1[i]);
// }  

// console.log(ans);


// ___________________________________________________________________ 11

// 11.    Splitting an array into two arrays based on a condition. 

//  const arr=[10,50,99,10,87,58,42,38,98 ,10];


//  ans=[];
//  ans1=[];

//  for(let i=0; i<arr.length; i++){
//     if(arr[i] > 50) {
//         ans.push(arr[i]);
//     } else {
//         ans1.push(arr[i]);
//     }
//  }

//  console.log(ans,ans1);

// ___________________________________________________________________ 12

// 12.    Rotating an array by a given number of positions. 

// n=parseInt(prompt(("enter num")));
// const arr=[10,20,30,40,50,60,70,80,90,100]; 

// const ans=arr.splice(arr.length-n,n)

// console.log(ans);

// for (let i=ans.length-1; i>=0; i--) {
//     arr.unshift(ans[i])
// }

// console.log(arr);


// ________________________________________ 


// n=parseInt(prompt(("enter num")));
// const arr=[10,20,30,40,50,60,70,80,90,100]; 

// const ans=arr.splice(0,n);

// console.log("arr1",ans);

// for(let i=0; i<ans.length; i++) {
//    arr.push(ans[i])
// }


// console.log("ans",arr);

// ___________________________________________________________________ 13
 
//  13.    Finding the second largest element in an array. 

// const arr=[10.5,69,87,2,21,47,96,39];
// const ans=arr.slice().sort((a,b) => b-a) // [96, 87, 69, 47, 39, 21, 10.5, 2]
// console.log(ans);

// console.log(ans[1]);

//  13.    Finding the second largest element in an array. 


// const arr=[10.5,69,87,2,21,9999,47,96,39,];

// let large=0;

// for(let i=0; i<=arr.length; i++) {
//    if(arr[i]> large) {
//       large=arr[i]
//    }
// }

// console.log(large);

// let secondlarge=0;

// for(let i=0; i<arr.length; i++) {
//    if(arr[i] > secondlarge && arr[i] < large) {
//       secondlarge=arr[i]
//    }
// }

// console.log(secondlarge);


// class  13 



//  const arr=[10,50,99,10,87,58,42,38,98 ,10];

//  let unicnum=[];

//  arr.map((v,i) =>{
//     if(!unicnum.includes(v)) {
//         unicnum.push(v);
//     }
//  });

//  console.log(arr,unicnum); 

//  let x = unicnum;

//  console.log("x",x);
 

//  x=arr.sort((a,b)=> b-a);

//  console.log(x);
 
//  k=2;  //(user pase thi j mle tene k dgarel chhe )

//  console.log(arr,arr[k-1]);
 



// ___________________________________________________________________ 14
// 14.    Finding the k-th smallest element in an array. 

// let arr=[5,10,45,20,30,25,35,40,15,50]; // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

//  let unicnum=[];

//  arr.map((v,i) =>{
//     if(!unicnum.includes(v)) {  // first check in box to available elemnet in boc so find 
//         unicnum.push(v);   
//     }
//  });

//  console.log(arr,unicnum); 

//  let x = unicnum;

//  console.log("x",x);

// x=arr.sort((a,b) => a-b );


// console.log(x);


// let k=3; 

// console.log(arr[k - 1]);   // -1 etala mate km k index 0 thi start thati hovathi //  3rd smallest element
// ___________________________________________________________________ 15

// 15.    Finding the median of an array. 

// const arr=[10,20,30,40,50];   odd number 

// const ans=arr.slice(2,3);

// const ans=arr.splice(2,1)

// console.log(ans);

// _______________________ 
// 15.    Finding the median of an array. 

//  const arr=[10,20,30,40];  

// let arr=[2,3,4,6,5,1]; // 1,2,3,4,5,6

// let ans=arr.sort((a,b) => a - b);

// const ans1 = Math.floor(arr.length / 2);

// console.log(ans1);


// if (arr.length % 2 === 0) {
//   let result=(ans[ans1] + ans[ans1-1]) /2;

//   console.log(result);
  
// } else {
//   console.log(ans[ans1]);
  
// }




 // class 15

// let arr=[2,6,5,1]; // 1,2,3,4,5,6

// // let arr[23,45,67,78,90]

// let ans=arr.sort((a,b) => a - b);

// const ans1 = Math.floor(arr.length / 2);

// console.log(ans1);


// if (arr.length % 2 === 0) {
//   let x=(ans[ans1] + ans[ans1-1]) /2;  // ek index back ni need hovathi -1 

//   console.log(x);
  
// } else {
//   console.log(ans[ans1]);
  
// }


// ex:-  tarike arr[10,20,30,40] hoi yo array length first ek index mli jai after
// eni bajuni joti hoi to emno j element temna -1 karva no 


// ___________________________________________ 16 

// 16.    Checking if two arrays are equal or not. 



//  let arr=[10,20,30];

// let arr1=[10,20,30];

// let ans = arr.length === arr1.length && arr.every((value,index) => value === arr1[index])

// console.log(ans);  // aama every function ma length check karva ni need nathi km e 
// index and value banne j check kari ne  aape toj true return kare chhe nai to false 


// class 16 

// without use array method if and for loop help to check both array length and index 

//  let arr=[10,20,30];

// let arr1=[10,20,30,60];

// let flag = true;

// if (arr.length === arr1.length) {
//   // console.log("same");  (below comment read)
//   // // aa start nai rakhvanu km k hju pn if condition hovathi e 
//   // direct same kai deshe to comment rakhvo logonly check karva use karvu 
//   for(i=0; i<=arr.length; i++) {
//     if(arr[i] !== arr1[i]) {
//       flag=false;
//       break; 
//     } 
//   }

//   if(flag) {
//     console.log(" both array element are same");
    
//   } else {
//     console.log("not same array element");
    
//   }
  
// } else {
//   console.log("not same length");
  
// }

// with use function to check 2 array length and index sort tric  class 16 

//  let arr=[10,20,30];

// let arr1=[10,20,30];

// let ans=arr.every((v,i) => v === arr1[i]);

// console.log("check",ans);



// ___________________________________________ 17

// 17.    Finding the index of the first occurrence of an element in an array. 

// let arr=[50,100,150,200,250,150,300];

// let ans=arr.indexOf(150);

// console.log(ans);

// ___________________________________________ 18

// 18 Finding the index of the last occurrence of an element in an array.  
// let arr=[50,100,150,200,250,150,300];

// let ans=arr.lastIndexOf(150);

// console.log(ans);
// ___________________________________________ 19

// 19.    Removing all occurrences of an element from an array.


// const arr=[10,20,30,40,10,50,60,10];

// const ans=arr.filter((v,i)=> v !== 10);

// console.log(ans);

// ___________________________________________ 20
// 20.    Replacing all occurrences of an element in an array with a new element. 

//  const arr=[10,20,30,40,10,50,60,10];

//  const ans=arr.map((v,i) => v === 10 ? 999 : v);  // v === 10 hase to 999 karshe nai to pachhu e value j majshe 

//  console.log(ans);

 // ___________________________________________ 21
 
// 21.    Creating a new array with the elements of the original array in reverse order, without modifying the original array. 

// const arr=[10,20,30,40,50,60,70,80,90,100]; 

// const ans=arr.slice().reverse();  // slice ek emty array aape chhe pche tena pr reverse  nu kam karavu 

// console.log(arr,ans);

 // ___________________________________________ 22

//  22.    Checking if an array is sorted in ascending order.

//  const arr=[10,50,87,2,3,64,51,21]; 

//  const ans=arr.slice().sort((a,b) => a-b);

//   const isascending=arr.every((v,i) => v === ans[i])
 
//  if (isascending) {
   
//    log("yes ,number is ascending order.");
    
//  } else {
//     console.log("no ,number is not ascending order.");
    
//  }

// class 

//  const arr=[10,50,87,2,3,64,51,21];

// // const arr=[2,3,5];

//   // const ans=arr.slice().sort((a,b) => a-b);

//   // console.log(ans);

//   function checkarr(arr) {
//     for(let i=0; i<=arr.length; i++) {
//       if(arr[i] > arr[i+1])
//         return false
//     }
//     return true;
//   }

//   console.log(checkarr(arr));
  
  
 

  // ___________________________________________ 23

  //   23.    Checking if an array is sorted in descending order. 

//   const arr= [300, 250, 200, 150, 150, 100, 50];
//   const ans=arr.slice().sort((a,b) => b-a);

//   const isdescending=arr.every((v,i) => v === ans[i])

//   if(isdescending) {
//     console.log("yes , ans is descending order");
    
//   } else {
//      console.log("no , ans is not descending order");
    
//   }

//   console.log(ans);


// class 

//  const arr=[10,50,87,2,3,64,51,21];  // false

// const arr=[30,20,10]  // true


//   function checkarr(arr) {
//     for(let i=0; i<=arr.length; i++) {
//       if(arr[i] < arr[i+1])
//         return false
//     }
//     return true;
//   }

//   console.log(checkarr(arr));
  

// x.redu((v,acc)v.len acc.la v acc)


 
 // ___________________________________________ 24
//  24.    Finding the first three maximum number's sum an array. 

// const arr=[50,100,150,200,250,150,300]; // [300, 250, 200, 150, 150, 100, 50]

// const ans=arr.sort((a,b)=> b-a).slice(0,3).reduce((acc,v,i) => acc+v , 0) 

// console.log(ans);


// des temp ec 
// emty arr loop 0 to 2  Push 
// for sum =sum+[arr[i ]]


// const arr=[3,2,50,10,5];

// for(let i=0; i<arr.length; i++) {
//     for(let j=i+1; j<arr.length; j++ ) {
//         if(arr[i] > arr[j]) {
//             let temp;
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }

        
//     }
// }

// console.log(arr);

// let sum=0;

// for(let i=0; i<=2; i++) {
//   sum=sum+arr[i]
// }

// console.log(sum);

// work 

// filter flag 
// filter reduce
// _____________________________________________________________ 

// const arr=[10,20,30,40,50];

// const arr1=[50,60,70,80,90];


// const ans=arr.filter((v,i) => v = arr1.includes(v))

// console.log(ans)

// ________________________________________________ 


// const arr=[10,20,30,40,50]; 

// const ans=arr.join('').split("").reduce((acc,v,i) => acc + parseFloat(v),0)

// console.log(ans);



// _______________________________________________

// const arr=["hi","hey","hello" ,"please"];

// const ans=arr.reduce((acc,v) => acc.length > v.length ? acc:v);

// console.log(ans);

// ________________________________________________________ 

// 28

// const arr=[10,2 , [20 ,[28] ,10, ],48, 45]

// const ans=arr.flat(2);

// console.log(ans); // ans :- [10, 2, 20, 28, 10, 48, 45]


// 29 

// const arr1=[[12,30],[2,4] ,[10,7]];

// // const ans=arr1.filter((v,i) => v.reduce((acc,v1) => acc+v1) ,0)
// const ans=arr1.filter((v,i) => v.reduce((acc,v1) => acc+v1,0))

// console.log(ans);

// 30  

// const arr2=[10,20,3,30,5,7,30];

// const ans1=arr2.filter((v,i) => arr2.indexOf(v) == arr2.lastIndexOf(v));

// console.log(ans1);  // [10, 20, 3, 5, 7]


// _________________________________________ 
// console.log("hello git");
console.log("hello java script");

console.log("hello java script");
console.log("hello java script");
console.log("hello java script");


console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");


console.log("hello");
console.log("hello");console.log("hello");console.log("hello");








