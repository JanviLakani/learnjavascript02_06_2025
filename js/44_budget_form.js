// =========================================================== class 1
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

// =========================================================== object 1 

const b1=new Budget();  //6

  b1.handledata();

const budget=document.getElementById("budget_form");   // 1
budget.addEventListener("submit" , function(){    // 2
    b1.handlebudget();

// console.log("yes");  //8

})

// =========================================================== class 2 


class Expenses {
    constructor(){
        this.Expenses_name=document.getElementById("expenses_input")
        this.Expenses_amt=document.getElementById("amt_input")
    }

    handleexpenses(){
        event.preventDefault();

        console.log("hello22222" ,this.Expenses_amt.value); 
        

        if(this.Expenses_name.value === '') {
            document.getElementById("expenses_name_err").innerHTML='please enter expenses name'
        } else{
            document.getElementById("expenses_name_err").innerHTML=''
        }

        // console.log("hjhj");
        
    }

    handleamt(){
             event.preventDefault();
        // console.log("hello",this.Budget.value);       //8

        if(this.Expenses_amt.value === '') {              //9
            document.getElementById("expenses_amt_err").innerHTML="please enter expenses"
        } else {
            if((isNaN(this.Expenses_amt.value)) || parseFloat(this.Expenses_amt.value) <= 0 ) {
                 document.getElementById("expenses_amt_err").innerHTML="please enter valid input"
            } else {
                 document.getElementById("expenses_amt_err").innerHTML=""

                //  localStorage.setItem("expenses",this.Expenses_amt.value)  //10  key & value

                // e1.handledata();

                // this.Expenses_amt.value=''

            }
        }

        
    }

    //  handleamtdata(){
        
    //     const Expensesvalue=localStorage.getItem("expenses");

    //     // console.log("555"); 
        
    //    if(Expensesvalue) {
    //     document.getElementById("expenses_amt").innerHTML=Expensesvalue
    //    }
    // }


}

const e1=new Expenses();

const expenses=document.getElementById("expenses_form")
expenses.addEventListener("submit" ,function(){
    e1.handleexpenses(); 

    console.log("yes2222");

    e1.handleamt();
    

})