
function handleChange(){

  const selcountry=document.getElementById("country").value;

//   console.log(selcountry);
  

  if ( selcountry === 'canada') {
    document.getElementById("bdoc").style.backgroundColor='red';
  } else if(selcountry ==='usa' ) {
    document.getElementById("bdoc").style.backgroundColor='yellow';
  } else if (selcountry === 'germany') {
    document.getElementById('bdoc').style.backgroundColor='green';
  } else if (selcountry === 'uk') {
    document.getElementById('bdoc').style.backgroundColor='lightblue';
  } else {
    document.getElementById('bdoc').style.backgroundColor='white';
  }
}








// background color change karva no 
// hovathi dirct body ne id api chhe

// document.getElementById("bdoc").style.backgroundColor='red';
//red '' etle ke te koi variable nathi to 

