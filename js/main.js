const hp_logo_category = document.querySelector(".hp_logo_category");
const navHeight = 70;
let lastScrollY = 0;
const delta = 10;
function scrolled() {
  let sy = window.scrollY;
  if (Math.abs(lastScrollY - sy) > delta) {
    if (sy > lastScrollY && sy > navHeight) {
        hp_logo_category.classList.add("scroll-up");
    } 
    else if (sy < lastScrollY) {
        hp_logo_category.classList.remove("scroll-up");
    }
   lastScrollY = sy 
  }
}
let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)

// scrolling load change background color 
window.onscroll = () => {
  const header = document.querySelector('#hp_scroll_load_change_background');
  if(this.scrollY <= 1)
    header.className = ''; 
  else {
    header.className = 'scroll';
  }
};
// end scrolling load chagne background color 





$(document).ready(function(){
  $('.hp_slide_info').slick({
  slidesToShow: 4,
  slidestoScroll:1,
  autoplay:true,
  // dots:true,
  centerMode: true,
  prevArrow:'.next',
  nextArrow:'.next-right',
  });
});









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










var incrementQty;
var decrementQty;
var plusBtn = $(".qtyplus");
var incrementQty = plusBtn.click(function() {
    var $n = $(this)
        .parent(".new-category-quantity")
        .find(".info");
    $n.val(Number($n.val()) + 1);
});