//  read more btn

function readmore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn-readmore");
  
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

let viewAllBtn = document.querySelector('#view-all');
let currentItem = 3;

viewAllBtn.onclick = () =>{
   let items = [...document.querySelectorAll('.related-item')];
   for (var i = currentItem; i < currentItem + 3; i++){
      items[i].style.display = 'inline-block';
   }
   currentItem += 3;

   if(currentItem >= items.length){
      viewAllBtn.innerHTML = "View All"; 
      viewAllBtn.style.display = 'none';
  }
}