grid.onclick = function(event){
    let id = event.target.dataset.type;
    let index = event.target.cellIndex; 
    for(let i= 1 ; i<grid.rows.length; i++){
        grid.rows[i].cells[index].id = id;
    }
    let list = grid.querySelectorAll('#id');
    if(typeof id == "number"){
     list.sort((a,b)=>a-b);
    }
    console.log(list)
}
