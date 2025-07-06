// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Budget {
  //3
  constructor() {
    //4
    this.Budget = document.getElementById("form_input"); //5
  }

  handlebudget() {
    //7
    event.preventDefault();
    // console.log("hello",this.Budget.value);       //8

    if (this.Budget.value === "") {
      //9
      document.getElementById("form_err").innerHTML = "please enter budget";
    } else {
      if (isNaN(this.Budget.value) || parseFloat(this.Budget.value) <= 0) {
        document.getElementById("form_err").innerHTML =
          "please enter valid input";
      } else {
        document.getElementById("form_err").innerHTML = "";

        localStorage.setItem("budget", this.Budget.value); //10  key & value

        b1.handledata();

        this.Budget.value = "";
      }
    }
  }

  handledata() {
    const budgetvalue = localStorage.getItem("budget");
    const expencess = JSON.parse(localStorage.getItem("expence"));

    // console.log(expencess);/

    if (budgetvalue) {
      document.getElementById("budget_data").innerHTML = budgetvalue;
    }

    let addexpence = 0;

    if (expencess) {
      addexpence = expencess.reduce((acc, v) => acc + v.amount, 0);
      document.getElementById("expenses_add").innerHTML = addexpence;
      console.log(addexpence);
    }

    let total = parseFloat(budgetvalue || 0) - addexpence;

    document.getElementById("balance").innerHTML = total;
  }
}

// =========================================================== object 1

const b1 = new Budget(); //6

b1.handledata();

const budget = document.getElementById("budget_form"); // 1
budget.addEventListener("submit", function () {
  // 2
  b1.handlebudget();

  // console.log("yes");  //8
});

// =========================================================== class 2

class Expenses extends Budget {
  constructor() {
    super();
    this.Expenses_name = document.getElementById("expenses_input");
    this.Expenses_amt = document.getElementById("amt_input");
  }

  handleexpenses() {
    event.preventDefault();

    // console.log("hello22222" ,this.Expenses_amt.value);

    let dataAdd = false;

    if (this.Expenses_name.value === "") {
      document.getElementById("expenses_name_err").innerHTML =
        "please enter expenses name";
      dataAdd = true;
    } else {
      document.getElementById("expenses_name_err").innerHTML = "";
    }

    if (this.Expenses_amt.value === "") {
      document.getElementById("expenses_amt_err").innerHTML =
        "please enter expenses";
      dataAdd = true;
    } else {
      if (
        isNaN(this.Expenses_amt.value) ||
        parseFloat(this.Expenses_amt.value) <= 0
      ) {
        document.getElementById("expenses_amt_err").innerHTML =
          "please enter valid input";
        dataAdd = true;
      } else {
        document.getElementById("expenses_amt_err").innerHTML = "";
      }
    }

    if (!dataAdd) {
      let obj = {
        id: Math.floor(Math.random() * 1000),
        name: this.Expenses_name.value,
        amount: parseFloat(this.Expenses_amt.value),
      };

      console.log(obj);

      let localdata = JSON.parse(localStorage.getItem("expence")) || [];

      console.log(localdata);

      if (this.update === null) {
        localdata.push(obj);
        this.DisplayBudget(obj);
      } else {
        const i = localdata.findIndex((v, i) => v.id === this.update);
        localdata[i] = obj;

        const parent = document.getElementById("expdata");
        const oldChild = document.getElementById(`row ${this.update}`); //jiski id jo hamne click kiya vo this.update me save karta hai
        const newChild = this.createUpdatedDiv(obj);

        if (oldChild) {
          parent.replaceChild(newChild, oldChild);
        }

        this.update = null;
      }

      // localdata.push(obj);  // cut

      localStorage.setItem("expence", JSON.stringify(localdata));

      this.handledata();

      this.Expenses_name.value = "";
      this.Expenses_amt.value = "";

      // this.DisplayBudget(obj);   // 1
    }
  }

  DisplayBudget(obj) {
    console.log(obj);

    const divEle = document.createElement("div");
    divEle.setAttribute("id", `row ${obj.id}`);

    const namespan = document.createElement("span");
    namespan.textContent = obj.name;

    const amtspan = document.createElement("span");
    amtspan.textContent = obj.amount;

    const namebtn = document.createElement("button");
    namebtn.textContent = "X";
    const amtbtn = document.createElement("button");
    amtbtn.textContent = "E";

    amtbtn.addEventListener("click", () => {
      this.Expenses_name.value = obj.name;
      this.Expenses_amt.value = obj.amount;

      // this.update=null;

      this.update = obj.id;
    });

    namebtn.addEventListener("click", () => {
      divEle.remove();

      const locaExp = JSON.parse(localStorage.getItem("expence"));

      const exvalue = locaExp.filter((v) => v.id !== obj.id);

      localStorage.setItem("expence", JSON.stringify(exvalue));

      this.handledata();
    });

    divEle.appendChild(namespan);
    divEle.appendChild(amtspan);
    divEle.appendChild(namebtn);
    divEle.appendChild(amtbtn);

    const epen = document.getElementById("expdata");
    epen.appendChild(divEle);
  }

  // =======================================

  createUpdatedDiv(obj) {
    const divEle = document.createElement("div");
    divEle.setAttribute("id", `row ${obj.id}`);

    const namespan = document.createElement("span");
    namespan.textContent = obj.name;

    const amtspan = document.createElement("span");
    amtspan.textContent = obj.amount;

    const namebtn = document.createElement("button");
    namebtn.textContent = "X";
    const amtbtn = document.createElement("button");
    amtbtn.textContent = "E";

    amtbtn.addEventListener("click", () => {
      this.Expenses_name.value = obj.name;
      this.Expenses_amt.value = obj.amount;
      this.update = obj.id;
    });

    namebtn.addEventListener("click", () => {
      divEle.remove();
      const locaExp = JSON.parse(localStorage.getItem("expence"));
      const exvalue = locaExp.filter((v) => v.id !== obj.id);
      localStorage.setItem("expence", JSON.stringify(exvalue));
      this.handledata();
    });

    divEle.appendChild(namespan);
    divEle.appendChild(amtspan);
    divEle.appendChild(namebtn);
    divEle.appendChild(amtbtn);

    return divEle;
  }

  // ==========================================
}

const e1 = new Expenses();

window.onload = function () {
  const locaExp = JSON.parse(localStorage.getItem("expence"));

  const dis = locaExp.map((v, i) => {
    e1.DisplayBudget(v);
  });
};

const expenses = document.getElementById("expenses_form");
expenses.addEventListener("submit", function () {
  e1.handleexpenses();

  console.log("yes2222");

  // e1.handleamt();
});
