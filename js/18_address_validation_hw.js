
function handleonsubmit(){
    // event.preventDefault();

    const age=document.applicationform.age.value;
    const mobile=document.applicationform.mobile.value;
    const password=document.applicationform.password.value;
    const newpassword=document.applicationform.newpassword.value;
    const profile=document.applicationform.profile.files[0];

    // console.log(age ,mobile , password ,newpassword);

    // console.log(profile);

    let profileerr =false;
    

    // 1 age validation 

    if (age == "") {
        document.getElementById("ageerr").innerHTML="please enter your age";
        profileerr=true;
    } else {
        if(age >= 18) {
             document.getElementById("ageerr").innerHTML="";
        }else{
             document.getElementById("ageerr").innerHTML="your age is must be above 18";
             profileerr=true;
        }
    }
    
    // 2 mobile validation
    if (mobile == '') {
        document.getElementById("numerr").innerHTML="please enter your number";
         profileerr=true;
        

    } else {
        if((isNaN(mobile)) || (mobile.length != 10)) {
            document.getElementById("numerr").innerHTML="please enter velid number";
             profileerr=true;
        } else {
            document.getElementById("numerr").innerHTML="";
        }
    }

    // // 3 password validation

    if(password == "") {
        document.getElementById("passerr").innerHTML="please enter your passwor";
         profileerr=true;

    } else {
        const passregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(passregex.test(password)) {
             document.getElementById("passerr").innerHTML="";
        } else {
             document.getElementById("passerr").innerHTML="please be use special symbols";
              profileerr=true;
        }
    }

    // // 4 newpassword validation 

    if (newpassword == '') {
         document.getElementById("newpasserr").innerHTML="please enter your newpasswor";
          profileerr=true;
    } else {
          const newpassregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(newpassregex.test(password)) {
            if(password === newpassword) {
                 document.getElementById("newpasserr").innerHTML="";
            } else {
                document.getElementById("newpasserr").innerHTML="please enter your pass as same as password";
                 profileerr=true;
            }
             
        } else {
             document.getElementById("newpasserr").innerHTML="please be use special symbols";
              profileerr=true;
        }
    }

    // 5 file

    if(profile) {
        //  document.getElementById("fileerr").innerHTML="";

         if((profile.type === 'image/png') || (profile.type === 'image/jpej')) {
             document.getElementById("fileerr").innerHTML="";
         } else {
             document.getElementById("fileerr").innerHTML="please select png file";
              profileerr=true;
         }

         if(profile.size <= 1024*1024*24) {
             document.getElementById("fileerr").innerHTML="";
         } else {
             document.getElementById("fileerr").innerHTML="plase select file size below 2mb";
              profileerr=true;
         }
      
    } else {
        document.getElementById("fileerr").innerHTML="please select file";
         profileerr=true;
    }

    console.log(profileerr);
    

    if( profileerr) {
        return false;
    } else {
        return true;
    }

}