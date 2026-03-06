function changeColor() {
  document.getElementById("main-header").style.backgroundColor = "hotpink";
}

function changeText() {
  document.getElementById("main-content").innerHTML = "I love coding!";
}

function toggleAside() {
  var aside = document.querySelector("aside");
  if (aside.style.display === "none") {
    aside.style.display = "block";
  } else {
    aside.style.display = "none";
  }
}

function makeYellow() {
  document.getElementById("main-header").style.backgroundColor = "yellow";
}

function makeBlue() {
  document.getElementById("main-header").style.backgroundColor =
    "rgb(142, 182, 247)";
}
