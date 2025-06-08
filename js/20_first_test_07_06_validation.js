function handleonsubmit() {
  event.preventDefault();

  const age = document.applicationform.age.value;
  const password = document.applicationform.password.value;
  const newpassword = document.applicationform.newpassword.value;
  const file = document.applicationform.file.value;
  const address = document.applicationform.address.value;

  console.log(age, password, newpassword, file, address);

  //1 age
  if (age == "") {
    document.getElementById("ageerr").innerHTML = "please enter your age";
  } else {
    if (age >= 18) {
      document.getElementById("ageerr").innerHTML = "";
    } else {
      document.getElementById("ageerr").innerHTML = "age is must be above 18";
    }
  }

  //2 password
  if (password == "") {
    document.getElementById("passerr").innerHTML = "please enter your password";
  } else {
    // if (isNaN(password)) || (pas)

    let passregex = /^(?=.*[0-8])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (passregex.test(password)) {
      document.getElementById("passerr").innerHTML = "";
    } else {
      document.getElementById("passerr").innerHTML =
        "please enter velid password";
    }
  }

  //3 new password
  if (newpassword == "") {
    document.getElementById("newpasserr").innerHTML =
      "please enter your new password";
  } else {
    let newpassregex = /^(?=.*[0-8])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    

    if (newpassregex.test(newpassword)) {
     

      if (password == newpassword) {
        document.getElementById("newpasserr").innerHTML = "";
      }else{
         document.getElementById("newpasserr").innerHTML ="newpassword not same as password";
      }
    } else {
      document.getElementById("newpasserr").innerHTML =
        "please enter velid password";
    }
  }

  // _______


  //4 file
  if (file == "") {
    document.getElementById("fileerr").innerHTML = "please select jpg/png file";
  } else {
    document.getElementById("fileerr").innerHTML = "";
  }

  //5 address

  if (address == "") {
    document.getElementById("addresserr").innerHTML =
      "please enter your address";
  } else {
    const myArray = address.split(" ");

    const addressLength = myArray.length;

    if (addressLength > 3) {
      document.getElementById("addresserr").innerHTML ="address must be only 3 word";
    } else {
      document.getElementById("addresserr").innerHTML = '';
    }
  }


}

//    let text="learn javascript in month"

//     const myArray = text.split(" ");

//     console.log(myArray);
    

//     const textlength=myArray.length

//     console.log(textlength);
