var navbar = document.getElementById("header");

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 100) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
    navbar.style.backdropFilter = "saturate(180%) blur(20px)";
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    navbar.style.backdropFilter = "none";
  }
});
