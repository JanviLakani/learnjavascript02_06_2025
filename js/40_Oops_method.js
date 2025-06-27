// // object

// let car = {
//     brand : "volvo",
//     color : "red",
//     start : function(){
//        console.log("car started");

//     }

// }

//  console.log(car.brand);        // "valvo"
//  console.log(car.start());     // ans car started

// let person = {
//     name : "sima",
//     age : 22,
//     show : function(){
//         console.log("my name is " + this.name  + " my age is " + this.age) ;

//     }
// }

// person.show()   // ans :-  my name is sima my age is 22

// class

// class Person {
//     constructor( name , age) {
//         this.name = name;
//         this.age = age;
//     }

//     showdata(){
//         console.log(`${this.name} age is ${this.age}`);

//     }
// }

// let p1=new Person("ravi",22);
// let p2=new Person("mina",20);
// let p3=new Person("mahi" ,15);

// p1.showdata();
// p2.showdata();
// p3.showdata();

// -------------------

// let people=[
//     new Person("ravi",22),
//     new Person("diya",23),
//     new Person("mina",24),
//     new Person("kajal",27),
//     new Person("ravina",20),

// ]

// for(let p of people) {
//    p.showdata();

// }

// ---------------------------------------------

// class car{
//     constructor(name ,color){
//         this.name=name;
//         this.color=color;
//     }

//     show(){
//         console.log(`car name is ${this.name} and car color is ${this.color}`);

//     }
// }

// let c1=new car("volvo","black");
// let c2=new car("kia","white")

// c1.show();
// c2.show();

// -----------------------------------------------------

// 3 Inheritance

// parent class

// class Person {
//     constructor(name , age) {
//         this.name = name;
//         this.age =age;

//     }

//     showdata(){
//         console.log(`${this.name} is ${this.age} years old `);

//     }
// }

// class student extends Person{
//     constructor(name ,age , grade) {
//     super(name ,age);
//     this.grade=grade;
//     }

//     show(){
//         console.log(`${this.name} is in grade ${this.grade}`);

//     }
// }

// let p1=new student("ravi" , 16 ,"10th");

// p1.show()
// p1.showdata()

// _______________________________________________________

// class employee{
//     constructor(name , salary){
//         this.name=name;
//         this.salary=salary;
//     }

//     showdata(){
//         console.log(`employee name is ${this.name} and his salary is ${this.salary}`);

//     }
// }

// //  // let e1 =new employee("rihan",20000);

// // // e1.showdata();

// class manager extends employee{
//     constructor(name,salary ,department){
//         super(name ,salary );
//         this.department=department;
//     }

//     mangeteam(){
//         console.log(`${this.name} is manage a ${this.department} department to company`);

//     }
// }

// let p2=new manager("siya",20000 ,"sales");

// p2.showdata();  // ans employee name is siya and his salary is 20000
// p2.mangeteam();  // siya is manage a sales department to company

// ------------------------------------------------------------

// Encapsulation

// class Person {
//     #age;

//     constructor(name , age) {
//         this.name=name;
//         this.age=age;

//     }

//     getage(){
//         return this.#age;
//     }

//     setage(newAge){
//         if(newAge > 0 && newAge < 150) {
//             this.#age= newAge;
//         } else {
//             console.log("invelid age");

//         }
//     }

//     showDetails(){
//         console.log(`${this.name} is ${this.age} years old`);

//     }
// }

// let p1 = new Person("Ravi", 25);
// p1.showDetails();

// p1.setage(99);
// console.log(p1.getage());

// p1.setage(-5);
// console.log(p1.getage());

// ----------------------------------------------------------

// class bankAccount {
//   #balance;

//   constructor(acountholder, initialBalance) {
//     this.acountholder = acountholder;
//     this.#balance = initialBalance;
//   }

//   // Deposit money (safe)

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       console.log(`deposit ${amount}`);
//     } else {
//       console.log("invalid deposit amount");
//     }
//   }

//   // Withdraw money (safe)

//   withdraw(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       console.log(`withdraw ${amount}`);
//     } else {
//       console.log(" Not enough balance in your account");
//     }
//   }

//   //   Check balance

//   getbalance() {
//     return this.#balance;
//   }
// }

// let acc = new bankAccount("ravi", 2000);

// console.log(acc.acountholder); // ravi
// console.log(acc.getbalance()); // 2000

// acc.deposit(500); // deposit 500
// console.log(acc.getbalance()); // 2500

// acc.withdraw(1000); // withdraw 1000
// console.log(acc.getbalance()); // 1500

// acc.withdraw(3000); //  Not enough balance in your account
// acc.deposit(-100); // invalid deposit amount


// ------------------------------------------------------ 

// Polymorphism   // Polymorphism means the same function with different signatures is called many times. 
// It allows methods to do different things based on the object it is acting upon. - behavior 

// class Animal{
//    speak(){
//     console.log("Animal makes a sound");
    
//    }   
// }

// class dog extends Animal{
//     speak(){
//         console.log("Dog barks");
        
//     }
// }

// class cat extends Animal{
//     speak(){
//         console.log("Cat meows");
        
//     }
// }

// const dogs=new dog();  
// dogs.speak();  // Dog barks

// const cats=new cat();
// cats.speak()   // Cat meows


// ------------------------------------------------ 

// Abstraction  

// Sirf important cheez dikhana, aur details chhupana. ex. car fan

// class fan{
//     #poweron = false;

//     turnon(){
//         this.#poweron=true;
//         console.log("fan is on");
        
//     }

//     turnof(){
//         this.#poweron=false;
//         console.log("fan is off");
        
//     }
// }

// let myfan =new fan();

// myfan.turnon();  // fan is on
// myfan.turnof();  // fan is off

// _______________________________________________________________________________________ class Oops Concept 


// class bilding{
//     constructor(w,l){
//         this.width=w;
//         this.length=l;
//     }

//     area(){
//         console.log("bilding arear is :", this.width*this.length);
        
//     }
// }

// const b1=new bilding(150 ,100);

// b1.area();  // ans bilding arear is : 15000


// ______________________________________________________________________________________ 

// 1. WAP to get and display 2 Cars informationusing class and object by including below
// mentioned attributes:
// - car_id
// - car_company_name
// - car_color
// - car_release_year


// class cars{
//     constructor(i){
//        this.car_id=i;
//        this.car_company_name=''
//        this.car_color='';
//        this.car_release_year=''

//     }

//     getcarinfo(){
//        this.car_company_name=prompt(`"plase enter car company name ${this.car_id}"`); 
//        this.car_color=prompt(`"enter car name ${this.car_id}"`);
//        this.car_release_year=prompt(`"car release year ${this.car_id}"`);
//     }

//     displayinfo(){
//         console.log(this.car_id);   
//         console.log(this.car_company_name);
//         console.log(this.car_color);
//         console.log(this.car_release_year);
        
        
//     }
// }

// const c1=new cars(545454);

// c1.getcarinfo();
// c1.displayinfo();

// const c2=new cars(565656);

// c2.getcarinfo();
// c2.displayinfo();

// --------------------------------------------------------- 

// 2. WAP to create a class to read and add two distance. (e.g. 8 feet 16 inch + 4 feet 14 inch = 14 feet 6 inch)   

class distance{
    constructor(){
        this.feet=0;
        this.inch=0;
    }

    distanceinfo(){
        this.feet=parseInt(prompt("please enter feet :"))
         this.inch=parseInt(prompt("please enter inch :"))
    }

    distanceadd(af,ai,bf,fi){
        // console.log(af,ai,bf,fi); 

        totalf=af+bf;
        totali=ai+Bi;

        console.log(totalf);
        console.log(totali);
        
        
        
        

    }

}

const d1=new distance();
d1.distanceinfo();

// console.log(d1.feet,d1.inch); 


const d2=new distance();

d2.distanceinfo()

d2.distanceadd(d1.feet,d1.inch , d2.feet , d2.inch)
























// class car{
//     constructor(cname,color){
//         this.company_name=cname
//         this.color=color;   
//     }

//     display(){
//         console.log(`company name is ${this.company_name} and car color is ${this.color}`);
        
//     }

//     getid(){

//     }
// }

// const c1=new car("royal" ,"black");

// c1.display();