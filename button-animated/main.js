let btn = document.getElementById("btn");
let check = document.getElementById("check");

btn.addEventListener("click", btnAnimation);

function btnAnimation() {
  btn.classList.add("btnAnimation");
  check.classList.add("checkAnimation");

  setTimeout(function () {
    btn.classList.remove("btnAnimation");
    check.classList.remove("checkAnimation");
  }, 6000);
}
