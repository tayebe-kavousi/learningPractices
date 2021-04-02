
$(function(){

    let tasks;
    //submit event on form :
    $('form').on('submit',handelSubmitForm);
    $('ol').on('click', handle_start_Delete_edit);
    $('.deleteAll').on('click', handleDeleteAll);
    $(document).on('dbclick', function(e){
        e.preventDefault();
    });
    //handlers 

    function handelSubmitForm(event){
        event.preventDefault();
        let val = $('#input').val();
        if (val != ''){
            let htmlString = '<span class="toDoItem">'+ val+'</span>'
            let elem = $('<li class="toDo"></li>').html(htmlString);
            elem.append('<i class="edit fas fa-edit"></i>');
            elem.append('<i name="trash" class="trash far fa-trash-alt"></i>');
            elem.append('<i name="start" class="start fas fa-check"></i>');
            $('#myList').append(elem);
            $('#input').val('');

            tasks = $('li').get();
            if(tasks.length > 1){
                $('.deleteAll').removeClass('hidden');
            }
        }
    }

    function handle_start_Delete_edit(e){
        let target = $(e.target);
        if(target.hasClass('start')){
            startToDo(e);
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

    function startToDo(e){
        let item = $(e.target).parent();
        item.addClass('started');
        $('#placeHolderInProgress').remove();
        $('.itemsInProgress').append(item);
        item.removeClass('toDo');
        
        $('li.started>i').remove();
        tasks.pop();
        console.log(tasks);
        if(tasks.length < 2){
            $('.deleteAll').addClass('hidden');
        }
    }
     function editToDo(e){
        let item = $(e.target).parent();
        item.attr('contenteditable','true');
        item.height('2rem');
        item.focus();
     }

    function handleDeleteAll(){
        $('#myList>li').remove();
        $(this).addClass('hidden');
    }
});






