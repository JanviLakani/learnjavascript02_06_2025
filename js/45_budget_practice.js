

class Budget{
    constructor(){
        this.Budget=document.getElementById("form_input")

    }

    handlebudget(){
        event.preventDefault();

        console.log("hello" , this.Budget.value);

        if(this.Budget.value === '') {
            document.getElementById("form_err").innerHTML="please enter budget"
        } else{
            if((isNaN(this.Budget.value)) || parseFloat(this.Budget.value) <= 0) {
                document.getElementById("form_err").innerHTML="please enter velid budget"
            } else{
                document.getElementById("form_err").innerHTML=""

                localStorage.setItem("budget",this.Budget.value)

                b1.handledata();

                this.Budget.value='';
            }
        }
        

    }

    handledata(){
        const badget_value=localStorage.getItem("budget")

         if(badget_value) {
        document.getElementById("ford_data").innerHTML=badget_value
    }


    }

   
}

const b1=new Budget();

b1.handledata();

const budget=document.getElementById("budget_form");
budget.addEventListener("submit", function(){
    b1.handlebudget();

    console.log("janvi");
    

})




// ======================================================================== 

class Expence{
    constructor(){
        this.Expence_name=document.getElementById("input_expence_name");
        this.Expence_amt=document.getElementById("input_expence_amt");
        
    }

    handleexpence(){
        event.preventDefault();

        console.log("hello", this.Expence_name.value);

        if(this.Expence_name.value === '') {
            document.getElementById("ex_name_err").innerHTML='please enter your expence';
        } else{
             document.getElementById("ex_name_err").innerHTML='';

        }
        
    }

    handleExpenceAmt(){
        event.preventDefault();

        console.log("hey" , this.Expence_amt.value);

        if(this.Expence_amt.value === '') {
            document.getElementById("ex_amt_err").innerHTML='please enter expence amount'
        } else{
            if((isNaN(this.Expence_amt.value)) || this.Expence_amt.value <= 0){
                 document.getElementById("ex_amt_err").innerHTML='please enter velid expence amount';
            } else {
                document.getElementById("ex_amt_err").innerHTML='';

                localStorage.setItem("expence_key",this.Expence_amt.value);

                handleExpenceAmt_data();

                this.Expence_amt.value='';

            }

        }
        
    }

    handleExpenceAmt_data(){
        const expence_amt_value=localStorage.getItem("expence_key")

        if( expence_amt_value){
            document.getElementById("amt_data").innerHTML=expence_amt_value;
        }
    }
}

const e1=new Expence();

e1.handleExpenceAmt_data();

const expence=document.getElementById("form_expence");
expence.addEventListener("submit" , function(){

e1.handleexpence();

console.log("janvi");

e1.handleExpenceAmt();

console.log("piya");





})
