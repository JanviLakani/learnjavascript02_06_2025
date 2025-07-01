
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


// 1. What is the purpose of encapsulation in JavaScript?
// A) To hide object properties
// B) To make variables global
// C) To inherit methods
// D) To create loops


// 2. Which keyword is used to create a private field in JavaScript?
// A) private
// B) #
// C) @
// D) protected

// 3. What will happen if you declare two methods with the same name in a JavaScript class?
// A) Both will execute
// B) Error
// C) Last one overrides the previous
// D) Both are ignored

// 4. Polymorphism in JavaScript is mainly achieved through:
// A) Interfaces
// B) Method overloading
// C) Method overriding
// D) Arrays

// 5. Which access specifier is usually used for data members of a class?
// a) Protected
// b) Private
// c) Public
// d) Default
// View Answer

// Answer: b
// Explanation: All the data members should be made private to ensure the
//  highest security of data. In special cases we can use 
// public or protected access, but it is advised to keep the data members private always.

// 6. Encapsulation protects object’s internal state using:
// A) console.log()
// B) Global variables
// C) Private fields and methods
// D) Inheritance

// 7. Which concept allows a child class to redefine methods of the parent class?
// A) Encapsulation
// B) Abstraction
// C) Polymorphism
// D) Aggregation

// 8. Which among the following represents correct constructor?
// a) –classname()
// b) classname()
// c) ()classname
// d) ~classname()

// 9. Can JavaScript perform method overloading like Java?
// A) Yes
// B) No
// C) Only in ES6
// D) With super()

// 10. Which feature of OOP reduces the use of nested classes?
// a) Inheritance
// b) Binding
// c) Abstraction
// d) Encapsulation
// View Answer

// Answer: a
// Explanation: Using inheritance we can have the security of the 
// class being inherited. The subclass can 
// access the members of parent class. And have more feature than a nested class being use

// 11. Which concept hides data but allows controlled access using methods?
// A) Encapsulation
// B) Inheritance
// C) Polymorphism
// D) Closure

// 12. Which of the following is not a core concept of OOP?
// A) Abstraction
// B) Encapsulation
// C) Polymorphism
// D) Recursion

// 13. Which feature lets objects behave differently based on the context?
// A) Encapsulation
// B) Inheritance
// C) Polymorphism
// D) Looping

// 14. Which of the following is not a property of an object?
// a) Properties
// b) Names
// c) Identity
// d) Attributes
// View Answer

// Answer: b
// Explanation: The names are not property of an object. 
// The identity can be in any form like address or name of object but
// name can’t be termed as only identity of an object. The objects contain
// attributes that define what type of data an object can store.

// 15. In which access should a constructor be defined, so that object of the 
// class can be created in any function?
// a) Any access specifier will work
// b) Private
// c) Public
// d) Protected

// Answer: c
// Explanation: Constructor function should be available to all 
// the parts of program where the object is to be created. Hence it is advised to
//  define it in public access, so that any other function is able to create objects.


// 16. What happens when private field is accessed outside class?
// A) It returns null
// B) It works normally
// C) It throws error
// D) It returns 0

// 17. What is an abstraction in object-oriented programming?
// a) Hiding the implementation and showing only the features
// b) Hiding the important data
// c) Hiding the implementation
// d) Showing the important data

// Explanation:a ) It includes hiding the implementation part and 
// showing only the required data and features to the user. It is done to 
// hide the implementation complexity 
// and details from the user. And to provide a good interface in programming.

// 18. Which best describes abstraction in JS?
// A) Creating new arrays
// B) Hiding details, showing essentials
// C) Using let instead of var
// D) Avoiding bugs

// 19. Which type of members can’t be accessed in derived classes of a base class?
// a) All can be accessed
// b) Protected
// c) Private
// d) Public

// ??????????? 

// Answer: c
// Explanation: The private members can be accessed only inside the base class. 
// If the class is derived by other classes. Those members will not be accessible.
//  This concept of OOP is made to make the members more secure

// 20. Which of the following is an example of encapsulation?
// A) Using if and else
// B) Declaring variables outside class
// C) Using #balance in class
// D) Logging to console

// 21. In method overriding, which method is used at runtime?
// A) Parent
// B) Child
// C) Both
// D) None

// 22. Which feature of OOP is exhibited by the function overriding?
// a) Polymorphism
// b) Encapsulation
// c) Abstraction
// d) Inheritance

// Answer: a
// Explanation: The polymorphism feature is exhibited by function overriding.
//  Polymorphism is the feature which basically defines that same named functions 
//  can have more than one functionalities.

// 23. When OOP concept did first came into picture?
// a) 1980’s
// b) 1995
// c) 1970’s
// d) 1993

// Explanation: OOP first came into picture in 1970’s by Alan and his team. 
// Later it was used by some programming languages and got implemented successfully,
//  SmallTalk was first language to use pure OOP and followed all rules strictly.

// 24. How can you prevent direct access to a variable in class?
// A) Declare it with const
// B) Use # in front
// C) Make it global
// D) Use window

// 25. In encapsulation, which methods give controlled access?
// A) Loops
// B) Getters and Setters
// C) Constructors only
// D) Arrays

// 26. Can a class in JS contain both public and private fields?
// A) No
// B) Yes
// C) Only in ES5
// D) Only functions

// In JavaScript (ES2022 and above), a class can have both public and private fields.
// Public fields are accessible from outside the class.
// Private fields (marked with #) are accessible only within the class.

// 27. Which OOP concept helps in achieving code reusability?
// A) Encapsulation
// B) Abstraction
// C) Inheritance
// D) Polymorphism

// 28. Which of the following supports abstraction best?
// A) Loops
// B) Classes with methods
// C) Alerts
// D) console.log()

// Abstraction in JavaScript means hiding complex logic and showing only
//  the necessary parts to the user.

// 29. How to access the private member function of a class?
// a) Using class address
// b) Using object of class
// c) Using object pointer
// d) Using address of member function

// Answer: d
// Explanation: Even the private member functions can be called outside the class. 
// This is possible if address of the function is known. We can use the address to
//  call the function outside the class.

// 30. Which feature can be implemented using encapsulation?
// a) Polymorphism
// b) Overloading
// c) Inheritance
// d) Abstraction
// View Answer ??????? 

// Answer: d
// Explanation: Data abstraction can be achieved by using encapsulation.
//  We can hide the operation and structure of actual program from the user
//   and can show only required information by the user.

// 31. Which OOP concept allows objects to take many forms?
// A) Abstraction
// B) Inheritance
// C) Polymorphism
// D) Encapsulation

// 32. What is the main goal of encapsulation?
// A) Reusing code
// B) Hiding data and protecting internal state
// C) Implementing loops
// D) Speeding up execution

// 33. What does abstraction mainly do in OOP?
// A) Shows all logic to user
// B) Hides complexity and shows only necessary parts
// C) Adds two numbers
// D) Links child class to parent

// 34. What is it called when a child class gets properties and methods from a parent class?
// A) Encapsulation
// B) Abstraction
// C) Inheritance
// D) Composition

// 35. Which of the following is a real-world example of encapsulation?
// A) TV remote hiding circuit details and exposing buttons
// B) One person acting in different roles
// C) Inheriting traits from parents
// D) Writing two functions with the same name