
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
            elem.append('<i class="trash far fa-trash-alt"></i>');
            elem.append('<i class="check fas fa-check"></i>');
            $('#myList').append(elem);
            $('#input').val('');

            tasks = $('li').get();
            if(tasks.length > 1){
                $('.deleteAll').removeClass('hidden');
            }
        }
    }

    function handleCheckOrDelete(event){
        if(event.target.hasClass('check')){
            checkToDo(event);
        }
        if(event.target.hasClass('trash')){
            deleteToDo(event);
        }
    }

    function checkToDo(event){
        $(this).parent().remove();
        tasks.pop();
        if(tasks.length < 2){
            $('.deleteAll').addClass('hidden');
        }
    }

    function deleteToDo(event){
        if($(this).parent().hasClass('checked')){
            $(this).parent().removeClass('checked');
        }else $(this).parent().addClass('checked');
    }
    

    function handleDeleteAll(){
        $('li').remove();
        $(this).addClass('hidden');
    }
});