// Navbar Hidden Effect
const navbar = document.querySelector(".navbar");
let scrolled = false;

window.onscroll = function () {
  //When scrolled above 100 pixels it removes the 'top' class
  if (window.pageYOffset > 100) {
    //When scrolled the navbar rises by 70 px
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    //Function removes it after 1 second
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
    }, 1000);
  } else {
    //Resets back to normal
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$(".navbar a").on("click", function (event) {
  //When navbar link is clicked
  if (this.hash !== "") {
    //When it detects section with initial #
    const hash = this.hash;

    //Executes smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top, //Returns certical scrollbar position
      },
      800
    );
  }
});
