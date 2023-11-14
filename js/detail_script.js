//  read more btn

function readmore1() {
  var dots = document.querySelector("#dots1");
  var moreText = document.querySelector("#more1");
  var btnText = document.querySelector("#btn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readmore2() {
  var dots = document.querySelector("#dots2");
  var moreText = document.querySelector("#more2");
  var btnText = document.querySelector("#btn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readmore3() {
  var dots = document.querySelector("#dots3");
  var moreText = document.querySelector("#more3");
  var btnText = document.querySelector("#btn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function readmore4() {
  var dots = document.querySelector("#dots4");
  var moreText = document.querySelector("#more4");
  var btnText = document.querySelector("#btn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// view all btn

let viewAllBtn = document.querySelector("#view-all");
let currentItem = 3;

viewAllBtn.onclick = () => {
  let items = [...document.querySelectorAll(".related-item")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    items[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= items.length) {
    viewAllBtn.innerHTML = "View All";
    viewAllBtn.style.display = "none";
  }
};

// change information

const information01 = () => {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
};
const information02 = () => {
  document.getElementById("two").style.display = "block";
  document.getElementById("one").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
};
const information03 = () => {
  document.getElementById("three").style.display = "block";
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("four").style.display = "none";
};
const information04 = () => {
  document.getElementById("four").style.display = "block";
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
};

const related01 = () => {
  document.getElementById("one").style.display = "block";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
};
const related02 = () => {
  document.getElementById("two").style.display = "block";
  document.getElementById("one").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
};

// scroll up
