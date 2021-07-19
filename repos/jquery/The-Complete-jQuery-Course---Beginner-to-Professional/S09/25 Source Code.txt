$(function () {

   $(window).resize(function(){
   $('.highlight').html(($(window).width()));
   })
    $(window).scroll(function(){
        console.log('scrolling');
    })
})