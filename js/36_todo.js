const arr = [];

let update=null  // first null reshe 

const handleedit = (i) => {
    // console.log('hello');  // hve tya element sudhi phosava mate index pass karaviperameter ma 

    // console.log(i,arr[i]); temni index malvani start thase console log ma 

    document.getElementById("todo").value=arr[i]
    
    update=i;  // jevu update pr ckick karave eni index mle jashe 
    
}

const handledelete = (i) => {
  // console.log("kjkjkkjk");

  arr.splice(i, 1);

//   let print = "";

  //   arr.map((v, i) => {
  //     print += `
  //         <li>${v}<button onclick="handledelete(${i})">x</button></li>
  //     `;

  //     document.getElementById("disk").innerHTML = print;
  //   });  

  display();  // aa display call etla mete km ke ek remove thaya pachi je baki tena pr pn map apply karva ni hovathi 


};

const display = () => {
  let print = "";
  arr.map((v, i) => {
    print += `
        <li>${v}<button onclick="handleedit(${i})">E</button><button onclick="handledelete(${i})">X</button></li>
    `;

    document.getElementById("disk").innerHTML = print;
  });
};

function handleSubmit() {
  event.preventDefault();

  const todo = document.getElementById("todo").value;

  // console.log(todo);

  // const arr=[];

  // onlu one j malshe click ni sathe old valo
  // arr je push karvayo chhe e remove thai jashe so glaoble arr banavo

//   arr.push(todo);

  console.log(arr);

//   let print = "";

//   arr.map((v, i) => {
//     print += `
//         <li>${v} <button onclick="handledelete(${i})">x</button></li>
//     `;

//     document.getElementById("disk").innerHTML = print;
//   });  // nise na function ne call karva thi kam thai jashe 

if(update === null) {
 arr.push(todo);  // update = null hoi tyare data add
} else {
    arr[update]=todo;   // edit ni index pr update = i e ena pr thi index mle 
    update=null;
}

document.getElementById("todo").value='';


display ();
}

const handleKeyUp = () => {
    const s=document.getElementById("search").value;
     // console.log(s,arr); 


    const sData=arr.filter((v)=> v.toLowerCase().includes(s.toLowerCase()))

    console.log(s,arr ,sData);

    // arr nai same tya ni jm sData aave so 

     let print = "";
    sData.map((v, i) => {

    print += `
        <li>${v}<button onclick="handleedit(${i})">E</button><button onclick="handledelete(${i})">X</button></li>
    `;

    document.getElementById("disk").innerHTML = print;
  });
    
}


console.log("hello");

console.log("janvi");

