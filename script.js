document
  .querySelector(".submitEmail")
  .addEventListener("click", function name(params) {});

let email = document.getElementById("emmail-guess");
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function checkEmail() {
  if (!filter.test(email.value)) {
    alert("Hay nhap dia chi email hop le.\nExample@gmail.com");

    return false;
  } else {
    document.querySelector(".enterEmailForm").classList.toggle("hidden");
    document.querySelector(".showPersonalInfo").classList.toggle("hidden");
    // alert("OK roi day, Email nay hop le.");
  }
}

// nut view more, view less
const allBtn = document.querySelectorAll(".btn-info");
const allViewMore = document.querySelectorAll(".viewMore");

console.log(allBtn);

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", function () {
    allBtn[i].classList.toggle("hidden");
    switch (allBtn[i].textContent) {
      case "View More":
        allBtn[i].textContent = "View Less";
        allViewMore[i].classList.toggle("hidden");
        break;
      case "View Less":
        allBtn[i].textContent = "View More";
        allViewMore[i].classList.toggle("hidden");
        break;
    }
  });
}
