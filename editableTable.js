let table = document.getElementById('bagua-table');
let area = null;
table.onclick = function(event){
    // 3 possible target : td,w 
    let td = event.target;
    area = document.createElement('textarea');
    td.replaceWith(area);
    area.value = td.outerHTML;
    area.focus();
}