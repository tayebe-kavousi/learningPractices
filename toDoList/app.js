
$(function(){
    $('#add').on("click", function(){
        let val = $('#input').val();
        let tasks;
        if (val != ''){
            let elem = $('<li class="toDo"></li>').html(val);
            elem.append('<i class=" trash far fa-trash-alt"></i>');
            elem.append('<i class=" check fas fa-check"></i>');
            $('#myList').append(elem);
            $('#input').val('');
            tasks = $('li').get();
            console.log(tasks);
            if(tasks.length > 1){
                $('.deleteAll').removeClass('hidden');
            }
            $('.trash').on('click', function(){
                $(this).parent().remove();
                tasks.pop();
                console.log(tasks);
                if(tasks.length < 2){
                    $('.deleteAll').addClass('hidden');
                }
            });
            $('.check').on('click', function(){
                $(this).toggleClass('checked');
                $(this).parent().toggleClass('done');
                $('.trash').css('color', 'black')
            });
        }   
        
        $('.deleteAll').click(function(){
            $('li').remove();
            $(this).addClass('hidden');
        })
    });
});