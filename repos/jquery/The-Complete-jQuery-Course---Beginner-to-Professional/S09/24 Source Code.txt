$(function () {
    var newtext = '';
    
    $('.sel').change(function(){
      $('body').css('background-color',$(this).val())
    })
    
    
    $('input').focus(function(){
        $(this).css('background-color','yellow');
    })
    /*
    $('input').blur(function(){
        $(this).css('background-color','white');
    })
    */
    $('input').focusout(function(){
        $(this).css('background-color','white');
    })
    $('input').keypress(function(e){
        console.log(e.key);
        newtext += e.key;
        $('.highlight').text(newtext);
    })
    $('input').keydown(function(e){
        $(this).css('color','red');
    })
    $('input').keyup(function(e){
        $(this).css('color','blue');
    })
})