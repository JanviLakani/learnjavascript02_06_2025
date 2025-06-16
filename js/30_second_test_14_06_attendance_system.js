let studentatt = 0;
  const pre = "att";

function handleSubmit() {
  event.preventDefault();

  studentatt = parseInt(document.getElementById("student").value);

  // console.log(studentatt);

  document.getElementById("showstudent").innerHTML = studentatt;
//   studentatt = student;

  let form = `  <form action="" onsubmit="handlenumSubmit()">`;

  for (let i = 1; i <= studentatt; i++) {
    const element = `
    <span>${i}</span> 
    <input type="text"  id="${pre}${i}" placeholder="enter number ${i}">

    <br><br>
`;
    form += element;
  }

  form += `<input type="submit">`;
  form += `</form>`;

  document.getElementById("student_form").innerHTML = form;
}


function handlenumSubmit() {
  event.preventDefault();
  const stu_count = studentatt;
  let present_stu_count = 0;

  for (let i = 1; i <= stu_count; i++) {
   
    const inputValue = document.getElementById(`${pre}${i}`).value;

    if (inputValue.toLowerCase() === "p") {
      present_stu_count++;
    }
  }
  document.getElementById("present_count").innerHTML = present_stu_count;
  document.getElementById("absenve_count").innerHTML =
    stu_count - present_stu_count;
  document.getElementById("present_per").innerHTML = `${
    (present_stu_count / stu_count ) * 100
  }%`;
}


