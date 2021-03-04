document.querySelectorAll('.pane').forEach(element => { element.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>') });
document.querySelectorAll('.remove-button').forEach(button=>{
  button.addEventListener('click', event=>{button.parentElement.style.display = "none"})
});