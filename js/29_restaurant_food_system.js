
 let total = 0;
function handleSubmit() {
 
//   const firstAmt = 500;
//   const sAmt = 500;
//   const tAmt = 500;

//   total += sAmt;
//   total += tAmt;

//   console.log("totaltotaltotaltotaltotal", total);

  // console.log("jhjjhjh");

  event.preventDefault();

  const food_type = parseInt(document.getElementById("food_type").value);
  const food_quantity = parseInt(
    document.getElementById("food_quantity").value
  );
  const select_fries = document.getElementById("select_fries").value;
  const select_fries_quantity = parseInt(
    document.getElementById("select_fries_quantity").value
  );
  const select_cold_drink = document.getElementById("select_cold_drink").value;
  const select_cold_drink_quantity = parseInt(
    document.getElementById("select_cold_drink_quantity").value
  );
  const cold_drink_type = parseInt(
    document.getElementById("cold_drink_type").value
  );

  // console.log(food_type,food_quantity,select_fries, select_fries_quantity, select_cold_drink ,
  //     select_cold_drink_quantity,cold_drink_type
  //  );

  let foodtbl = false;

  if (
    (food_type == 0 && food_quantity == 0) ||
    (food_type > 0 && food_quantity > 0)
  ) {
    document.getElementById("fooderr").innerHTML = "";
  } else {
    document.getElementById("fooderr").innerHTML = "Select Food Type";
    foodtbl = true;
  }

  if (
    (select_fries == 0 && select_fries_quantity == 0) ||
    (select_fries > 0 && select_fries_quantity > 0) ||
    (select_fries == "no" && select_fries_quantity == 0)
  ) {
    document.getElementById("frieserr").innerHTML = "";
  } else {
    document.getElementById("frieserr").innerHTML = "select fries";
    foodtbl = true;
  }

  if (
    (select_cold_drink == 0 &&
      select_cold_drink_quantity == 0 &&
      cold_drink_type == 0) ||
    (select_cold_drink == "yes" &&
      select_cold_drink_quantity > 0 &&
      cold_drink_type > 0) ||
    (select_cold_drink == "no" &&
      select_cold_drink_quantity == 0 &&
      cold_drink_type == 0)
  ) {
    document.getElementById("cold_dribk_err").innerHTML = "";
  } else {
    document.getElementById("cold_dribk_err").innerHTML =
      "please select your drink";
    foodtbl = true;
  }

  let print = "";

  if (!foodtbl) {
    console.log("tab print");

    if (
      (food_type > 0 && food_quantity > 0) ||
      (select_fries > 0 && select_fries_quantity > 0) ||
      (select_cold_drink == "yes" &&
        select_cold_drink_quantity > 0 &&
        cold_drink_type > 0)
    ) {
      print = `
                 <table border>
            <tr>
                <th>Food Items</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Total Price</th>
            </tr>
             `;

      document.getElementById("cou_show").style.display = "block";
    }

    if (food_type > 0 && food_quantity > 0) {
      let foodname;

      if (food_type == 800) {
        foodname = "Pizza";
      } else if (food_type == 200) {
        foodname = "Burger";
      } else if (food_type == 1000) {
        foodname = "Combo";
      }

      // print = `
      //      <table border>
      // <tr>
      //     <th>Food Items</th>
      //     <th>Type</th>
      //     <th>Quantity</th>
      //     <th>Total Price</th>
      // </tr>
      //  `

      // aa table ne if condition ma rakhel chhe km
      // k use jo only drink j select kare to pn table shoe thai
      const firstAmt = food_quantity * food_type;

      total += firstAmt;

      print += `
               <tr>
                <td>Food Items</td>
                <td>${foodname}</td>
                <td>${food_quantity}</td>
                <td>${food_quantity * food_type}</td>
            </tr>
            `;
      //  total += food_quantity * food_type;
    }

    if (select_fries > 0 && select_fries_quantity > 0) {
      print += `
               <tr>
                <td>Food Items</td>
                <td>fries</td>
                <td>${select_fries_quantity}</td>
                <td>${select_fries_quantity * select_fries}</td>
            </tr>
              `;
      const sAmt = select_fries_quantity * select_fries;
    //   console.log("sAmtsAmtsAmt", sAmt);

      total += sAmt;
      //  total += select_fries_quantity * select_fries;
    }

    if (
      select_cold_drink == "yes" &&
      select_cold_drink_quantity > 0 &&
      cold_drink_type > 0
    ) {
      let cold_drink_name = "";

      if (cold_drink_type == 100) {
        cold_drink_name = "Mazza";
      } else if (cold_drink_type == 120) {
        cold_drink_name = "Pepsi";
      } else if (cold_drink_type == 150) {
        cold_drink_name = "Fanta";
      }
const tAmt = select_cold_drink_quantity * cold_drink_type;
      print += `
               <tr>
                <td>cold drink</td>
                <td>${cold_drink_name}</td>
                <td>${select_cold_drink_quantity}</td>
                <td>${tAmt}</td>
            </tr>`;

    
      console.log("tAmttAmttAmttAmt", tAmt);

      total += tAmt;
      //   total += select_cold_drink_quantity * cold_drink_type;
    }

    print += `</table>`;

    document.getElementById("disk").innerHTML = print;
  } else {
    console.log("tab not");
  }

    console.log("totaltotaltotaltotaltotal", total);

}

// function handleCoupan(){

//     let usercoupan=document.getElementById("coupan").value;

//     console.log(usercoupan);

//     // if( usercoupan ==  ) {

//     // }

//     if () {
//         dis="abc3"

//     }

//     let biil=(total-dis)

    // <h2>your discount${dis}</h2>
    // <h1>total bill${biil}</h1>

// document.getElementById("bill").innerHTML=bill

// print karava mete id get karavi show karva

// }


function handleCoupan(){

event.preventDefault();

const usercoupan=document.getElementById("coupan").value;

console.log(usercoupan);

let dis=0
let bill=0

if(usercoupan == "abc") {
  dis=total*0.10;

  console.log("jhjhjhj");
  
} 

bill=total-dis;

console.log(bill);

const t = `<h2>Total Bill : ${total}</h2>`
const f = `<h2>Final Bill : ${bill}</h2>`


document.getElementById("total").innerHTML=t;
document.getElementById("bill").innerHTML=f;



}
