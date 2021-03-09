thumbs.onclick = function(e){

    function changeImage(href, title){
        let largeImg = document.getElementById('largeImg');
        largeImg.src= href;
        largeImg.alt = title;
    }
    
    let target = e.target.closest('a');
    if(!target) return;
    changeImage(target.href, target.title);
    return false;
}