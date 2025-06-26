
// object method 

// 1   object.keys()

// const car={
//     name: "volvo",
//     color : "black",
//     model : 5005,
//     passing : 'surat'
// }

// console.log(Object.keys(car));   // array ma object ne key return thashe 


// const car={
//     name: "tesla",
//     model : 5005,
//     color : "black",
//     tyres : 4
// }

// console.log(Object.keys(car));



//  -------------------------------------------------------------------------------- 
// 2

// const student = {
//     name : "mivan",
//     age : 20,
//     roll_no : 99,
//     marks : 68,
//     school : "tapovan"
// }

// console.log(Object.values(student));  // array ma object ni value return 


// const car={
//     name: "tesla",
//     model : 5005,
//     color : "black",
//     tyres : 4
// }

// console.log(Object.values(car));


//  -------------------------------------------------------------------------------- 

//3

// Returns an array of the key/value pairs of an object
// Object.entries(object) 

// const person={
//     name:'mahi',
//     age: 20,
//     roll_no : 99,
//     city : 'surat'
// }

// console.log(Object.entries(person));  // array ma object ni property return kare chhe key and value both

// const car={
//     name: "tesla",
//     model : 5005,
//     color : "black",
//     tyres : 4
// }

// console.log(Object.entries(car));




//  -------------------------------------------------------------------------------- 

// 4

// const persons={
//     firstName : "chintan",
//     lastName : "harkhani",
//     age : 16,
//     eyeColor : 'brown'
// }

// console.log(Object.entries(persons));


// console.log(Object.fromEntries(Object.entries(persons)));

// const car={
//     name: "tesla",
//     model : 5005,
//     color : "black",
//     tyres : 4
// }

// console.log(car);

// console.log(Object.entries(car));


// console.log(Object.fromEntries(Object.entries(car)));


//  -------------------------------------------------------------------------------- 


//5 
// const car={
//     name: "tesla",
//     model : 5005,
//     color : "black",
//     tyres : 4
// }

// console.log(car.hasOwnProperty("city"));  // return false 
// console.log(car.hasOwnProperty("name"));   // return true

// console.log(Object.freeze(car));

// car.passing="surat"

// console.log(car);



// const person={
//     name : "mihir",
//     roll_no : 3,
//     course : "full_stack"
// }

// console.log(person.hasOwnProperty("name"));

// console.log(Object.freeze(person));  // not add and update any property


// person.study="12th"

// console.log(person);

// ------------------------------------------------------------------------------- 


// class 

// const car={
//     name: "tesla",
//     model : 5005,
//     color : "black",
//     tyres : 4
// }

// console.log(Object.keys(car));

// console.log(Object.values(car));

// console.log(Object.entries(car));

// console.log(Object.fromEntries(Object.entries(car)));

// car.name="volvo";

// console.log(car);

// console.log(Object.freeze(car));

// car.name="volvo";

// console.log(car);

// console.log(car.hasOwnProperty("color"));













//  -------------------------------------------------------------------------------- 


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

console.log(institues); 



let ans=institues.map((v)=> {
    return {
        name : v.name,
        seat : [Object.fromEntries(Object.entries(v.seat[0]).filter(([key ,v1] ,i) => v1 > 0))]
    }
}).
filter((v2) => Object.keys(v2.seat[0]).length > 0) 

console.log(ans);














