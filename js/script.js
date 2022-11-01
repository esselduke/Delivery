// function myFunction() {
//   var tn = document.querySelectorAll("input")[0].value;
//   if (tn == "6046780912") {
//     window.location.href = "shipping.html";
//   } else {
//     alert("invalid Tracking");
//   }
// }
var toggleButton = document.getElementsByClassName("toggler")[0];
var navbarLinks = document.getElementsByClassName("nav-items");
toggleButton.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
});
// function myLogin() {
//   var loginCredential = document.querySelector(".account-input").value;
//   var pinCredential = document.querySelector(".pin-input").value;
//   if (loginCredential == "david" && pinCredential == "1234") {
//     window.location.href = "ourservices.html";
//   } else {
//     alert("Invalid Account Number or Pin Code!");
//   }
// }
