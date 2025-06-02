


// console.log(gender);

let x=10;

console.log(x);

let gender=prompt("please enter your gender");

console.log(gender);


let salary=parseInt(prompt("please enter your salary"));

console.log(salary);

let bonus;

if (salary < 10000 ) {
    if (gender == 'M' || gender == 'm') {
        bonus=(salary*0.02);
    } else if (gender == 'F' || gender == 'f') {
        bonus = (salary * 0.03);
    } else {
        bonus=0;
    }

    income= salary - bonus;

    console.log("your income is : ", income);
    
} else {
    console.log("you are not aligible for bonus : ");
    
}
