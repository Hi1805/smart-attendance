const view = document.querySelector(".view-aweek");
const notes = document.querySelectorAll(".havenote");

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

