// See: http://youmightnotneedjquery.com/#ready
function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState != "loading") fn();
    });
  }
}

// See: http://youmightnotneedjquery.com/#add_class
function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else element.className += " " + className;
}

ready(() => {
  var hightClassName = "highlight"; // See 01.css
  var poemStanzas = document.querySelectorAll(".poem-stanza"); // Lookup all nodes with class poem-stanza
  for (var i = 0; i < poemStanzas.length; ++i) {
    var poemStanza = poemStanzas[i];
    addClass(poemStanza, hightClassName);
  }
});
