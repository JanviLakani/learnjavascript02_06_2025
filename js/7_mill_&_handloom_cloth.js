
let type=prompt("please enter your shopping type : ");

console.log(type);

let amount=parseInt(prompt("please enter your amount : "));
console.log(amount);

let dis;

switch(type) {


    case 'm':
    case 'M': 

        if (amount >= 0 && amount <= 100) {
            dis=0;
        } else if (amount >= 101 && amount <= 200) {
            dis = amount*0.05;
        } else if (amount >= 201 && amount <= 300) {
            dis = amount*7.50;
        } else {
            dis=amount*0.10;
        }
    break;

    case 'h' :
    case 'H' :
         if (amount >= 0 && amount <= 100) {
            dis = amount*0.5;
         } else if (amount >= 101 && amount <= 200) {
            dis = amount*7.50;
         } else if (amount >= 201 && amount <= 300) {
            dis = amount*0.10;
         } else {
            dis= amount*0.15;
         }
    break;

    default: 
         console.log("invalid input");
}

console.log("your dis is : ",dis);


if (dis > 0) {
    console.log("valid for dis count : ");
    
}