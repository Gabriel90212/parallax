let text = document.getElementById('text');
let img1 = document.getElementById('img1');
let img4 = document.getElementById('img4');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    text.style.marginBottom = value * -1.5+'px';
    img1.style.left = value * 1.5 +'px';
    img4.style.right = value * 1.5+'px';
})