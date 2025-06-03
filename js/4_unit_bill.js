
let unit=parseFloat(prompt("please enter unit : "));

console.log(unit);

let bill;
let finalbill;

if (unit <= 50) {
    bill = unit * 0.50;
} else if (unit<= 150){
    bill=50*0.50 +(unit - 50) * 0.75;
} else if (unit <= 250) {
    bill= 50*0.50 + 100*0.75 + (unit - 150) * 1.20;
} else if (unit > 250) {
    bill= unit*0.50 + unit*0.75 + unit*1.20 + (unit - 250) * 1.50;
}

finalbill = bill + bill*0.20;

console.log("your bill is : " , bill);
