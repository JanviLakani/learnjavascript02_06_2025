
function validateForm(){

    event.preventDefault();

    // const name =document.contactForm.name.value;
    // const email=document.contactForm.email.value;
    // const mobile=document.contactForm.mobile.value;
    const country=document.contactForm.country.value;
    const hobbies=document.contactForm.hobbies;

    // console.log(name);
    // console.log(email);
    // console.log(mobile);
    // console.log(hobbies[0].checked);

    console.log(country);
    console.log(hobbies);
    
    
    
    // _____________________________________________________name 

    // if (name == "") {
    //     document.getElementById("nameErr").innerHTML="enter your name"
    // } else {
    //     const regex=/^[a-zA-Z ]{2,30}$/;

    //     if (regex.test(name)) {
    //         document.getElementById("nameErr").innerHTML=""
    //     } else {
    //          document.getElementById("nameErr").innerHTML="please enter velid mobile number"
    //     }
    // }

    // ____________________________________________________email 

    // if(email == "") {
    //     document.getElementById("emailErr").innerHTML="enter your email id"
    // } else {
    //     const regex1 =/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    //     if(regex1.test(email)) {
    //          document.getElementById("emailErr").innerHTML="";
    //     } else {
    //         document.getElementById("emailErr").innerHTML="please enter                                                                                                                                  velid email"
    //     }
    // }

    // ________________________________________________________ 

    // use regular expressions .

    // __________________________________________________________ 

    // if (mobile == "") {
    //     document.getElementById("mobileErr").innerHTML="enter your mobil number"
    // } else {
    //     const regex2 =/^[7-9][0-9]{9}$/;

    //     if(regex2.test(mobile)) {
    //         document.getElementById("mobileErr").innerHTML="";
    //     } else {
    //         document.getElementById("mobileErr").innerHTML="please enter velid email"
    //     }
    // }

    // _________________________________________________________ 

    // not use regular expression ____ email validation


    // if (mobile == "") {
    //     document.getElementById("mobileErr").innerHTML="enter your mobile number"
    // } else{
    //     if((isNaN(mobile)) || (mobile.length != 10 )) {
    //         document.getElementById("mobileErr").innerHTML="enter your velid mobile number"
    //     } else {
    //         document.getElementById("mobileErr").innerHTML="";
    //     }
    // }

    // _____________________________________________________ hobbies

    let hobbiescounter=0;

    for (let i=0; i<hobbies.length; i++) {

        if (hobbies[i].checked) {
            hobbiescounter++;
        } 

    }

    if (hobbiescounter < 2) {
        document.getElementById("hobbyErr").innerHTML="please enter minimum 2 hobby";
    } else {
        document.getElementById("hobbyErr").innerHTML="";
    }

    const pass=document.getElementById("pass").value

    // ________________________________________________________ password

    console.log(pass);

    if(pass == "") {
        document.getElementById("geterror").innerHTML="please enter your password"
    } else {
         let passregex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

         if(passregex.test(pass)) {
            document.getElementById("geterror").innerHTML=""
         } else {
            document.getElementById("geterror").innerHTML="please enter your velid password"
         }
    } 
    

    // _________________________________________________ OTHER 

    const con=document.getElementById("country1").value;
    console.log(con);

    if(con == "0") {
         alert("select country");
        return false;
       
    } else {
        return true
    }
    





    
    

}