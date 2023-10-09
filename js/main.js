
// scrolling load change background color 
// window.onscroll = () => {
//   const header = document.querySelector('#hp_scroll_load_change_background');
//   if(this.scrollY <= 1)
//     header.className = ''; 
//   else {
//     header.className = 'scroll';
//   }
// };
// end scrolling load chagne background color 



// slick slide scroll 

$(document).ready(function(){
  $('.hp_slide_info').slick({
  slidesToShow: 4,
  slidestoScroll:1,
  infinite: true,
  // autoplay:true,
  // dots:true,
  centerMode: true,
  prevArrow:'.hp_cheron_left',
  nextArrow:'.hp_cheron_right',
  });
});

// end slick slide scroll 

// js link to display image 

const information1 = () => {
  document.getElementById("first").style.display ='block';
  document.getElementById("second").style.display ='none'
  document.getElementById("third").style.display ='none'
}

const information2 = () => {
  document.getElementById("second").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("third").style.display ='none'
}

const information3 = () => {
  document.getElementById("third").style.display ='block'
  document.getElementById("first").style.display ='none'
  document.getElementById("second").style.display ='none'
}

// end js link to display image 

// js icon like sum 

var incrementQty;
var decrementQty;
var plusBtn = $(".qtyplus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
        .parent(".new-category-quantity")
        .find(".info");
    $n.val(Number($n.val()) + 1);
});

// end js icon like sum 

// js dot three 

function showDropdown() {
  document.getElementById("hp_dropdown_list").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      } 
  }
}

function showDropdown1() {
  document.getElementById("hp_dropdown_list1").classList.toggle("show1");

}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show1')) {
              openDropdown.classList.remove('show1');
          }
      }
  }
}
function showDropdown2() {
  document.getElementById("hp_dropdown_list2").classList.toggle("show2");

}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show2')) {
              openDropdown.classList.remove('show2');
          }
      }
  }
}

// end js dot three


// progress scroll header 
const progressContainerEl = document.querySelector(".post-container");
const progressBarEl = document.querySelector(".progress-bar-container__progress");

// function to check scroll position and update scroll progress bar accordingly
const updateScrollProgressBar = () => {
  // get full scroll height
  const scrollHeight = progressContainerEl.scrollHeight - heightInViewport(progressContainerEl);
  console.log(scrollHeight);
  // get current scroll position
  const scrollPosition = progressContainerEl.scrollTop;
  
  // get scroll percentage and set width of progress bar
  const scrollPercentage = (scrollPosition / scrollHeight) * 98;
  progressBarEl.style.width = scrollPercentage + "%";
}

// bind window onload and onscroll events to update scroll progress bar width
progressContainerEl.addEventListener("scroll", updateScrollProgressBar)
progressContainerEl.addEventListener("load", updateScrollProgressBar)


function heightInViewport(el) {
    var elH = el.offsetHeight,
        H   = document.body.offsetHeight,
        r   = el.getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

// end progress scroll header 




