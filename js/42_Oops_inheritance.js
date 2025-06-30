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

// class RBI {
//   rate;

//   setBaseRate(r) {
//     this.rate = r;

//     console.log("RBI rate is ", this.rate);
//   }
// }

// class SBI extends RBI {
//   getROI() {
//     let sbiRate = this.rate + 2.1;

//     console.log("SBI rate is >>>>>> :", sbiRate);
//   }
// }

// class BOB extends RBI {
//   getROI() {
//      let bobRate = this.rate + 2.2;

//     console.log("BOB rate is  :", bobRate);
//   }
// }

// class ICICI extends RBI {
//   getROI() {
//     let iciciRate = this.rate + 2.3;

//     console.log("ICICI rate is :", iciciRate);
//   }
// }

// const s1 = new SBI();
// s1.setBaseRate(3.1);
// s1.getROI();

// const s2=new BOB();
// s2.setBaseRate(3.1);
// s2.getROI();

// const s3=new ICICI();
// s3.setBaseRate(3.1);
// s3.getROI();

// _____________________________________________________ 


class Animal{

    name;
    age;

    set_value(name , age){
        this.name=name;
        this.age=age

        console.log("animal name is" , this.name);
        console.log("animal age is " , this.age);    
    }

}

class Zebra extends Animal{
    showinfo(){
      
        // console.log("animal name", this.name );
        // console.log("animal age" , this.age);
        console.log("place of origin", "Africa");
        console.log("zebra eat" , "grass");
        
        
      
    }
}

class Lion extends Animal{
      showinfo(){
        
        // console.log("animal name" , this.name );
        // console.log("animal age" , this.age);
        console.log("place of origin " , "gir forest");
        console.log("lion eat" , "meat");
        
        
      
    }
}

const a1= new Zebra();
a1.set_value("zibra",12);
a1.showinfo();

const a2=new Lion();
a2.set_value("line" ,18);
a2.showinfo();

// ______________________________________________________________ 

// Q1. What does a class represent in JavaScript?
// A) A CSS rule
// B) A blueprint for creating objects
// C) A loop structure
// D) A data type


//  Q2. How do you create an object from a class called Person?
// A) const p = Person();
// B) const p = new Person();
// C) Person p = new Person();
// D) p = make(Person);


// Q3. Which keyword is used for inheritance in JavaScript?
// A) inherit
// B) extends
// C) super
// D) prototype

// class Animal {
//   name = "Tiger";
// }
// const a = new Animal();
// console.log(a.name);

// A) Tiger
// B) name
// C) undefined
// D) Error


// What does this.name refer to inside a class?
// A) The parent class
// B) Global variable
// C) The class name
// D) The current object’s name property

// Q9. Which keyword is used in child class to call the parent class constructor?
// A) parent()
// B) this()
// C) super()
// D) extends()


// Which line correctly defines a class named Animal?
// A) let Animal = function() {}
// B) class Animal {}
// C) object Animal()
// D) new class Animal {}


//  In inheritance, what is passed from parent to child?
// A) Only constructors
// B) Only name and age
// C) Properties and methods
// D) Only static variables

// Q4. What does the new keyword do?
// A) It creates a new class
// B) It defines a method
// C) It creates a new object from a class
// D) It destroys an object

// class student{  int marks;  };
// class topper:public student{  int age;  topper(int age){ this.age=age; } };
// a) Encapsulation and Inheritance
// b) Inheritance and polymorphism
// c) Polymorphism
// d) Inheritance

// Answer: a
// Explanation: Encapsulation is indicated by use of classes.
//  Inheritance is shown by inheriting the student class into 
//  topper class. Polymorphism is not shown here because we have 
//  defined the constructor in the topper class but that doesn’t mean
//   that default constructor is overloaded.


// On what basis is it determined, when a variable comes into existence in memory? 

// a) data type 
// b) storage class
// c) scope
// d) all of the above

// ans b) storage class :-  A variable that comes into existence in memory is determined by storage class.


// Select the following which shows the correct constructor. 
// a)  ()class_name
// b) ()-class_name
// c) class_name() 
// d) ~class_name() 

// ans c) class_name() :- is the correct constructor.


// When is the object created with a new keyword? 

// a)  at run time
// b) at compile time
// c) depend on the code
// d) none

// Explanation - A) The object created with a new keyword during run-time. 

// a)  
// b)
// c) 
// d) 

// 1. What is the primary goal of Object-Oriented Programming (OOP) in JavaScript?  
// a) To make the code shorter and more concise. 
// b) Organize code into classes and objects. 
// c) To execute code faster than procedural programming. 
// d) To eliminate the need for functions. 

// ans :- b) Organize code into classes and objects.

// 2. What is a class in JavaScript? 
// a) A built-in object provided by the JavaScript runtime. 
// b) A blueprint or template for creating objects with shared properties and methods. 
// c) A single function used to define the behavior of an object. 
// d) A reserved keyword used to declare variables. 

// ans :- b ) A blueprint or template for creating objects with shared properties and methods. 
// A class in JavaScript is a blueprint or template that defines the structure 
// and behavior of objects. It serves as a prototype for creating 
// instances (objects) with shared properties and methods.


// 4. Which keyword is used to refer to the current instance of a class inside its methods? 
// a) self 
// b) this 
// c) it 
// d) current 

// The this keyword is used to refer to the current instance of a class inside its methods.
//  It allows access to the object's properties and methods.







// 6. What is the purpose of the constructor method in a class? 
// a) To create new instances of the class. 
// b) To define class properties. 
// c) To create private variables. 
// d) To execute code when the class is inherited. 

//  ans :- a) To create new instances of the class. 
// The constructor() method is a special method inside a class.
// Jab bhi aap new ClassName() likhte ho, constructor automatically call hota hai.
// Iska kaam hai:
// Object banate waqt initial values set karna
// Class ke properties ko value dena


// What is the concept of "inheritance" in OOPS? 
// a) The process of hiding the implementation details of an object. 
// b) The process of defining multiple constructors for a class. 
// c) The process of creating a new class from an existing class, inheriting its properties and methods. 
// d) The process of modifying the internal state of an object. 


// ans  c) The process of creating a new class from an existing class, inheriting its properties and methods.

// Inheritance allows a new class (subclass) to inherit properties and methods from an
//  existing class (superclass), promoting code reusability and hierarchy.


// 8. How do you implement inheritance in JavaScript classes? 
// a) Using the extends keyword and specifying the parent class. 
// b) Using the inherits keyword and specifying the parent class. 
// c) Using the super() method to inherit properties from the parent class. 
// d) Using the inheritFrom keyword and specifying the parent class. 

// ans  a) Using the extends keyword and specifying the parent class. 

// In JavaScript, you implement inheritance by using the extends keyword in the class 
// declaration of the subclass, followed by the parent class name.




// https://www.sanfoundry.com/1000-object-oriented-programming-oops-questions-answers/#google_vignette 

// https://www.javaguides.net/2023/07/javascript-object-oriented-programming.html 

