// Display Header Image
const headerImg = document.querySelector(".header-bg");
function displayImg() {
  headerImg.style.display = "block";
}

displayImg();

// Navbar Hidden Effect
const scroll = document.querySelector(".scroll");
let scrolled = false;

window.onscroll = function () {
  //When scrolled above 100 pixels it removes the 'top' class
  if (window.pageYOffset > 100) {
    //When scrolled the navbar rises by 70 px
    if (!scrolled) {
      scroll.style.transform = "translateY(-70px)";
    }
    //Function removes it after 1 second
    setTimeout(function () {
      scroll.style.transform = "translateY(0)";
    }, 1000);
  } else {
    //Resets back to normal
    scroll.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$(".scroll a").on("click", function (event) {
  //When link is clicked
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
