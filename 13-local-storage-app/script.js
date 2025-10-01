let students = [];

if (localStorage.getItem("students")) {
  students = JSON.parse(localStorage.getItem("students"));
  display();
}

function addStudents() {
  const name = document.getElementById("name").value;
  const marks = document.getElementById("marks").value;

  if (name && marks) {
    const student = {
      id: Date.now(),
      name: name,
      marks: marks,
    };
    // console.log(student);
    students.push(student);
    display();
    saveS();
  } else {
    alert("Please fill detail");
  }
}

function display() {
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = " ";
  students.forEach((student) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Name:<strong> ${student.name}<br>
          <strong>Marks:<strong> ${student.marks}<br>
          <button onclick = "edit(${student.id})">Edit</button>
          <button onclick = "deleteS(${student.id})">Delete</button> `;

    studentList.appendChild(li);
  });
}

function edit(id) {
  console.log(id);
  const student = students.find((student) => student.id === id);
  if (student) {
    document.getElementById("name").value = student.name;
    document.getElementById("marks").value = student.marks;

    students = students.filter((s) => s.id !== id);
    display();
    saveS();
  }
}

function deleteS(id) {
  students = students.filter((student) => student.id !== id);
  display();
  saveS();
}
function saveS() {
  localStorage.setItem("students", JSON.stringify(students));
}
