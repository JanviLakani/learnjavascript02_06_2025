// Inheritance  :-  Child apne parents se kuch cheezein inherite  karta hai. :-

// Waise hi class bhi dusri class se methods aur properties le sakti hai.

// class Person{
//     constructor(name, age) {
//         this.name=name;
//         this.age=age;
//     }

//     data(){
//         console.log(`${this.name} is ${this.age} years old`);

//     }
// }

// // extends :- Child class ko Parent class se connect karta hai
// // super() :- Parent class ka constructor call karta hai

// class Student extends Person{
//     constructor(name , age , grade) {
//         super(name ,age);
//         this.grade=grade;
//     }

//     showdata(){
//         console.log(`${this.name} grade is  ${this.grade}`);

//     }
// }

// let g1=new Student("ravina" , 16 , "A")

// g1.data();
// g1.showdata();

//  _______________________________________________________________________________________

// class Employee{
//     constructor(name, salary) {
//         this.name=name;
//         this.salary=salary;
//     }

//     showdata(){
//             console.log(`employee name is ${this.name} and his salary is ${this.salary}`);
//     }
// }

// class Manager extends Employee{
//     constructor(name, salary,departement) {
//     super(name,salary);
//     this.dapartement=departement;
//     }

//     manageteam(){
//         console.log(`${this.name} is manage a ${this.dapartement} department`);

//     }
// }

// let e1=new Manager("taniya" , 30000 , "Marketing");

// e1.showdata();
// e1.manageteam();

// _______________________________________________________________________________________________________

// Encapsulation  :- Jisse data ko hide, protect aur control kiya ja sake

// ATM Machine:
// Aapko sirf buttons dikhte hain: "Withdraw", "Check Balance"

// Andar ka pura system (cash handling, security, network) chhupa hota hai

// class Person1{
//     constructor (name ,age) {
//         this.name=name;
//         this.age=age;
//     }

//     data(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`);

//     }
// }

// let p=new Person1('riya' , -5);
// p.data();  /// ans  Galat value assign kar di

// ___________________________________________________________________________________________________

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

// // __________________________________________________________________________

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

// __________________________________________________________

// Inheritance

// class Student {
//   roll_no;
//   name;
//   address;

//   constructor(r, n, a) {
//     this.roll_no = r;
//     this.name = n;
//     this.address = a;
//   }

//   basicinfo() {
//     console.log("roll no", this.roll_no);
//     console.log("name", this.name);
//     console.log("address", this.address);
//   }
// }

// class Course extends Student {
//   course_name;
//   course_duration;
//   course_fees;

//   constructor(r, n, a, cn, cd, cf) {
//     super(r, n, a);
//     this.course_name = cn;
//     this.course_duration = cd;
//     this.course_fees = cf;
//   }

//   courseinfo() {
//     this.basicinfo();

//     console.log("course name", this.course_name);
//     console.log("course duration", this.course_duration);
//     console.log("course fees", this.course_fees);
//   }
// }

// const c1 = new Course(10, "vivek", "surat", "full_stack", "12 month", 85000);
// c1.courseinfo();

// _________________________________________________________________

// 4. WAP to convert given degree celsius temperature into fahrenheit and convert that fahrenheit temperature
// into kelvin by implementing multilevel inheritance:
// Class P -> Class Q -> Class R
// - Class P has following members: temperature attribute in float
// - Class Q has following members: toFehrenheit() method
// - Class R has following members: toKelvin() method

// class P{
//   constructor(t){
//     this.temperature=t;
//   }

// }

// class Q extends P{
//   fahrenheit;
//   constructor(t){
//     super(t)

//   }

//   toFehrenheit(){

//     this.fahrenheit=this.temperature*1.8+32
//     console.log("fahrenheit" ,this.fahrenheit );

//   }

// }

// class R extends Q{
//   Kelvin;

//   constructor(t){
//     super(t)
//   }

// toKelvin(){
// this.Kelvin=(32*this.fahrenheit - 32) * 5/9 + 273.15
// console.log("Kelvin" ,this.Kelvin);

// }

// }

// const r1=new R(16);
// console.log(r1.temperature);

// r1.toFehrenheit();
// r1.toKelvin();\

// ____________________________________________________________________

// 5. WAP to print rate of interests of different banks using hierarchical inheritance:-
//  Class RBI -> Class SBI

// - Class RBI -> Class BOB
// - Class RBI -> Class ICICI
// - inherit rate attribute and getROI() method in all child classes

class RBI {
  rate;

  get_rate(r) {
    this.rate = r;

    console.log("RBI rate is ", this.rate);
  }
}

class SBI extends RBI {
  getROI() {
    let get_ROI_rate = this.rate + 2.1;

    console.log("SBI rate is >>>>>> :", get_ROI_rate);
  }
}

class BOB extends RBI {
  getROI() {
     let get_BOB_rate = this.rate + 2.2;

    console.log("BOB rate is ++++ :", get_BOB_rate);
  }
}

class ICICI extends RBI {
  getROI() {
    let get_ICICI_rate = this.rate + 2.3;

    console.log("ICICI rate is :", get_ICICI_rate);
  }
}

const s1 = new SBI();
s1.get_rate(3.1);

s1.getROI();

const s2=new SBI();
s2.get_rate(3.1);
s2.getROI();

// const s3 = new SBI()
// s3.get_rate(3.1);
// s3.getROI();

// https://www.sanfoundry.com/1000-object-oriented-programming-oops-questions-answers/#google_vignette 

// fahrenheit temperature into kelvin 

// temperature into fahrenheit formula 
