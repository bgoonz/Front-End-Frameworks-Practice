$(function () {
    //https://codepen.io/discoveryvip/pen/rJoyZQ?editors=1011
    //https://api.jquery.com/jQuery.ajax/
    $('.btn').css({
        'border': '1px solid black'
        , 'width': '150px'
        , 'padding': '10px'
    })
    $('.btn-1').click(function (e) {
        $.ajax({
            url: 'http://api.myjson.com/bins/23xvb'
            , dataType: 'json'
            , success: (function (data) {
                console.log('SUCCESS');
                console.log(data);
            })
        }).done(function (rp, status, xhr) {
            console.log('DONE');
            console.log(rp)
            console.log(status)
            console.log(xhr)
        }).fail(function () {
            console.log('FAIL')
        }).always(function () {
            console.log('ALWAYS')
        })
    })
    $('.btn-2').click(function (e) {
        var url = 'http://api.myjson.com/bins/23xvb';
        $.get(url, function (d) {
            $('h1').html(d.firstName + ' ' + d.lastName);
        })
    })
    $('.btn-3').click(function (e) {
        var url = 'http://api.myjson.com/bins/23xvb';
        $.getJSON(url, function (d) {
            $('h1').html(d.lastName + ' ' + d.firstName);
        })
    })
})