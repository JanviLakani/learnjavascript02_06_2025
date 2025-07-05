class CurdCreat {
  constructor() {
    this.name_curd = document.getElementById("name");
    this.discription_curd = document.getElementById("discription");
    this.price_curd = document.getElementById("price");
  }

  handleCurd() {
    event.preventDefault();
    console.log("hello", this.name_curd.value);
    console.log("hello", this.discription_curd.value);
    console.log("hello", this.price_curd.value);

    let curd_data = false;

    if (this.name_curd.value === "") {
      document.getElementById("name_err").innerHTML = "enetr your name";
      curd_data = true;
    } else {
      document.getElementById("name_err").innerHTML = "";
    }

    if (this.discription_curd.value === "") {
      document.getElementById("discription_err").innerHTML =
        "enetr your discription";
      curd_data = true;
    } else {
      document.getElementById("discription_err").innerHTML = "";
    }

    if (this.price_curd.value === "") {
      document.getElementById("price_err").innerHTML = "enetr price";
      curd_data = true;
    } else {
      if (
        isNaN(this.price_curd.value) ||
        parseInt(this.price_curd.value) <= 0
      ) {
        document.getElementById("price_err").innerHTML = "enetr velid price";
        curd_data = true;
      } else {
        document.getElementById("price_err").innerHTML = "";
      }
    }

    if (!curd_data) {
      let curdobj = {
        name: this.name_curd.value,
        discription: this.discription_curd.value,
        price: parseInt(this.price_curd.value),
      };

      console.log(curdobj);

      localStorage.getItem("curd_key");

      const curd_value = JSON.parse(localStorage.getItem("curd_key")) || [];

      curd_value.push(curdobj);

      localStorage.setItem("curd_key", JSON.stringify(curd_value));

      this.displayTable(curdobj);
    }
  }

  displayTable(curdobj) {
    // const name=document.getElementById("name");
    // const name_add=document.createTextNode(name);

    // trEle

    const tableEle = document.createElement("table");
    tableEle.setAttribute("id", "disk");

    const trEle = document.createElement("tr");

    const tdEleName = document.createElement("td");
    tdEleName.textContent = curdobj.name;

    const tdEleDis = document.createElement("td");
    tdEleDis.textContent = curdobj.discription;

    const tdElePri = document.createElement("td");
    tdElePri.textContent = curdobj.price;

    const tablePrint = document.getElementById("diskTable");

    tablePrint.appendChild(tableEle);
    tableEle.appendChild(trEle);
    trEle.appendChild(tdEleName);
    trEle.appendChild(tdEleDis);
    trEle.appendChild(tdElePri);

    const editBTN = document.createElement("button");
    editBTN.textContent = "E";
    editBTN.addEventListener("click", function () {});

    const dltBTN = document.createElement("button");
    dltBTN.textContent = "X";

    trEle.appendChild(editBTN);
    trEle.appendChild(dltBTN);

    dltBTN.addEventListener("click", function () {
      trEle.remove();
    });
  }
}

const c1 = new CurdCreat();

const curd = document.getElementById("curd_form");
curd.addEventListener("submit", () => {
  c1.handleCurd();

  console.log("js");
});
