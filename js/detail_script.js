function Dropdown1() {
  document.getElementById("hp_dropdown_list1").classList.toggle("show1");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show1")) {
        openDropdown.classList.remove("show1");
      }
    }
  }
};
function Dropdown2() {
  document.getElementById("hp_dropdown_list2").classList.toggle("show2");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show2")) {
        openDropdown.classList.remove("show2");
      }
    }
  }
};
function Dropdown3() {
  document.getElementById("hp_dropdown_list3").classList.toggle("show3");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show3")) {
        openDropdown.classList.remove("show3");
      }
    }
  }
};
function Dropdown4() {
  document.getElementById("hp_dropdown_list4").classList.toggle("show4");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show4")) {
        openDropdown.classList.remove("show4");
      }
    }
  }
};
function Dropdown5() {
  document.getElementById("hp_dropdown_list5").classList.toggle("show5");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show5")) {
        openDropdown.classList.remove("show5");
      }
    }
  }
};
function Dropdown6() {
  document.getElementById("hp_dropdown_list6").classList.toggle("show6");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show6")) {
        openDropdown.classList.remove("show6");
      }
    }
  }
};
function Dropdown7() {
  document.getElementById("hp_dropdown_list7").classList.toggle("show7");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show7")) {
        openDropdown.classList.remove("show7");
      }
    }
  }
};
function Dropdown8() {
  document.getElementById("hp_dropdown_list8").classList.toggle("show8");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show8")) {
        openDropdown.classList.remove("show8");
      }
    }
  }
};
function Dropdown9() {
  document.getElementById("hp_dropdown_list9").classList.toggle("show9");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show9")) {
        openDropdown.classList.remove("show9");
      }
    }
  }
};
function Dropdown10() {
  document.getElementById("hp_dropdown_list10").classList.toggle("show10");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show10")) {
        openDropdown.classList.remove("show10");
      }
    }
  }
};
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

function readmore5() {
  var dots = document.querySelector("#dots5");
  var moreText = document.querySelector("#more5");
  var btnText = document.querySelector("#btn5");

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
function readmore6() {
  var dots = document.querySelector("#dots6");
  var moreText = document.querySelector("#more6");
  var btnText = document.querySelector("#btn6");

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
function readmore7() {
  var dots = document.querySelector("#dots7");
  var moreText = document.querySelector("#more7");
  var btnText = document.querySelector("#btn7");

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
function readmore8() {
  var dots = document.querySelector("#dots8");
  var moreText = document.querySelector("#more8");
  var btnText = document.querySelector("#btn8");

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
function readmore9() {
  var dots = document.querySelector("#dots9");
  var moreText = document.querySelector("#more9");
  var btnText = document.querySelector("#btn9");

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
function readmore10() {
  var dots = document.querySelector("#dots10");
  var moreText = document.querySelector("#more10");
  var btnText = document.querySelector("#btn10");

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
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";
  //click and hide
  document.getElementById("popular01").style.display = "none";
  document.getElementById("popular02").style.display = "block";
  document.getElementById("popular03").style.display = "block";
  document.getElementById("popular04").style.display = "block";
  document.getElementById("popular05").style.display = "block";
  document.getElementById("popular06").style.display = "block";
  document.getElementById("popular07").style.display = "block";
};
const information02 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "block";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";

  //click and hide
  document.getElementById("popular01").style.display = "block";
  document.getElementById("popular02").style.display = "none";
  document.getElementById("popular03").style.display = "block";
  document.getElementById("popular04").style.display = "block";
  document.getElementById("popular05").style.display = "block";
  document.getElementById("popular06").style.display = "block";
  document.getElementById("popular07").style.display = "block";
};
const information03 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "block";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";

  //click and hide
  document.getElementById("popular01").style.display = "block";
  document.getElementById("popular02").style.display = "block";
  document.getElementById("popular03").style.display = "none";
  document.getElementById("popular04").style.display = "block";
  document.getElementById("popular05").style.display = "block";
  document.getElementById("popular06").style.display = "block";
  document.getElementById("popular07").style.display = "block";
};
const information04 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "block";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";

  //click and hide
  document.getElementById("popular01").style.display = "block";
  document.getElementById("popular02").style.display = "block";
  document.getElementById("popular03").style.display = "block";
  document.getElementById("popular04").style.display = "none";
  document.getElementById("popular05").style.display = "block";
  document.getElementById("popular06").style.display = "block";
  document.getElementById("popular07").style.display = "block";
};
const information05 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "block";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";

  //click and hide
  document.getElementById("popular01").style.display = "block";
  document.getElementById("popular02").style.display = "block";
  document.getElementById("popular03").style.display = "block";
  document.getElementById("popular04").style.display = "block";
  document.getElementById("popular05").style.display = "none";
  document.getElementById("popular06").style.display = "block";
  document.getElementById("popular07").style.display = "block";
};
const information06 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "block";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";

  //click and hide
  document.getElementById("popular01").style.display = "block";
  document.getElementById("popular02").style.display = "block";
  document.getElementById("popular03").style.display = "block";
  document.getElementById("popular04").style.display = "block";
  document.getElementById("popular05").style.display = "block";
  document.getElementById("popular06").style.display = "none";
  document.getElementById("popular07").style.display = "block";
};
const information07 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "block";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";

  //click and hide
  document.getElementById("popular01").style.display = "block";
  document.getElementById("popular02").style.display = "block";
  document.getElementById("popular03").style.display = "block";
  document.getElementById("popular04").style.display = "block";
  document.getElementById("popular05").style.display = "block";
  document.getElementById("popular06").style.display = "block";
  document.getElementById("popular07").style.display = "none";
};

const related01 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "block";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";
};
const related02 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "block";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";
};
const related03 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "block";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";
};
const related04 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "block";
  document.getElementById("ten").style.display = "none";
};
const related05 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "block";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "none";
};
const related06 = () => {
  document.getElementById("one").style.display = "none";
  document.getElementById("two").style.display = "none";
  document.getElementById("three").style.display = "none";
  document.getElementById("four").style.display = "none";
  document.getElementById("five").style.display = "none";
  document.getElementById("sex").style.display = "none";
  document.getElementById("seven").style.display = "none";
  document.getElementById("eight").style.display = "none";
  document.getElementById("nine").style.display = "none";
  document.getElementById("ten").style.display = "block";
};
