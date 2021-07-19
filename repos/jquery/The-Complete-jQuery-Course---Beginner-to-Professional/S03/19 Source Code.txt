$(function () {
    $('span').css({
        "border-color": "red",
        "border-width":"1px",
        "border-style":"solid",
        "padding":"1px"
    })
    $('span').click(function(){
        $(this).siblings().text("I'm a Brother or Sister")
    })
})