const view = document.querySelector(".view-awmonth");
const notes = document.querySelectorAll(".noted");

for (var i = 0; i < notes.length; i++) {
  notes[i].addEventListener("click", (e) => {
    e.preventDefault();
    view.classList.add("open");
    console.log(view.classList);
  });
}
view.addEventListener("click", (e) => {
  e.preventDefault();
  if (view.classList.contains("open")) {
    view.classList.remove("open");
  }
});
const listStudents = [];
db.collection("Students")
  .orderBy("lastName")
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      listStudents.push(doc.data());
    });
  })
  .catch(function (error) {});
