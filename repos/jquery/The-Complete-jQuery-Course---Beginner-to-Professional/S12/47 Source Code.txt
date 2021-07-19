$(function () {
    $('.btn').css({
        'border': '1px solid black'
        , 'width': '150px'
        , 'padding': '10px'
    })
    $('.btn').click(function () {
        if ($(this).hasClass('btn-1')) {
            $('h1').load('hello.txt');
        }
        if ($(this).hasClass('btn-2')) {
            $('#output1').load('hello.html #two');
        }
        if ($(this).hasClass('btn-3')) {
            var url = 'hello.html';
            $('#output1').load(url, function (responseText, status, xhr) {
                console.log(responseText);
                console.log(status);
                console.log(xhr)
                if(status=="status"){
                    console.log("yes we connected");
                }
            });
        }
    })
})