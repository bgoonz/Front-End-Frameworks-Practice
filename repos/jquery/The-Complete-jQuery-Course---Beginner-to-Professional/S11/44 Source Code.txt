$(function () {
    $('#output1,#output2').css({
        'position': 'relative'
    })
    $('.btn').css({
        'border': '1px solid black'
        , 'width': '150px'
        , 'padding': '10px'
    })
    $('.btn').first().click(function () {
        var option = {
            duration: 500
        }
        $('#output1').animate({
            left: 200
            , top: 50
        }, option).animate({
            left: 100
            , top: 70
        }, option).animate({
            left: 50
            , top: 150
            , opacity: 'toggle'
        }, option).animate({
            left: 250
            , top: 50
            , opacity: 'toggle'
        }, option)
    })
    $('.btn:eq(1)').click(function () {
        $('#output2').animate({
            left: '+=50'
        }, {
            duration: 5000
            , step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            }
        }).animate({
            left: '+=50'
        }, {
            duration: 1000
            , step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            }
        }).animate({
            left: '+=50'
        }, {
            duration: 1000
            , step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            }
        })
    })
    $('.btn').last().click(function () {})
})