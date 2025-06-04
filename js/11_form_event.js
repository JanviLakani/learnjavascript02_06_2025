
// form event 

// ********************************************** 

// _______________________________________________________________ 1 

// onfocus and onblur event  1



// function handlefocus(){


//     document.getElementById("fname").style.background="green";
    
// }

// ________________________________________________________ 

function handlefocus(element){


    element.style.background="green";
    
}

function handleblur(element) {
    element.style.background="";
}


// _______________________________________________________________ 2

// onfocus and onblur event  1

function handleonfocuse(element) {
    document.getElementById(element).style.background="yellow";
}

function handleonblur(element) {
    document.getElementById(element).style.background="";
}

// ___________________________________________________________________ 3

//submit   // onchange

function handlesubmit(){

    console.log("submit me");
    
}



function handlechange() {

    const change=document.getElementById("changecontru").value;
    console.log(change);


    const countruname=document.getElementById("fcountry").value;
    console.log(countruname);
    


    
}

