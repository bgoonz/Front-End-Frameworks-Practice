$(function () {
    $('.btn').css({
        'border': '1px solid black'
        , 'padding': '10px'
        , 'width': '150px'
    }).click(function () {
        if($(this).index()==1){
            /*$('#output2').fadeIn(500,function(){
                console.log('Fade In ready');
            });
            */
            $('#output2').fadeTo(1000,0.5,function(){
                console.log('Faded to 50%')
            })
        };
        if($(this).index()==2){
            $('#output2').fadeOut(1000);
        };
        if($(this).index()==3){
            $('#output2').fadeToggle("fast");
        }
        
        
    })
    $('.highlight').click(function(){
        $(this).fadeOut();
    })
})