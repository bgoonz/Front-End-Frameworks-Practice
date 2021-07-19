$(function () {
    $('#output1').css({'position':'relative'})
    $('.btn').css({'border':'1px solid black','width':'150px','padding':'10px'})
    $('.btn').first().click(function(){
        $('#output1').animate({
            "padding":"20px",
            fontSize:"75px",
            opacity:"0.5",
            left:"300px",
            top:"50px"
        },5000)
    })
    $('.btn:eq(1)').click(function(){
        $('#output1').stop()
    })
    $('.btn').last().click(function(){
        console.log('thrid');
    })
})