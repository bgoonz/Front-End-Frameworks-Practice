$(function(){
    console.log('Document is ready to use');
    $('p').hide();
    $('h1').hide();
    //$('p').show()
})

function hideme(sel){
  document.querySelector(sel).style.display="none";
}
//http://youmightnotneedjquery.com/