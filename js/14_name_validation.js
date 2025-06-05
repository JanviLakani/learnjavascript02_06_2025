
function handleonsubmit(){

    event.preventDefault();
   let name=document.nameform.fname.value;

   console.log(name);

   if (name == "") {

    document.getElementById("demo").innerHTML="please enter your name :"

   } else {

    let result=/^[a-zA-Z ]{2,30}$/;


    if (result.test(name)) {
         document.getElementById("demo").innerHTML=""
    } else {
         document.getElementById("demo").innerHTML="please enter velid name"
    }

   }

   
   
}