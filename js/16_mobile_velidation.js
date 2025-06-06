
function handleonsubmit(){
    event.preventDefault();
    let number=document.numberform.number.value;

    console.log(number);

    if (number == "") {
        document.getElementById("error").innerHTML="enter your number"
    } else {
        let expression=/^[6-9]\d{9}$/

        if (expression.test(number)) {
             document.getElementById("error").innerHTML=""
        } else {
            document.getElementById("error").innerHTML="eter velid number"
        }
    }
    
}