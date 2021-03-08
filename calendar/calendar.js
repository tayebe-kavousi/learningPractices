function createCalendar(elem, year, month){
    elem.append(createTable());
    let mon = month - 1;
    let date = new Date(year, mon);
    let trs = table.rows;
    
    for(let i = 1; i < trs.length; i++){
        for(let j = date.getDay(); j < trs[i].cells.length; j++){
            if(date.getMonth() == mon){
                trs[i].cells[j].innerHTML = date.getDate();
                date.setDate(date.getDate() + 1);
            }
        }
    }

    function createTable(elem){
        let table = document.createElement('table');
        table.id = 'table';
        let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

        for(let i = 0; i < 6; i++){
            let tr = document.createElement('tr');
            for(let j = 0; j < 7; j++){
                if(i == 0){
                    let th = document.createElement('th');
                    tr.append(th);
                    th.innerHTML = days[j];
                    th.style.backgroundColor = "pink";
                    continue;
                }
                let td = document.createElement('td');
                tr.append(td);
            }
            table.append(tr);
        }
        return table;
    }
    let info = document.createElement('caption');
    table.insertAdjacentElement("beforebegin", info);
    let months = {1:'JAN', 2:'FEB', 3:'MAR', 4:'APR', 5:'MAY', 6:'JUN', 7:'JUL', 8:'AGU', 9:'SEP', 10:'OCT', 11:'NOV', 12:'DEC'};
    info.innerHTML = year + " " + months[month];
    info.style.cssText= "width:198px; background-color: #999; "
}

let div = document.querySelector('.calendar');
createCalendar(div, 2021, 4);

// add events delegation to table :
let selectedTD;
table.onclick = function(event) {
                    let target = event.target;
                    if(target.tagName != 'TD') return;
                    highLight(target);
                };

function highLight(td){
    if(selectedTD){
        selectedTD.classList.remove('highlight');
    }
    selectedTD = td;
    selectedTD.classList.add('highlight');
}

