let area = null;
let view = document.getElementById('view');
view.onclick = function(){
  startEdit();
}
function startEdit(){
  area = document.createElement('textarea');
  area.className = 'edit';
  area.value = view.innerHTML;

  area.onkeydown = function(event){
    if(event.key == 'Enter'){
      this.blur();
    }
  };
  area.onblur = function(){
    endEdit();
  }
  view.replaceWith(area);
  area.focus();
}
function endEdit(){
  view.innerHTML = area.value;
  area.replaceWith(view);
}