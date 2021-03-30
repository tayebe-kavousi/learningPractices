
$(function(){
    $('#add').on("click", function(){
        let val = $('#input').val();
        if (val != ''){
            let elem = $('<li></li>').html(val);
            elem.append('<i class=" trash far fa-trash-alt"></i>');
            elem.append('<i class=" check fas fa-check"></i>');
            $('#myList').append(elem);
            $('#input').val('');
            $('.trash').on('click', function(){
                $(this).parent().remove();
            });
            $('.check').on('click', function(){
                $(this).css('color', 'green');
                $(this).parent().css('color', 'green');
                $('.trash').css('color', 'black')
            });
        }
    });
});