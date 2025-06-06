
function handlesubit(){
    event.preventDefault();
    const email=document.emailform.email.value;

    console.log(email);

    if (email == "") {
        document.getElementById("error").innerHTML="please enter your email";
    } else {
        let regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(email)) {
            document.getElementById("error").innerHTML="";
        } else {
            document.getElementById("error").innerHTML="enter velid gmail !";
        }
         
    }
    
}



