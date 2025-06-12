
function handleSubmit(){

    // console.log("jhjjhjh");
    
    event.preventDefault();

    const food_type=parseInt(document.getElementById("food_type").value);
    const food_quantity=parseInt(document.getElementById("food_quantity").value);
    const select_fries=document.getElementById("select_fries").value;
    const select_fries_quantity=parseInt(document.getElementById("select_fries_quantity").value);
    const select_cold_drink=document.getElementById("select_cold_drink").value;
    const select_cold_drink_quantity=parseInt(document.getElementById("select_cold_drink_quantity").value);
    const cold_drink_type=parseInt(document.getElementById("cold_drink_type").value);
    


    // console.log(food_type,food_quantity,select_fries, select_fries_quantity, select_cold_drink ,
    //     select_cold_drink_quantity,cold_drink_type
    //  );
    

     if((food_type == 0 && food_quantity == 0) ||
        (food_type > 0 && food_quantity > 0)
    
    ) {
        document.getElementById("fooderr").innerHTML='';
     } else {
        document.getElementById("fooderr").innerHTML='Select Food Type';
     }

     if ((select_fries == 0 && select_fries_quantity == 0) || 
        (select_fries == 'yes' && select_fries_quantity > 0) ||
        (select_fries == 'no' && select_fries_quantity == 0) 
    ) {
        document.getElementById("frieserr").innerHTML="";
    } else {
        document.getElementById("frieserr").innerHTML="select fries";
    }

      if ((select_cold_drink == 0 && select_cold_drink_quantity== 0 && cold_drink_type) ||
      (select_cold_drink == 'yes' && select_cold_drink_quantity > 0 && cold_drink_type > 0) || 
      (select_cold_drink == "no" && cold_drink_type == 0 ) 
    ) {
        document.getElementById("cold_dribk_err").innerHTML='';
    } else {
        document.getElementById("cold_dribk_err").innerHTML='please select your drink';
    }

    let food_name;

    if(food_type == 800) {
        food_name='Pizza'
    } else if(food_type == 200) {
        food_name='Burger'
    } else if(food_type = 1000) {
        food_name='Combo'
    }

    let drink_name;

    if (cold_drink_type == 100) {
        drink_name='Mazza';
    } else if(cold_drink_type == 120) {
        drink_name='Pepsi';
    } else if(cold_drink_type == 150) {
        drink_name='fanta';
    }
    

    // let print = "" ;
    
    // print = `
    //     <table>
    //         <tr>
    //             <th>Food Items</th>
    //             <th>Type</th>
    //             <th>Quantity</th>
    //             <th>Total Price</th>
    //         </tr>
    // `
    // print += `
    //      <tr>
    //             <th>Food Items</th>
    //             <th>Type</th>
    //             <th>Quantity</th>
    //             <th>Total Price</th>
    //     </tr>
    // `


}