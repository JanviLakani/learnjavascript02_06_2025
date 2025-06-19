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



// ___________________________________________________________________ 14
// 14.    Finding the k-th smallest element in an array. 

// let arr=[5,10,45,20,30,25,35,40,15,50]; // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// let ans=arr.sort((a,b) => a-b );

// console.log(ans);


// let k=3; //  3rd smallest element

// console.log(arr[k - 1]);
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



// ___________________________________________ 16 

// 16.    Checking if two arrays are equal or not. 



//  let arr=[10,20,30];

// let arr1=[10,20,30];

// let ans = arr.length === arr1.length && arr.every((value,index) => value === arr1[index])

// console.log(ans);

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

//  const ans=arr.map((v,i) => v === 10 ? 999 : v);

//  console.log(ans);

 // ___________________________________________ 21
 
// 21.    Creating a new array with the elements of the original array in reverse order, without modifying the original array. 

// const arr=[10,20,30,40,50,60,70,80,90,100]; 

// const ans=arr.slice().reverse();

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
  




 
 // ___________________________________________ 24
//  24.    Finding the first three maximum number's sum an array. 

// const arr=[50,100,150,200,250,150,300]; // [300, 250, 200, 150, 150, 100, 50]

// const ans=arr.sort((a,b)=> b-a).slice(0,3).reduce((acc,v,i) => acc+v , 0) 

// console.log(ans);


//  24.    Finding the first three maximum number's sum an array. 

// const arr=[50,100,150,200,250,150,300]; // [300, 250, 200, 150, 150, 100, 50]

// const ans=arr.sort((a,b)=> b-a).slice(0,3).reduce((acc,v,i) => acc+v , 0) 

// console.log(ans);