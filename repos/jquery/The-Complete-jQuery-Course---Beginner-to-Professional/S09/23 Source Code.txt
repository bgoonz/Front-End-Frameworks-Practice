$(function () {
    var counter = 0;
    /*
    $('.highlight').click(function(){
        counter++;
        $(this).text("clicked "+counter);
    })
    $('.highlight').dblclick(function(){
        $(this).text("Double Click!! ");
    })
    $('.highlight').hover(function(){
        $(this).text("Hover Over Me!! ");
    })
    */
    $('.highlight').mousedown(function(){
        $(this).text("Mouse Down!! ");
    })
    $('.highlight').mouseup(function(){
        $(this).text("Mouse Up!! ");
    })
    $('.highlight').mouseenter(function(){
        $(this).text("Mouse Enter!! ");
    })
    $('.highlight').mouseout(function(){
        $(this).text("Mouse Out! ");
    })
    $('.highlight').mouseleave(function(){
        $(this).text("Mouse Leave!! ");
    })
    $('.highlight').mousemove(function(){
        $(this).text("Mouse Move!! ");
    })
    $('.highlight').mouseover(function(){
        $(this).text("Mouse Over! ");
    })
})