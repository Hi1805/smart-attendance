const viewMonth = document.querySelector(".view-aweek");
const Notes = document.querySelectorAll(".noted");
const weekNow = document.querySelector(".week-now");
const fieldOnTable = document.querySelector(".field-one-table");
const tableWeek = document.querySelector(".table-list-week");

const nextweek = document.querySelector(".next-week");
const backweek = document.querySelector(".previous-week");
const nowweek = document.querySelector(".now-week");

let preW = 0;
let nextW = 0;

function WeekNow(day1, day2) {
  let d = new Date();
  return (
    "Tuần Học Thứ " +
    (getWeekNow(new Date())+ nextW-preW) +
    "        : " +
    day1 +
    " -> " +
    day2
  );
}


for (var i = 0; i < Notes.length; i++) {
  Notes[i].addEventListener("click", (e) => {
    e.preventDefault();
    viewMonth.classList.add("open");
  });
}
// viewMonth.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (viewMonth.classList.contains("open")) {
//     viewMonth.classList.remove("open");
//   }
// });
function getTypeDay(zeller) {
  switch (zeller) {
    case 1:
      return "T2";
    case 2:
      return "T3";
    case 3:
      return "T4";
    case 4:
      return "T5";
    case 5:
      return "T6";
    case 6:
      return "T7";
    case 0:
      return "CN";
  }
}

function dateOfWeek(listStudents, weekNow) {
  let listWeek = [];
  listStudents.forEach((student) => {
    let attendance = student.attendance.filter((att) => {
      return att.data.week == weekNow;
    });
    listWeek.push({
      ...student,
      attendance: attendance,
    });
  });
  return listWeek;
}
function renderWeek(listStudents) {
  let database = dateOfWeek(listStudents, getWeekNow(new Date())+nextW-preW);
  weekNow.innerText = WeekNow(database[0].attendance[0].day,database[0].attendance[6].day );
  let content = database[1].attendance.map((date) => {
   
    let d = new Date(date.day);
    return `
      <th id ="${date.day}"> ${getTypeDay(d.getDay())} , ${d.getDate()} </th>
      `;
  });
  const field = `<th>STT</th>
  <th>ID</th>
  <th>First Name</th>
  <th>Last Name</th>`;
  fieldOnTable.innerHTML = field + content.join(" ");

  let table = database.map((student, index) => {
    let atd = student.attendance.map((date) => {
      document.getElementById(date.day).addEventListener("click", (e)=>{
        console.log(date.day);
      })
      return `
      <td>
      <div >${date.data.status ? "" : date.data.asked ? "P" : "V"}</div>
  </td>
      `;
    });
    return `
    <tr>
    <td>${index + 1}</td>
    <td>${student.id}</td>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    ${atd.join(" ")}
</tr>
    `;
  });
  tableWeek.innerHTML = table.join(" ");
}
// const = document.querySelector("#dataTable");

// nextWeek.addEventListener("click", function (e) {
//   weekNow.innerText = WeekNow() + 1;
//   renderWeek(listStudents, getWeekNow(new Date()) + 1);
// });

nextweek.addEventListener("click", (e) => {
  e.preventDefault();
  nextW++;
  
  renderWeek(listStudents);
});
backweek.addEventListener("click", (e) => {
  e.preventDefault();
  preW++;
  
  renderWeek(listStudents);
});
nowweek.addEventListener("click", (e) => {
  e.preventDefault();
  preW = 0;
  nextW = 0;
 
  renderWeek(listStudents);
});
