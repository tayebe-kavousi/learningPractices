
$(function(){
    let tasks;

    $('#add').click(function(){
        let val = $('#input').val();
        if (val != ''){
            let elem = $('<li class="toDo"></li>').html(val);
            elem.append('<i class="trash far fa-trash-alt"></i>');
            elem.append('<i class="check fas fa-check"></i>');
            $('#myList').append(elem);
            $('#input').val('');

            tasks = $('li').get();
            if(tasks.length > 1){
                $('.deleteAll').removeClass('hidden');
            }
        }

        $('.trash').on('click', function(){
            $(this).parent().remove();
            tasks.pop();
            if(tasks.length < 2){
                $('.deleteAll').addClass('hidden');
            }
        });
    
        $('.check').click(function(){
            if($(this).parent().hasClass('checked')){
                $(this).parent().removeClass('checked');
            }else $(this).parent().addClass('checked');
        });
    });

    $('.deleteAll').click(function(){
        $('li').remove();
        $(this).addClass('hidden');
    });
});