
let thumb = document.querySelector('.thumb');
thumb.onmousedown = function(event){
    event.preventDefault();
    let shiftX = event.clientX - thumb.getBoundingClientRect().left;
    

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseup);

    function onMouseMove(event){
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
        if (newLeft < 0) newLeft = 0;
        if(newLeft > slider.offsetWidth - thumb.offsetWidth) newLeft = slider.offsetWidth - thumb.offsetWidth;
        thumb.style.left =`${newLeft}px`;

    }
    function onMouseup(){
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener('mouseup', onMouseup);
    }
    
};

thumb.ondragstart = function(){
    return false;
}