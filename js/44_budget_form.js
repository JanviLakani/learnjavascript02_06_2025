
class Budget{    //3
    constructor(){  //4
        this.Budget=document.getElementById("form_input");  //5
    }

    handlebudget(){ //7
        event.preventDefault();
        // console.log("hello",this.Budget.value);       //8

        if(this.Budget.value === '') {              //9
            document.getElementById("form_err").innerHTML="please enter budget"
        } else {
            if((isNaN(this.Budget.value)) || parseFloat(this.Budget.value) <= 0 ) {
                 document.getElementById("form_err").innerHTML="please enter valid input"
            } else {
                 document.getElementById("form_err").innerHTML=""

                 localStorage.setItem("budget",this.Budget.value)  //10  key & value

                b1.handledata();

                this.Budget.value=''



            }
        }
        
    }

    handledata(){
        
        const budgetvalue=localStorage.getItem("budget");

        // console.log("555"); 
        
       if(budgetvalue) {
        document.getElementById("budget_data").innerHTML=budgetvalue
       }
    }


} 

class Expenses {
    constructor(){
        this.Expenses=Document
    }
}

const b1=new Budget();  //6

  b1.handledata();

const budget=document.getElementById("budget_form");   // 1
budget.addEventListener("submit" , function(){    // 2
    b1.handlebudget();

   
   

// console.log("yes");  //8



})