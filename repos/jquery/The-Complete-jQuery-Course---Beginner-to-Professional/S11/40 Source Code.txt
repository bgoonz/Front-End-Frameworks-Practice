$(function () {
    $('.btn').css({
        'border': '1px solid black'
        , 'padding': '10px'
        , 'width': '150px'
    }).click(function () {
        if($(this).index()==1){
            $('#output2').slideUp(5000);
        };
        if($(this).index()==2){
            $('#output2').slideDown(1000);
        };
        if($(this).index()==3){
            $('#output2').slideToggle("fast");
        }
    })
})