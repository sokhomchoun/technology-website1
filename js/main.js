// slick slide scroll 

$(document).ready(function(){
  $('.hp_slide_info').slick({
  slidesToShow: 4,
  slidestoScroll:1,
  infinite: true,
  prevArrow:'.hp_cheron_left',
  nextArrow:'.hp_cheron_right',
  });
});

$(document).ready(function(){
  $('.hp_slide_info2').slick({
  slidesToShow: 4,
  slidestoScroll:1,
  infinite: true,
  prevArrow:'.hp_cheron_left_new',
  nextArrow:'.hp_cheron_right_new',
  });
});
// end slick slide scroll 

// js link to display image 

const information1 = () => {
  document.getElementById("first").style.display ='block';
  document.getElementById("second").style.display ='none';
  document.getElementById("third").style.display ='none';
  document.getElementById("third1").style.display ='none';
  document.getElementById("third2").style.display ='none';
}

const information2 = () => {
  document.getElementById("second").style.display ='block';
  document.getElementById("first").style.display ='none';
  document.getElementById("third").style.display ='none';
  document.getElementById("third1").style.display ='none';
  document.getElementById("third2").style.display ='none';
}

const information3 = () => {
  document.getElementById("third").style.display ='block';
  document.getElementById("third1").style.display ='none';
  document.getElementById("third2").style.display ='none';
  document.getElementById("first").style.display ='none';
  document.getElementById("second").style.display ='none';
}

const information33 = () => {
  document.getElementById("third1").style.display ='block';
  document.getElementById("third2").style.display ='none';
  document.getElementById("third").style.display ='none';
  document.getElementById("first").style.display ='none';
  document.getElementById("second").style.display ='none';
}
const information34 = () => {
  document.getElementById("third2").style.display ='block';
  document.getElementById("third1").style.display ='none';
  document.getElementById("third").style.display ='none';
  document.getElementById("first").style.display ='none';
  document.getElementById("second").style.display ='none';
}



// js like recomment page
const information4 = () => {
  document.getElementById("four").style.display ='block';
  document.getElementById("five").style.display ='none';
  document.getElementById("six").style.display ='none';
  document.getElementById("seven").style.display ='none';
  document.getElementById("eight").style.display ='none';
}

const information5 = () => {
  document.getElementById("five").style.display ='block';
  document.getElementById("four").style.display ='none';
  document.getElementById("six").style.display ='none';
  document.getElementById("seven").style.display ='none';
  document.getElementById("eight").style.display ='none';
}

const information6 = () => {
  document.getElementById("six").style.display ='block' ;
  document.getElementById("seven").style.display ='none';
  document.getElementById("eight").style.display ='none';
  document.getElementById("four").style.display ='none';
  document.getElementById("five").style.display ='none';
}
const information7 = () => {
  document.getElementById("seven").style.display ='block';
  document.getElementById("eight").style.display ='none';
  document.getElementById("six").style.display ='none';
  document.getElementById("four").style.display ='none';
  document.getElementById("five").style.display ='none';
}
const information8 = () => {
  document.getElementById("eight").style.display ='block';
  document.getElementById("seven").style.display ='none';
  document.getElementById("six").style.display ='none';
  document.getElementById("four").style.display ='none';
  document.getElementById("five").style.display ='none';
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

  // click show three dot

function showDropdown5() {
  document.getElementById("hp_dropdown_list5").classList.toggle("show5");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show5')) {
              openDropdown.classList.remove('show5');
          }
      } 
  }
}

function showDropdown6() {
  document.getElementById("hp_dropdown_list6").classList.toggle("show6");

}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show6')) {
              openDropdown.classList.remove('show6');
          }
      }
  }
}
function showDropdown7() {
  document.getElementById("hp_dropdown_list7").classList.toggle("show7");

}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show7')) {
              openDropdown.classList.remove('show7');
          }
      }
  }
}


// end js dot three


// progress scroll header 
const progressContainerEl = document.querySelector(".post-container");
const progressBarEl = document.querySelector(".progress-bar-container__progress");
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

// Reverted back to non-arrow functions because it would break IE11 completely.

var observer = new IntersectionObserver(
	function (entries) {
		entries.forEach(function (entry) {
			var el = entry.target;
			if (entry.isIntersecting) {
				el.classList.add("animate");
				return;
			}
		});
	},
	{ threshold: 0.2 }
);

document.querySelectorAll(".animation").forEach(function (i) {
	if (i) {
		observer.observe(i);
	}
});












