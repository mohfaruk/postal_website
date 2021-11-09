// const navbar = document.getElementById("navbar");
// let scrolled = false;

// window.onscroll = function () {
//   //When scrolled above 100 pixels it removes the 'top' class
//   if (window.pageYOffset > 100) {
//     navbar.classList.remove("top");
//     //When scrolled the navbar rises by 70 px
//     if (!scrolled) {
//       navbar.style.transform = "translateY(-70px)";
//     }
//     //Function removes it after 1 second
//     setTimeout(function () {
//       navbar.style.transform = "translateY(0)";
//     }, 1000);
//   } else {
//     //Resets back to normal
//     navbar.classList.add("top");
//     scrolled = false;
//   }
// };

function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active");
}
