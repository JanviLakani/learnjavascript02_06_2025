// const handlesubmit = () => {
//   event.preventDefault();

//   const city = document.getElementById("city").value; //1

//   // console.log(city);

//   const liElement = document.createElement("li"); //2

//   const cityText = document.createTextNode(city); //3

//   liElement.appendChild(cityText); // <li>surat</li>  //4

//   const diskDiv = document.getElementById("disk"); //5

//   diskDiv.appendChild(liElement); //6

  

//   const deletebtn = document.createElement("button");

//   deletebtn.innerText = "X";

//   deletebtn.addEventListener("click", function () {
//     liElement.remove();
//   });

//   liElement.appendChild(deletebtn);

//   // document.getElementById("disk").appendChild(liElement)

//   document.getElementById("city").value = "";
// };

// const city_form = document.getElementById("city_form");
// city_form.addEventListener("submit", function () {
//   handlesubmit();
// });




// ================================================= 


const handlesubmit = () => {
  event.preventDefault();

  const city = document.getElementById("city").value;

  // console.log(city);

  const liElement = document.createElement("li"); 
  const cityText = document.createTextNode(city); 

  liElement.appendChild(cityText); 
  const diskDiv = document.getElementById("disk"); 

  diskDiv.appendChild(liElement); 

  const deletebtn=document.createElement("button");
    deletebtn.textContent='X';

    liElement.appendChild(deletebtn);

    deletebtn.addEventListener("click" ,function (){
        liElement.remove();
    })

   


  document.getElementById("city").value = "";
};

const city_form = document.getElementById("city_form");
city_form.addEventListener("submit", function () {
  handlesubmit();
});

