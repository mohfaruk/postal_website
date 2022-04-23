// Display Header Image
const headerImg = document.querySelector(".header-bg");

function displayImg() {
  headerImg.style.display = "block";
}

displayImg();

// Smooth Scrolling
const links = document.querySelectorAll(".nav-link");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
