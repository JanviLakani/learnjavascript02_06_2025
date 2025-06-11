
let x = Math.floor(Math.random() *10);

let y = Math.floor(Math.random() *10);

console.log(y);


document.getElementById("captcha1").innerHTML = x;

document.getElementById("captcha2").innerHTML = y;


function handlesubmit(){


    const useans=parseInt(document.getElementById("num").value)

    fixans=x+y;

    if(useans === fixans) {
        alert ("your ans is correct")
    } else {
        alert("your ans is incorrect")
    }


}