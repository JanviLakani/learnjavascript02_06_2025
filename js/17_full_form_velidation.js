
function validateForm(){

    event.preventDefault();

    const name =document.contactForm.name.value;
    const email=document.contactForm.email.value;
    const mobile=document.contactForm.mobile.value

    console.log(name);
    console.log(email);
    console.log(mobile);
    
    

    if (name == "") {
        document.getElementById("nameErr").innerHTML="enter your name"
    } else {
        const regex=/^[a-zA-Z ]{2,30}$/;

        if (regex.test(name)) {
            document.getElementById("nameErr").innerHTML=""
        } else {
             document.getElementById("nameErr").innerHTML="please enter velid mobile number"
        }
    }

    if(email == "") {
        document.getElementById("emailErr").innerHTML="enter your email id"
    } else {
        const regex1 =/^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(regex1.test(email)) {
             document.getElementById("emailErr").innerHTML="";
        } else {
            document.getElementById("emailErr").innerHTML="please enter                                                                                                                                  velid email"
        }
    }

    if (mobile == "") {
        document.getElementById("mobileErr").innerHTML="enter your mobil number"
    } else {
        const regex2 =/^[7-9][0-9]{9}$/;

        if(regex2.test(mobile)) {
            document.getElementById("mobileErr").innerHTML="";
        } else {
            document.getElementById("mobileErr").innerHTML="please enter velid email"
        }
    }




    

}