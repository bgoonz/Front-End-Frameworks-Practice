$(function () {
    $('li:gt(3)').css('color', 'blue')
    $('li:lt(3)').css('color', 'green')
    $('li:eq(3)').css('color', 'red')
        /*
$('.highlight:eq(2)').css("color","blue");
$('.highlight:nth-child(2)').css('color','blue');
    
for(x=0;x<$('li').length;x++){
    $('li:eq('+x+')').html(x+1)
}    
*/
})