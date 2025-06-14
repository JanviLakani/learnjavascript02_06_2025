



 let studentatt=0

function handleSubmit(){

   event.preventDefault();

   const student=parseInt(document.getElementById("student").value);

   console.log(student);

   

   if (student>0) {

    for(let i=0; i<student; i++) {       
         studentatt++;     
    }
   
   }

   document.getElementById("showstudent").innerHTML=studentatt;

}




function handleSubmitbtn(){
event.preventDefault();

const pre=document.getElementById("pre").value;
const ab=document.getElementById("ab").value;
console.log(pre,ab);





}