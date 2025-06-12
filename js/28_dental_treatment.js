let seating = 0;
let costing = 0;
let treatmentname = "";

function handleChange() {
  const tre = document.getElementById("treatment").value;

  // console.log(tre);

  if (tre === "tc") {
    treatmentname = "Teath Cleaning";
    seating = 1;
    costing = 500;
  } else if (tre === "fi") {
    treatmentname = "Fillings";
    seating = 2;
    costing = 1500;
  } else if (tre === "rct") {
    treatmentname = "Root Canal Treatment";
    seating = 4;
    costing = 2500;
  } else if (tre === "rctcover") {
    treatmentname = "RCT + Cover";
    seating = 6;
    costing = 12000;
  } else if (tre === "ba") {
    treatmentname = "Braces/Invisalign";
    seating = 12;
    costing = 35000;
  }

  if (tre !== "0") {
    let print = `
    <table border>
            <tr>
                <th>Treatment name</th>
                <th>Seating</th>
                <th>Costing</th>
            </tr>
            <tr>
                <td>${treatmentname}</td>
                <td>${seating}</td>
                <td>${costing}</td>
            </tr>
     </table>
`;

    document.getElementById("disk").innerHTML = print;
    document.getElementById("book_apm").style.display="block"
  } else {
    document.getElementById("disk").innerHTML = "";
    document.getElementById("book_apm").style.display="";
  }


  // ${} etla mate km treament name and costing and
  //  seating change karti vakhte name cost and seat
  //  ang alg lavva ${}} no use thai chhe

  // `` no use kari to moovemnet thati hoi chhe table ni
  // one line bov badhi line ma `` sale chhe

  // '' , "" table ma use na thai

  // __________ 
// document.getElementById("book_apm").style.display="block";

// starting ma table nai show karva nu hovathi display none 
// after bock click pr  


}

// function handleDateSubmit() {
//   event.preventDefault();

//   let apdate = document.getElementById("selectdate").value;

//   if (apdate !== "") {
//     let newdate = new Date();
//     // console.log(newdate);

//     let print1 = `
//         <table>
//             <tr>
//                 <th>Treatment Name</th>
//                 <th>Appointment Date</th>
//                 <th>Costing</th>
//             </tr>
    
//     `;

//     let amount = costing / seating;
//     print1 += `<tr>
//                     <td>${treatmentname}</td>
//                     <td>${newdate.toDateString}</td>
//                     <td>${amount}</td>
//                 </tr>`;

//     document.getElementById("disk1").innerHTML = "";
//     document.getElementById("datearr").innerHTML = print1;

//     document.getElementById("datearr").innerHTML = print1;
//   } else {
//     document.getElementById("datearr").innerHTML =
//       "please select your dental appointment";
//   }
// }

//class := seating hoi etli var loop fare 


function handlleSubmit(){

  event.preventDefault();

  // console.log(treatmentname,seating,costing);

  const dateselect=document.getElementById("dateselect").value;

  let d=new Date(dateselect);

  // console.log(dateselect);

  let print1 = `
     <table border>
            <tr>
                <th>Treatment Name</th>
                <th>Appointment Date</th>
                <th>Costing</th>
            </tr>
  `

  for (i=0; i< seating; i++) {
    

    print1 += `
            <tr>
                <td>${treatmentname}</td>
                <td>${d.toLocaleDateString()}</td>
                <td>${costing / seating}</td>
            </tr>
   `
  //  console.log(treatmentname,seating,costing);

  console.log(print1);

  d.setDate(d.getDate()+7)
  
  }

  print1 += `</table>`;

  document.getElementById("disk1").innerHTML=print1;
  
  

}
