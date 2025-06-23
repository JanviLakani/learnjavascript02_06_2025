const arr = [];

let update = null; // first null reshe

// -----------------------------------------------------------------------------------edit btn

const handleedit = (i) => {
  // console.log('hello');  // hve tya element sudhi phosava mate index pass karaviperameter ma

  // console.log(i,arr[i]); temni index malvani start thase console log ma

  document.getElementById("todo").value = arr[i];

  update = i; // jevu update pr ckick karave eni index mle jashe
};

// -----------------------------------------------------------------------------------delete btn

const handledelete = (i) => {
  // console.log("kjkjkkjk");

  arr.splice(i, 1);

  display(); // aa display call etla mete km ke ek remove thaya pachi je baki tena pr pn map apply karva ni hovathi
};

// ----------------------------------------------------------------------------------- display

const display = () => {
  let print = "";
  arr.map((v, i) => {
    print += `
        <li>${v}<button onclick="handleedit(${i})">E</button><button onclick="handledelete(${i})">X</button></li>
    `;

    document.getElementById("disk").innerHTML = print;
  });
};

// ----------------------------------------------------------------------------------- main value

function handleSubmit() {
  event.preventDefault();

  const todo = document.getElementById("todo").value;

  // console.log(todo);

  //   arr.push(todo);

  console.log(arr);

  if (arr === "") {
    document.getElementById("todo").innerHTML = "enter your todo";
  } else {
    document.getElementById("todo").innerHTML = "";

    if (update === null) {
      arr.push(todo); // update = null hoi tyare data add
    } else {
      arr[update] = todo; // edit ni index pr update = i e ena pr thi index mle
      update = null;
    }

  }

  document.getElementById("todo").value = "";

  display();
  
}

// ----------------------------------------------------------------------------------- search todo list

const searchhandle = () => {
  const search = document.getElementById("search").value;
  // console.log(search,arr);

  const sData = arr.filter((v) =>
    v.toLowerCase().includes(search.toLowerCase())
  );

  console.log(search, arr, sData);

  // arr nai same tya ni jm sData aave so

  let print = "";
  sData.map((v, i) => {
    print += `
        <li>${v}<button onclick="handleedit(${i})">E</button><button onclick="handledelete(${i})">X</button></li>
    `;

    document.getElementById("disk").innerHTML = print;
  });
};

// ----------------------------------------------------------------------------------- search todo list

const sorthandle = () => {
  let sortvalue = document.getElementById("sort").value;

  console.log("sort value :-", arr, sortvalue);

  // arr.sort();

  if (sortvalue === "atoz") {
    sortvalue = arr.sort();
  } else {
    sortvalue = arr.sort().reverse();
  }

  display();
};
