
$(function(){

    let toDoTasks;
    let doingTasks;
    let doneTasks;

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
            let htmlString = '<span class="textItem">'+ val+'</span>'
            let elem = $('<li class="toDoItem"></li>').html(htmlString);
            elem.append('<i class="edit fas fa-edit"></i>');
            elem.append('<i class="trash far fa-trash-alt"></i>');
            elem.append('<i class="start fas fa-play"></i>');
            $('#toDoList').append(elem);
            $('#placeHolderToDo').addClass('hidden');
            $('#input').val('');

            toDoTasks = $('#toDoList>li').get();
            if(toDoTasks.length > 1){
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
        if(item.hasClass('toDoItem')) toDoTasks.pop();
        if(item.hasClass('doingItem')) doingTasks.pop();
        if(item.hasClass('doneItem')) doneTasks.pop();
        if(toDoTasks.length < 2){
            $('.deleteAll').addClass('hidden');
        }
        if(toDoTasks.length == 0){
            $('#placeHolderToDo').removeClass('hidden')
        }
        if(doingTasks.length == 0){
            $('#placeHolderDoing').removeClass('hidden')
        }
        if(doneTasks.length == 0){
            $('#placeHolderDone').removeClass("hidden");
        }
    }

    function startToDo(e){
        let item = $(e.target).parent();
        item.addClass('started');
        $('#placeHolderDoing').addClass('hidden');
        $('#doingList').append(item);
        item.removeClass('toDoItem');
        item.addClass('doingItem');
        item.attr('contenteditable','true');
        $('li.started>i.start').remove();
        item.append('<i class="finish fas fa-check"></i>');
        toDoTasks.pop();
        if(toDoTasks.length == 0)$('#placeHolderToDo').removeClass('hidden');
        if(toDoTasks.length < 2){
            $('.deleteAll').addClass('hidden');
        }
        doingTasks = $('#doingList>li').get();
        console.log('doing task: ' + doingTasks);
    }
     function editToDo(e){
        let item = $(e.target).parent();
        item.attr('contenteditable','true');
        item.height('2rem');
        item.focus();
     }

    function handleDeleteAll(){
        $('#toDoList').remove();
        $(this).addClass('hidden');
        $('#placeHolderDone').removeClass("hidden");
        toDoTasks = [];
    }
    
});






