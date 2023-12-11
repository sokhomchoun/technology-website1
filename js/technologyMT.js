
document.getElementById('nextImage').onclick = function(){
    let lists = document.querySelectorAll('.itemTech');
    document.getElementById('slideTech').appendChild(lists[0]);
}
document.getElementById('prevImage').onclick = function(){
    let lists = document.querySelectorAll('.itemTech');
    document.getElementById('slideTech').prepend(lists[lists.length-1]);
}
