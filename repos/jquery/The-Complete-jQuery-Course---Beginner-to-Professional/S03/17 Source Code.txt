$(function () {
    $('ul').attr('title','This is my list :)');
    $('.btn').click(function(){
        var eleKids = $('p').children(); 
        console.log(eleKids);
        
    })
    $('span').click(function(){
        var eleDad = $(this).parent().parent().attr('title');
        console.log(eleDad);
    })
    

   
    
    
})