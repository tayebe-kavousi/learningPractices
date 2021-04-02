
$(function(){

    let tasks;
    //submit event on form :
    $('form').on('submit',handelSubmitForm);
    $('ul').on('click', handleCheckOrDelete);
    $('.deleteAll').on('click', handleDeleteAll);

    //handlers 

    function handelSubmitForm(event){
        event.preventDefault();
        let val = $('#input').val();
        if (val != ''){
            let htmlString = '<span class="toDoItem">'+ val+'</span>'
            let elem = $('<li class="toDo"></li>').html(htmlString);
            elem.append('<i class="edit fas fa-edit"></i>');
            elem.append('<i name="trash" class="trash far fa-trash-alt"></i>');
            elem.append('<i name="check" class="check fas fa-check"></i>');
            $('#myList').append(elem);
            $('#input').val('');

            tasks = $('li').get();
            if(tasks.length > 1){
                $('.deleteAll').removeClass('hidden');
            }
        }
    }

    function handleCheckOrDelete(e){
        let target = $(e.target);
        if(target.hasClass('check')){
            checkToDo(e);
        }
        if(target.hasClass('trash')){
            deleteToDo(e);
        }
        if(target.hasClass('edit')){
            editToDo(e);
        }
    }

    function deleteToDo (e){
        let item = $(e.target).parent();
        item.remove();
        tasks.pop();
        if(tasks.length < 2){
            $('.deleteAll').addClass('hidden');
        }
    }

    function checkToDo(e){
        let item = $(e.target).parent();
        if(item.hasClass('checked')){
            item.removeClass('checked');
        }else item.addClass('checked');
    }
     function editToDo(e){
        let item = $(e.target).parent();
        item.attr('contenteditable','true');
        item.height('2rem');
        item.focus();
     }

    function handleDeleteAll(){
        $('li').remove();
        $(this).addClass('hidden');
    }
});