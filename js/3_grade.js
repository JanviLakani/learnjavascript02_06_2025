
let per=parseInt(prompt("please enter your per : "));


let grade = '';


if (per >= 91 && per <= 100) {
    grade = 'A';
} else if ( per >= 81  && per <91 ) {
    grade = 'B';
} else if (per >= 71 && per <81) {
    grade = 'C';
} else if (per >= 61 && per < 71) {
    grade = 'D';
} else if (per >= 40 && per < 61) {
    grade = 'E'
} else {
    grade ="you are fail";
}


console.log(per);
console.log("your grade is : " , grade);
