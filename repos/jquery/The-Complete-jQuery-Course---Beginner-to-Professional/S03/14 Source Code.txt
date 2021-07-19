$(function () {
    $('.highlight, p').click(function(){
        console.log($(this));
        console.log(this);
    })
    $('a').on('click',function(e){
        e.preventDefault();
    })
    /*
    $('p').bind('click',function(){
        console.log('Bind CLicked');
    })
    */

    $('img').on('click',function(){
        console.log('on click hit');
    })
})