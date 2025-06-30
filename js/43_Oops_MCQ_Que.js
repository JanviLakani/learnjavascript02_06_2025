
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

// Q4 class Animal {
//   name = "Tiger";
// }
// const a = new Animal();
// console.log(a.name);

// A) Tiger
// B) name
// C) undefined
// D) Error


// Q5 What does this.name refer to inside a class?
// A) The parent class
// B) Global variable
// C) The class name
// D) The current object’s name property

// Q6. Which keyword is used in child class to call the parent class constructor?
// A) parent()
// B) this()
// C) super()
// D) extends()


// Q7 Which line correctly defines a class named Animal?
// A) let Animal = function() {}
// B) class Animal {}
// C) object Animal()
// D) new class Animal {}


//  Q8 In inheritance, what is passed from parent to child?
// A) Only constructors
// B) Only name and age
// C) Properties and methods
// D) Only static variables

// Q9 What does the new keyword do?
// A) It creates a new class
// B) It defines a method
// C) It creates a new object from a class
// D) It destroys an object

// Q10 class student{  int marks;  };
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


// Q11 On what basis is it determined, when a variable comes into existence in memory? 

// a) data type 
// b) storage class
// c) scope
// d) all of the above

// ans b) storage class :-  A variable that comes into existence in memory is determined by storage class.


//Q12 Select the following which shows the correct constructor. 
// a)  ()class_name
// b) ()-class_name
// c) class_name() 
// d) ~class_name() 

// ans c) class_name() :- is the correct constructor.


//Q13 When is the object created with a new keyword? 

// a)  at run time
// b) at compile time
// c) depend on the code
// d) none

// Explanation - A) The object created with a new keyword during run-time. 

// a)  
// b)
// c) 
// d) 

// Q14 What is the primary goal of Object-Oriented Programming (OOP) in JavaScript?  
// a) To make the code shorter and more concise. 
// b) Organize code into classes and objects. 
// c) To execute code faster than procedural programming. 
// d) To eliminate the need for functions. 

// ans :- b) Organize code into classes and objects.

// Q15 What is a class in JavaScript? 
// a) A built-in object provided by the JavaScript runtime. 
// b) A blueprint or template for creating objects with shared properties and methods. 
// c) A single function used to define the behavior of an object. 
// d) A reserved keyword used to declare variables. 

// ans :- b ) A blueprint or template for creating objects with shared properties and methods. 
// A class in JavaScript is a blueprint or template that defines the structure 
// and behavior of objects. It serves as a prototype for creating 
// instances (objects) with shared properties and methods.


// Q16 Which keyword is used to refer to the current instance of a class inside its methods? 
// a) self 
// b) this 
// c) it 
// d) current 

// The this keyword is used to refer to the current instance of a class inside its methods.
//  It allows access to the object's properties and methods.







// Q 17  What is the purpose of the constructor method in a class? 
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


// Q 18 What is the concept of "inheritance" in OOPS? 
// a) The process of hiding the implementation details of an object. 
// b) The process of defining multiple constructors for a class. 
// c) The process of creating a new class from an existing class, inheriting its properties and methods. 
// d) The process of modifying the internal state of an object. 


// ans  c) The process of creating a new class from an existing class, inheriting its properties and methods.

// Inheritance allows a new class (subclass) to inherit properties and methods from an
//  existing class (superclass), promoting code reusability and hierarchy.


// Q 19  How do you implement inheritance in JavaScript classes? 
// a) Using the extends keyword and specifying the parent class. 
// b) Using the inherits keyword and specifying the parent class. 
// c) Using the super() method to inherit properties from the parent class. 
// d) Using the inheritFrom keyword and specifying the parent class. 

// ans  a) Using the extends keyword and specifying the parent class. 

// In JavaScript, you implement inheritance by using the extends keyword in the class 
// declaration of the subclass, followed by the parent class name.

// / Q 20  What will the following code print?

// class Car {
//   drive() {
//     console.log("Driving");
//   }
// }
// let c = new Car();
// c.drive();

// A) Error
// B) drive
// C) Driving
// D) undefined

//  ans // C) Driving


// https://www.sanfoundry.com/1000-object-oriented-programming-oops-questions-answers/#google_vignette 

// https://www.javaguides.net/2023/07/javascript-object-oriented-programming.html 