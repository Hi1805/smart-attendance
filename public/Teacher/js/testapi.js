// const showStudents = document.querySelector("#list");

// const logout = document.querySelector("#btnLogout");
// auth.onAuthStateChanged((user) => {
//   if (!user) {
//     location.assign("./../../index.html");
//   } else {
//     // homepage.classList.remove("non_active");
//   }
//   console.log(user);
// });
// // get students

// logout.addEventListener("click", (event) => {
//   firebase
//     .auth()
//     .signOut()
//     .then(function () {})
//     .catch(function (error) {});
// });
// const test = firebase.functions().httpsCallable("databaseStudent");
// test({
//   name: "Function-oke",
// })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (error) {});
const isFaceStudent = firebase.functions().httpsCallable("isFaceStudent");
const testFunction = firebase.functions().httpsCallable("testFunction");
const imgUpload = document.getElementById("imageUpload");
imgUpload.addEventListener("change", async () => {
  // console.log(imgUpload.files);
  // testFunction({
  //   img: imgUpload.files,
  // }).then((res) => {
  //   console.log(res);
  // });
  const toBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  toBase64(imgUpload.files[0]).then((result) => {
    isFaceStudent({
      img: result,
      class: "10A1",
    }).then((res) => {
      console.log(res);
    });
  });
});
function test(x) {}
var pathReference = storage.ref("images/stars.jpg");