
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

class Person {
    #age;

    constructor(name , age) {
        this.name=name;
        this.age=age;

    }

    getage(){
        return this.#age;
    }

    setage(newAge){
        if(newAge > 0 && newAge < 150) {
            this.#age= newAge;
        } else {
            console.log("invelid age");

        }
    }

    showDetails(){
        console.log(`${this.name} is ${this.age} years old`);

    }
}

let p1 = new Person("Ravi", 25);
p1.showDetails();

p1.setage(99);
console.log(p1.getage());

p1.setage(-5);
console.log(p1.getage());

// __________________________________________________________________________ 



class bankAccount {
  #balance;

  constructor(acountholder, initialBalance) {
    this.acountholder = acountholder;
    this.#balance = initialBalance;
  }

  // Deposit money (safe)

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`deposit ${amount}`);
    } else {
      console.log("invalid deposit amount");
    }
  }

  // Withdraw money (safe)

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`withdraw ${amount}`);
    } else {
      console.log(" Not enough balance in your account");
    }
  }

  //   Check balance

  getbalance() {
    return this.#balance;
  }
}

let acc = new bankAccount("ravi", 2000);

console.log(acc.acountholder); // ravi
console.log(acc.getbalance()); // 2000

acc.deposit(500); // deposit 500
console.log(acc.getbalance()); // 2500

acc.withdraw(1000); // withdraw 1000
console.log(acc.getbalance()); // 1500

acc.withdraw(3000); //  Not enough balance in your account
acc.deposit(-100); // invalid deposit amount

