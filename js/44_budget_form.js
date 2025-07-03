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
        const expencess=JSON.parse(localStorage.getItem("expence"));

        console.log(expencess);
        

        
       if(budgetvalue) {
        document.getElementById("budget_data").innerHTML=budgetvalue
       }

       let addexpence=0;

       if(expencess) {
        addexpence=expencess.reduce((acc,v)=> acc + v.amount,0);
        document.getElementById("expenses_add").innerHTML=addexpence;
        console.log(addexpence);
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


class Expenses extends Budget{
    
    constructor(){
        super();
        this.Expenses_name=document.getElementById("expenses_input")
        this.Expenses_amt=document.getElementById("amt_input")
    }

     
    handleexpenses(){
        event.preventDefault();

        // console.log("hello22222" ,this.Expenses_amt.value); 
        

       let dataAdd=false;

        if(this.Expenses_name.value === '') {
            document.getElementById("expenses_name_err").innerHTML='please enter expenses name'
             dataAdd=true;
        } else{
            document.getElementById("expenses_name_err").innerHTML=''

        }


        if(this.Expenses_amt.value === '') {              
            document.getElementById("expenses_amt_err").innerHTML="please enter expenses"
             dataAdd=true;
        } else {
            if((isNaN(this.Expenses_amt.value)) || parseFloat(this.Expenses_amt.value) <= 0 ) {
                 document.getElementById("expenses_amt_err").innerHTML="please enter valid input"
                  dataAdd=true;
            } else {
                 document.getElementById("expenses_amt_err").innerHTML=""

    
            }
        }

        if(!dataAdd){

            let obj={
                id : Math.floor(Math.random()*1000),
                name : this.Expenses_name.value,
                amount :parseFloat(this.Expenses_amt.value)
            }

            console.log(obj);


        let localdata=JSON.parse(localStorage.getItem("expence") ) || [];

        console.log(localdata);


        localdata.push(obj)


        localStorage.setItem("expence" ,JSON.stringify(localdata));

        this.handledata();
         
        }



   
        

        
        

      
        
    }



    // handleamt(){
    //          event.preventDefault();
    //     // console.log("hello",expenses_amt_err.value);      

    //     if(this.Expenses_amt.value === '') {              
    //         document.getElementById("expenses_amt_err").innerHTML="please enter expenses"
    //     } else {
    //         if((isNaN(this.Expenses_amt.value)) || parseFloat(this.Expenses_amt.value) <= 0 ) {
    //              document.getElementById("expenses_amt_err").innerHTML="please enter valid input"
    //         } else {
    //              document.getElementById("expenses_amt_err").innerHTML=""

           

               

    //         }
    //     }

        
    // }


     // this.Expenses_amt.value=''


}

const e1=new Expenses();

const expenses=document.getElementById("expenses_form")
expenses.addEventListener("submit" ,function(){
    e1.handleexpenses(); 

    console.log("yes2222");

    // e1.handleamt();
    

})