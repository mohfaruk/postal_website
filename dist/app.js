// Fix FOUC
//const headerImg = document.querySelector(".header-bg");

let domReady = dom => {
  document.readyState === "interactive" || document.readyState === "complete"
    ? dom()
    : document.addEventListener("DOMContentLoaded", dom);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = "visible";
});

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
