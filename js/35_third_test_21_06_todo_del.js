const todoarr = [];

// -----------------------------------------------------------delete btn
const btndelete = (index) => {
  todoarr.splice(index, 1);

  display();
};

// --------------------------------------------------------- display todo

const display = () => {
  let print = ``;

  todoarr.map((v, i) => {
    print += `
        <li>${v}<button onclick="btndelete(${i})">x</button></li>
        `;
  });

//   console.log(print);

  document.getElementById("btn").innerHTML = print;
};

// --------------------------------------------------------- display todo
const handleSubmitTodo = () => {
  event.preventDefault();

  const todo = document.getElementById("todo").value;

  // console.log(todo);

  todoarr.push(todo);

  // console.log(todoarr);

  display();

  document.getElementById("todo").value = "";
};
