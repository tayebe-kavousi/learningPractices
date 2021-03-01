function findCoordinats(){
    let elem = document.getElementById('field');  
    let coord = elem.getBoundingClientRect();

    let topLeftOuterX = coord.left;
    let topLeftOuterY= coord.top;
    console.log(`1= (${topLeftOuterX} : ${topLeftOuterY})`);

    let topLeftInnerX= +coord.left + +parseInt(getComputedStyle(elem).borderLeftWidth) ;
    let topLeftInnerY= +coord.top + +parseInt(getComputedStyle(elem).borderTopWidth) ;
    console.log(`3= (${topLeftInnerX} : ${topLeftInnerY})`);

    let bottomRightInnerX = +coord.right - parseInt(getComputedStyle(elem).borderRightWidth) ;
    let bottomRightInnerY = coord.bottom - parseInt(getComputedStyle(elem).borderBottomWidth);
    console.log(`4= (${bottomRightInnerX} : ${bottomRightInnerY})`);

    let bottomRightOuterY = coord.bottom ;
    let bottomRightOuterX =coord.right ;
    console.log(`2= (${bottomRightOuterX} : ${bottomRightOuterY})`);
}

export {findCoordinats};