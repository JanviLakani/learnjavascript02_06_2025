
let salary=parseInt(prompt("please neter your salary : "));

console.log(salary);


let s1=0; s2=0; s3=0; s4=0; s5=0; s6=0;

if (salary > 300000 && salary <= 600000) {
    s2 = 300000 * 0.05; 
} else if (salary > 600000 && salary <= 900000) {
    s2=300000*0.05;
    s3=(salary-600000)*0.10; 
} else if (salary > 900000 && salary <= 1200000) {
    s2=300000*0.05;
    s3=300000*0.10;
    s4=(salary-900000)*0.15;
} else if (salary > 1200000 && salary <= 1500000) {
    s2=300000*0.05;
    s3=300000*0.10;
    s4=300000*0.15;
    s5=salary-1200000*0.20;
} else if (salary > 1500000) {
    s2=300000*0.05;
    s3=300000*0.10;
    s4=300000*0.15;
    s5=300000*0.20;
    s5=(salary-1500000)*0.30;
}


let totaltax;

totaltax=s1+s2+s3+s4+s5+s6;

console.log("income tax slab 1" ,s1);
console.log("income tax slab 2" ,s2);
console.log("income tax slab 3" ,s3);
console.log("income tax slab 4" ,s4);
console.log("income tax slab 5" ,s5);
console.log("income tax slab 6" ,s6);
console.log("total tax is ", totaltax);
