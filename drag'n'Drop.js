let currentDroppable = null;

// ball mousedown
ball.onmousedown = function(event) {
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      ball.hidden = true;
      let elemBellow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;
      if (!elemBellow) return;
      let droppableBellow = elemBellow.closest('.droppable');
      if(currentDroppable != droppableBellow){
        if(currentDroppable){
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBellow;
        if(currentDroppable){
          enterDroppable(currentDroppable);
        }
      }
    }
    
    // document mousemove 
    document.addEventListener('mousemove', onMouseMove);

    // ball mouseup
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };

    function enterDroppable(elem) {
        elem.style.background = 'pink';
    }
  
    function leaveDroppable(elem) {
        elem.style.background = '';
    }

    ball.ondragstart = function(){
        return false;
    }
  
  };