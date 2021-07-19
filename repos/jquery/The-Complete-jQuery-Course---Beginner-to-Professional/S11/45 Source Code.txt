$(function () {
    //https://api.jquery.com/category/utilities/
    var myArray = ['hello', 'world', 55]
    $('#output1,#output2').css({
        'position': 'relative'
    })
    $('.btn').css({
        'border': '1px solid black'
        , 'width': '150px'
        , 'padding': '10px'
    })
    $('.btn').first().click(function () {
        if ($.isArray(myArray)) {
            $.each(myArray, function (index, value) {
                console.log(index, value);
            })
        }
    })
    $('.btn:eq(1)').click(function () {
        var tempVal = $.trim($('#input1').val());
        console.log($.inArray(tempVal, myArray));
    })
    $('.btn').last().click(function () {})
})