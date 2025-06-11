
const c1=Math.floor(Math.random()*10);
const c2=Math.floor(Math.random()*10);

// console.log(c1,c2);

document.getElementById("num1").innerHTML=c1;
document.getElementById("num2").innerHTML=c2;

function handleSubmit() {
    event.preventDefault();

    // console.log("jhjjhjh");  // function check karva answer aave chhe

    captchaans=c1+c2;

    const useranswer=parseFloat(document.getElementById("ans").value);

    // parseInt ni place pr parseFloat levu km ke parseInt ma user 
    // jo point ma answer add karshe to parseint tene pong vgr j 
    // ganshe  to e ans correct aavshe tethi parsefloat levu 

    // console.log(useranswer);


    if(useranswer === captchaans) {
        alert ("your answer is correct")
    } else {
        alert ("your ans is wrong")
    }

    
    
    
}