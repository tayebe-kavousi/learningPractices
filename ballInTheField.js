let moveTheBall = {
handleEvent(event){
    let ball = document.getElementById('ball');

    let fieldCoords = field.getBoundingClientRect();

    let ballCoords = {
      left : event.clientX - field.clientLeft - fieldCoords.left - ball.clientWidth/2,
      top : event.clientY - field.clientTop - fieldCoords.top - ball.clientWidth/2
    }
    if (ballCoords.top <0){
      ballCoords.top = 0;
    }
    if(ballCoords.top + ball.clientHeight > field.clientHeight){
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    if(ballCoords.left<0){
      ballCoords.left = 0;
    }
    if(ballCoords.left + ball.clientWidth > field.clientWidth){
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    ball.style.left = ballCoords.left + "px";      
    ball.style.top = ballCoords.top + "px"; 
  }
}


field.addEventListener('click', moveTheBall);