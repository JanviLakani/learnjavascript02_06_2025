

// object 

// const person={
//     name: "janvi",
//     age : 25,
//     village : "gheti" ,
//     city : "surta",
//     address : "nana varachha"
// }


// console.log(person);

const cars=["audi","volvo","BMW","Scross"];

cars[3]="farari"   // array ma update

console.log(cars);

cars.push("TESLA");    // array ma add

console.log(cars);

// ou can change the properties of a constant object: 


const car={
    name: "tesla",
    model : 5005,
    color : "black",
    tyres : 4
}



car.color="white";   // change property 

console.log(car);

car.owner="ms.roy"

console.log(car);


// ________________________________________________________ 


// const person={
//     name: "janvi",
//     age : 25,
//     village : "gheti" ,
//     city : "surta",
//     address : "nana varachha"
// }


// console.log(person);

// console.log(person.name ,person.age, person.village ,person.city ,person["address"]);

// person.name="priyanka"
// person.study="bca"

// console.log(person);

// ______________________________________________________ 


// object task 1 to 3

// 1

// const person = {
//             name: "amit",
//             Age : "20"
// }

// console.log(person.name , person.Age);

// 2 

// const person = [
//             {
//                 name: "Amit",
//                 age: 25,
//             },
//             {
//                 name: "Piyush",
//                 age: 40,
//             }
//         ];

// person.map((v,i)=> {
//     console.log(v.name , v.age);
    
// })

// 3


// const person = [    
//                  {
//                      name: "Amit",
//                     age: 25,
//                     course: [
//                         "c",
//                         "html"
//                     ]
//                  }
                 
//             ]  

// person.map((v,i) =>{
//     console.log(v.name ,v.age);
//   v.course.map((v1) => {
//     console.log(v1);
    
//   })

// })