$(function(){
    $("#word").keyup(function(){
        if ($('#word').val() != ""){
            $.ajax({
                url: "searchAjax.php",
                type: "post",
                data: {
                    name : $('#word').val(),
                    check : $("input[type='radio']:checked").val()
                }
            }).done(function(data) {
                $('ol').empty();
                $('ol').append(data);
            });
        } else{
            $('ol').empty();
        }
    });
  });

$(function(){
    $("#add").click(function(){
        $.ajax({
            url: "addAjax.php",
            type: "post",
            data: {
                add_dept : $('#dept').val(),
                add_name : $('#name').val()
            }
        }).done(function(data) {
            $('p').empty();
            $('p').append(data);
        });
    });
});