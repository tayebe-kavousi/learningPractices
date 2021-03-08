document.querySelectorAll('.pane').forEach(element => { element.insertAdjacentHTML('afterbegin', '<button class="remove-button" data-closing-button>[x]</button>') });
// document.querySelectorAll('.remove-button').forEach(button=>{
//   button.addEventListener('click', event=>{button.parentElement.style.display = "none"})
// });

//useing event delegation
document.addEventListener("click", function(event){
  if(event.target.dataset.closingButton!= undefined){
  let button = event.target;
  button.parentElement.style.display = "none";
  console.log("hey")
  }
});