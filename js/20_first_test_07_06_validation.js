function handleonsubmit() {
  // event.preventDefault();

  const age = document.applicationform.age.value;
  const password = document.applicationform.password.value;
  const newpassword = document.applicationform.newpassword.value;
 
   const address = document.applicationform.address.value;
   const profile = document.applicationform.profile.files[0];

   console.log(profile);

   let proerrr = false;


  //1 age
  if (age == "") {
    document.getElementById("ageerr").innerHTML = "please enter your age";
    proerrr=true;

  } else {
    if (age >= 18) {
      document.getElementById("ageerr").innerHTML = "";
    } else {
      document.getElementById("ageerr").innerHTML = "age is must be above 18";
      proerrr=true;
    }
  }

  //2 password
  if (password == "") {
    document.getElementById("passerr").innerHTML = "please enter your password";
    proerrr=true;
  } else {
    // if (isNaN(password)) || (pas)

    let passregex = /^(?=.*[0-8])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (passregex.test(password)) {
      document.getElementById("passerr").innerHTML = "";
    } else {
      document.getElementById("passerr").innerHTML =
        "please enter velid password";
        proerrr=true;
    }
  }

  // 3 new password
  if (newpassword == "") {
    document.getElementById("newpasserr").innerHTML =
      "please enter your new password";
      proerrr=true;
  } else {
    let newpassregex = /^(?=.*[0-8])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    

    if (newpassregex.test(newpassword)) {
     

      if (password == newpassword) {
        document.getElementById("newpasserr").innerHTML = "";
      }else{
         document.getElementById("newpasserr").innerHTML ="newpassword not same as password";
         proerrr=true;
      }
    } else {
      document.getElementById("newpasserr").innerHTML =
        "please enter velid password";
        proerrr=true;
    }
  }

  // _______


  //4 file
  // if (file == "") {
  //   document.getElementById("fileerr").innerHTML = "please select jpg/png file";
  // } else {
  //   document.getElementById("fileerr").innerHTML = "";
  // }

  //5 address

  if (address == "") {
    document.getElementById("addresserr").innerHTML =
      "please enter your address";
      proerrr=true;
  } else {
    const myArray = address.split(" ");

    const addressLength = myArray.length;

    if (addressLength > 3) {
      document.getElementById("addresserr").innerHTML ="address must be only 3 word";
      proerrr=true;
    } else {
      document.getElementById("addresserr").innerHTML = '';
    }
  }


  // if(profile) {
  //   document.getElementById("profileerr").innerHTML="";

  //   if((profile.type === 'image/png' ) || (profile.type === 'image/jpg')) {
  //     document.getElementById("profileerr").innerHTML="";
  //   } else {
  //     document.getElementById("profileerr").innerHTML="please select jpg or png file";
  //   }

  //   if (profile.size <= 1024*1024*2) {
  //     document.getElementById("profileerr").innerHTML="";
  //   } else {
  //     document.getElementById("profileerr").innerHTML="please select file 2mb only";
  //   }

  // } else {
  //   document.getElementById("profileerr").innerHTML="please select file";
  // }



  

  if(profile) {
    document.getElementById("profileerr").innerHTML="";

    if((profile.type === 'image/png' ) || (profile.type === 'image/jpg') || profile.type === 'image/jpg') {
       if (profile.size <= 1024*1024*2)
      document.getElementById("profileerr").innerHTML=""; 
    } else {
      document.getElementById("profileerr").innerHTML="please select jpg or png file";
      proerrr=true;
    }

    // if (profile.size <= 1024*1024*2) {
    //   document.getElementById("profileerr").innerHTML="";
    // } else {
    //   document.getElementById("profileerr").innerHTML="please select file 2mb only";
    // }

  } else {
    document.getElementById("profileerr").innerHTML="please select file";
    proerrr=true;
  }

  console.log(proerrr);
  
  if (proerrr) {
     return false
  } else {
    return true
  }





}



//    let text="learn javascript in month"

//     const myArray = text.split(" ");

//     console.log(myArray);
    

//     const textlength=myArray.length

//     console.log(textlength);
