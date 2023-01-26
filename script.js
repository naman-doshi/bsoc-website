var spinner = document.getElementById("spinner");
const nodeList = spinner.children;
let currentChild = nodeList[0];
let nextChild = nodeList[1];
let timer = 0;
let ticker = 0;
let change = false;
let shift = 2;

setInterval(function () {
  if (change == true) {
    if (parseFloat(nextChild.style.opacity) < 0.98) {
      if (parseFloat(currentChild.style.opacity) > 0.02) {
        currentChild.style.opacity = (1 - 0.1 * shift).toString();
      }
      currentChild.style.bottom = shift + "px";
      currentChild.style.top = "";
      nextChild.style.opacity = (0.01 * shift).toString();
      nextChild.style.top = 100 - shift + "px";
      nextChild.style.bottom = "";
      shift += 2;
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
