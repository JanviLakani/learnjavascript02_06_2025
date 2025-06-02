
let cgpl=parseFloat(prompt("please enter your CGPL : "));
let cast=prompt("please enter your cast : ");
let fees=parseInt(prompt("please enter your collage fees : "));

console.log(cgpl);
console.log(cast);
console.log(fees);

let grade;
let sch;

if (cgpl <= 10 && cgpl >= 9) {
    grade = 'A';
} else if (cgpl < 9 && cgpl >= 8.5) {
    grade = 'B';
} else if (cgpl < 8.5 && cgpl >= 8) {
    grade = 'C';
} else if (cgpl < 8 && cgpl >= 7.5) {
    grade = 'D';
} else if (cgpl <= 7.5 && cgpl > 0) {
    grade = 'E';
} else {
    grade = 'F';
}
// console.log("fees",fees);
// console.log("grade",grade);

if (grade == 'F') {
    console.log("INVELID CGPL");  
} else {
    console.log("YOUR GRADE IS :",grade);  

    if (grade == 'A' || grade == 'B') {

        switch (cast) {
            case 'O':
            console.log("no sch BECAUSE YOUR CAST IS OPEN CATEGARY: ");
            break;

            case 'o':
            sch=fees*0.25;
            break;

            case 'S' :
            sch=fees*0.50;   
            break;
            
            case 's' :
            sch=fees*1;
            break;

            default:
            console.log("cast not valid");
            break;

            
            
        }
        // if (cast == 'O') {
        //     sch=0;
        // } else if ( cast == 'o') {
        //     sch=fees*0.25;
        // } else if (cast == 'S') {
        //     sch=fees*0.50;
        // } else if (cast == 's') {
        //     sch=fees*1;
        // }

        console.log("your scholarship is : ",sch);
        

    } else {
        console.log("your grade is below B");
        
    }
}