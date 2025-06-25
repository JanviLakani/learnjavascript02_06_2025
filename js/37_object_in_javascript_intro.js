// object

// const person={
//     name: "janvi",
//     age : 25,
//     village : "gheti" ,
//     city : "surta",
//     address : "nana varachha"
// }

// console.log(person);

// ___________________________________________

// const cars=["audi","volvo","BMW","Scross"];

// cars[3]="farari"   // array ma update

// console.log(cars);

// cars.push("TESLA");    // array ma add

// console.log(cars);

// ____________________________________________

// you can change the properties of a constant object:

// const car={
//     name: "tesla",
//     model : 5005,
//     color : "black",
//     tyres : 4
// }

// car.color="white";   // change property

// console.log(car);

// car.owner="ms.roy" // add property

// console.log(car);

// _____________________________________________ JavaScript For In
// The key is used to access the value of the key
// Each iteration returns a key (x)

// const myobj={
//     name : "siya",
//     age : 20,
//     city : "surat"
// }

// for(let k in myobj) {
//     console.log(myobj[k]);  // access the value

// }

// ans siya ,20 ,surat

// ________________________________________________________

// const person={
//     name: "janki",
//     age : 20,
//     village : "gheti" ,
//     city : "surat",
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
//   {
//     name: "Amit",
//     age: 25,
//     course: ["c", "html"],
//   },
// ];

// person.map((v, i) => {
//   console.log(v.name, v.age);
//   v.course.map((v1) => {
//     console.log(v1);
//   });
// });

// _________________________________  class

// const arr=[10,20,30];

// for(let k in arr) {
//     console.log(k , arr[k]);

// }

// const obj={
//     rooll_no : 10,
//     age : 20 ,
//     marks : 30
// }

// console.log(obj);  // ans {rooll_no: 10, age: 20, marks: 30}

// console.log(obj.marks , obj["marks"]);  // ans 30 30

// __________________________________

// for(let k in obj) {
//     console.log(k , obj[k]);    // full access

// }

// add

// obj.city="surat";
// obj["address"]="sarthana";

// // update

// obj.rooll_no=99

// // delete

// delete obj.age

// console.log(obj);

// _________________________________

// 1
// const person = {
//             name: "amit",
//             Age : "20"
// }

// for(let k in person) {
//     console.log(k,person[k]);      // .... option 1 to access value

// }

// console.log(person.name , person["Age"]);  //.... option 2 to access value

// ____________________________________

//2

// const person = [
//   {
//     name: "Amit",
//     age: 25,
//   },
//   {
//     name: "Piyush",
//     age: 40,
//   },
// ];

// person.map((v,i) =>{
//     console.log(v.name , v.age);

// })

// ___________________________________

// 3

// const person = [
//   {
//     name: "Amit",
//     age: 25,
//     course: ["c", "html"],
//   },
//    {
//     name: "Aman",
//     age: 22,
//     course: ["javascript", "react js"],
//   }
// ];

// person.map((v,i) =>{
//     console.log(v.name , v.age );
//     v.course.map((v1)=> console.log(v1))

// })

// ___________________________________

// 4

const myObj = {
  name: "jd",
  age: 20,
  cars: {
    car1: "ford",
    car2: "breza",
    car3: "BMW",
  },
};

// for( let k in myObj) {
//     console.log(myObj.name, myObj.age , myObj.cars);
    
// }

// ----------------------- 

// for(let k in myObj) {
//     console.log(myObj[k]);
//     for(let k1 in myObj[k]) {
//         console.log(myObj[k][k1]);
        
//     }
    
// }

// ------------------------

// for(let k in myObj) {
    

//     if(k === "cars") {
//         for(let j in myObj[k]) {
//             console.log(myObj[k][j]);
            
//         }
//     } else {
//         console.log(myObj[k]);
//     }
    
// }

// ______________________________________

// 5

// const person = [
//   {
//     name: "amit",
//     age: 19,
//     course: {
//       c1: "c",
//       c2: "html",
//     },
//   },
//   {
//     name: "mayur",
//     age: 20,
//     course: {
//       c1: "c",
//       c2: "html",
//     },
//   },
// ];

// person.map((v,i)=>{
//     console.log(v.name , v.age );

//     for(let k in v.course) {
//         console.log(v.course[k]);
        
//     }
    
// })

// ----------------------

// person.map((v,i) => {
//     console.log(v.name , v.age , v.course.c1 , v.course.c2);
    
// })


// _______________________________________ 

// 6 

// let data = {
//     personal_info: {
//         name: 'amit',
//         age: 25,
//         city: 'surat'
//     },
//     courses: ["C", "JavaScript", "React"],
//     branches: {
//         b1: {
//             admission: 50,
//             vacant_seat: 10
//         },
//         b2: {
//             admission: 30,
//             vacant_seat: 20
//         },
//         b3: {
//             admission: 25,
//             vacant_seat: 25
//         },
//         b4: {
//             admission: 40,
//             vacant_seat : 10
//         }
//     }
// }



// for(let k in data) {
//     console.log(k);

//     if( k === 'personal_info') {
//         console.log(data[k].name , data[k].age , data[k].city);
        
//     } else if (k === 'courses') {
//         data[k].map((v,i)=> console.log(v))
//     } else if ( k === 'branches') {
//         for(let j in data[k]) {
//             console.log("branches" ,j);
//             console.log("admission",data[k][j].admission);
//             console.log("vacant_seat",data[k][j].vacant_seat);
            
            
//         }
//     }
    
// }


// -------------------------------- option 2

// for(let k in data) {
//     console.log(data[k]);

//     if(k === "personal_info") {
//         for(let j in data[k]) {
//            console.log(data[k][j])   
//         }
//     } else if (k === "courses") {
//         data[k].map((v)=> {
//             console.log(v);
            
//         })
//     } else if (k === "branches") {
//         for(let k1 in data[k]) {
//             console.log(data[k][k1]);
//             for(let k2 in data[k][k1]) {
//                 console.log(data[k][k1][k2]);
                
//             }
//         }
//     }
    
// }

// _______________________________________________________ 

// 7

let institues = [
    {
        name: 'ABC IT Institute',
        seat: [
            {
                react: 15,
                node: 20,
                full_stack: 10,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'XYZ IT Institute',
        seat: [
            {
                react: 0,
                node: 70,
                full_stack: 0,
                ui_ux: 10
            },
        ]
    },
    {
        name: 'PQR IT Institute',
        seat: [
            {
                react: 7,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    },
    {
        name: 'MNP IT Institute',
        seat: [
            {
                react: 0,
                node: 0,
                full_stack: 0,
                ui_ux: 0
            },
        ]
    }
]


institues.map((v,i)=> {
    console.log("institues name :-",v.name);
    v.seat.map((v1) => {
        console.log("react :-",v1.react);
        console.log("node :-",v1.node);
        console.log("full_stack :-",v1.full_stack);
        console.log("ui_ux :-",v1.ui_ux);
        
    })
    
})