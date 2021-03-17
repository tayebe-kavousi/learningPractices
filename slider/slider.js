
let thumb = document.querySelector('.thumb');
let shiftX;

thumb.onpointerdown = function(event){
    event.preventDefault();
    shiftX = event.clientX - thumb.getBoundingClientRect().left;
    thumb.setPointerCapture(event.pointerId);
    
};

thumb.addEventListener('pointermove',function(event){
    if(!event.target.hasPointerCapture(event.pointerId)) return;
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
    if (newLeft < 0) newLeft = 0;
    if(newLeft > slider.offsetWidth - thumb.offsetWidth) newLeft = slider.offsetWidth - thumb.offsetWidth;
    thumb.style.left =`${newLeft}px`;
});

thumb.ondragstart = () => false;