var spinner = document.getElementById("spinner");
var navbar = document.getElementById("header");
const nodeList = spinner.children;
let currentChild = nodeList[0];
let nextChild = nodeList[1];
let timer = 0;
let ticker = 0;
let change = false;
let shift = 2;
let sources = [
  "url(assets/img1.png)",
  "url(assets/img2.png)",
  "url(assets/img3.png)",
  "url(assets/img4.png)",
];
let captions = [
  "Our mentor, Michael, introduces himself to BSOC",
  "Our executives kick off the inaugural case competition",
  "Members celebrate a successful presentation",
  "Members participate in a state-wide stock pitch competition",
];
let rotations = [
  "rotate(-3deg)",
  "rotate(3deg)",
  "rotate(-3deg)",
  "rotate(3deg)",
];

document.getElementById("above").addEventListener("click", cycleImages);
document.getElementById("below").addEventListener("click", cycleImages);

setInterval(function () {
  if (change == true) {
    if (parseFloat(nextChild.style.opacity) < 0.97) {
      currentChild.style.opacity = (1 - 0.1 * shift).toString();
      currentChild.style.bottom = shift + "px";
      currentChild.style.top = "";
      nextChild.style.opacity = (0.01 * shift).toString();
      nextChild.style.top = 100 - shift + "px";
      nextChild.style.bottom = "";
      shift += 3;
    } else {
      change = false;
      ticker = 0;
      shift = 1;
    }
  } else {
    ticker++;
    if (ticker >= 1000) {
      if (timer == 2) {
        currentChild = nodeList[2];
        nextChild = nodeList[0];
        timer = 0;
      } else {
        currentChild = nodeList[timer];
        nextChild = nodeList[timer + 1];
        currentChild.style.top = "0px";
        nextChild.style.top = "100px";
        timer++;
      }
      change = true;
    }
  }
}, 1);

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 170) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
    navbar.style.backdropFilter = "saturate(180%) blur(20px)";
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    navbar.style.backdropFilter = "none";
  }
});

function cycleImages() {
  let currentTop = document
    .getElementById("above-caption")
    .innerText.toString();
  let index = captions.indexOf(currentTop);
  let next = (index + 1) % 4;
  let nextnext = (next + 1) % 4;
  document.getElementById("above").style.backgroundImage = sources[next];
  document.getElementById("above").style.transform = rotations[next];
  document.getElementById("above-caption").innerText = captions[next];
  document.getElementById("below").style.backgroundImage = sources[nextnext];
  document.getElementById("below").style.transform = rotations[nextnext];
  document.getElementById("below-caption").innerText = captions[nextnext];
}

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(href, "_blank");
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

window.addEventListener("load", function () {
  const form = document.getElementById("mailing-list");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    });
  });
});
