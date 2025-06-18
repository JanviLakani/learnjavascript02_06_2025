
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




// 2.    Finding the minimum element in an array.


// const arr=Math.min(10,50,99,87,58,42,38,98);

// console.log(arr);   // 10


// class 

// const arr=Math.min(10,50,99,87,58,42,38,98);
//  max=arr[0]
//  for(let i=0; i<=arr.langth; i++) {
//     if(arr[i] < max) {
//         max=arr[i]
//     }
//  }

// console.log(arr);
  

// 3.    Sorting an array in ascending order. 

// const arr=[10,50,99,87,58,42,38,98];

// const ans=arr.sort((a,b) => a-b);

// console.log(ans);  // ans [10, 38, 42, 50, 58, 87, 98, 99] ascending

// class 

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







// 4.    Sorting an array in descending order. 

// const arr=[10,50,99,87,58,42,38,98]

// const ans=arr.sort((a,b) => b-a);

// console.log(ans);  // ans [99, 98, 87, 58, 50, 42, 38, 10] descending


// 5.    Reversing an array. 

// const arr=[10,20,30,40,50,60,70,80,90,100];

// const ans=arr.reverse();

// console.log(ans);  // ans [100, 90, 80, 70, 60, 50, 40, 30, 20, 10] Reversing


// class 

// const arr=[10,20,30,40,50,60,70,80,90,100];
// let arr1=[];
// for(let i=arr.length-1; i>=0; i--){
//     arr1.push(arr[i])
// }

// console.log(arr1);

// let x=10; 
// console.log(x);





// 6.    Finding the sum of all elements in an array. 

// const  arr=[10,20,30,40,50,60,70,80,90,100];

// const ans=arr.reduce((acc , v ,i) => acc+v, 0);

// console.log(ans);  // ans 550  sum of all elements

// const arr=[10,20,30,40,50,60,70,80,90,100];

// let sum=0;
// for(i=0; i<arr.length; i++) {
//     sum=sum+arr[i];
// }

// console.log(sum );



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


// 9.    Removing duplicates from an array. 

//  const arr=[10,50,99,10,87,58,42,38,98 ,10];

//  let unicnum=[];

//  arr.map((v,i) =>{
//     if(!unicnum.includes(v)) {
//         unicnum.push(v);
//     }
//  });

//  console.log(arr,unicnum);   // ans [10, 50, 99, 87, 58, 42, 38, 98]


//  10.    Merging two arrays into a new array. 

// const arr=[10,20,30,40,50];
// const arr1=[11,22,33,44,55];

// const ans=arr.concat(arr1);

// console.log(ans);  // ans [10, 20, 30, 40, 50, 11, 22, 33, 44, 55]


const arr=[10,20,30,40,50];
const arr1=[11,22,33,44,55];

let ans=[];

for(let i=0; i<=arr.length; i++) {
    arr.push(arr[i]);
}   

console.log(ans);





