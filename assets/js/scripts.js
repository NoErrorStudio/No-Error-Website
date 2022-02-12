//Countdown timer
var countDownDate = new Date("March 1, 2022 00:00:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + "days " + hours + "hours "
  + minutes + "minutes " + seconds + "seconds ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Coming Soon!";
  }
}, 1000);

//randomized text
var texts = [
  "Programming is like sex: One mistake and you have to support it for the rest of your life.",
  "Copy-and-Paste was programmed by programmers for programmers actually",
  "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live",
  "Think like a proton. Always positive.",
  "The question isn’t who is going to let me, it’s who is going to stop me.",
  "Nothing is impossible, the word itself says “I’m possible!",
  "Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger."

];
var randomText = Math.floor(Math.random() * texts.length);
document.getElementById('parsedtext').innerHTML = texts[randomText];


//scrolling title
title = "NoError™️";
position = 0;
function scrolltitle() {
    document.title = title.substring(position, title.length) + title.substring(0, position); 
    position++;
    if (position > title.length) position = 0;
    titleScroll = window.setTimeout(scrolltitle,170);
}
scrolltitle();


//random extra shit idk
//////////F12 disable code////////////////////////
          document.onkeypress = function (event) {
              event = (event || window.event);
              if (event.keyCode == 123) {
                 //alert('No F-12');
                  return false;
              }
          }
          document.onmousedown = function (event) {
              event = (event || window.event);
              if (event.keyCode == 123) {
                  //alert('No F-keys');
                  return false;
              }
          }
      document.onkeydown = function (event) {
              event = (event || window.event);
              if (event.keyCode == 123) {
                  //alert('No F-keys');
                  return false;
              }
          }
      var message=":o";      
      function clickIE() {if (document.all) {(message);return false;}}
      function clickNS(e) {if
      (document.layers||(document.getElementById&&!document.all)) {
      if (e.which==2||e.which==3) {(message);return false;}}}
      if (document.layers)
      {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
      else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
      document.oncontextmenu=new Function("return false")
      function disableCtrlKeyCombination(e)
      {
      var forbiddenKeys = new Array('a', 'n', 'c', 'x', 'v', 'j' , 'w');
      var key;
      var isCtrl;
      if(window.event)
      {
      key = window.event.keyCode;
      if(window.event.ctrlKey)
      isCtrl = true;
      else
      isCtrl = false;
      }
      else
      {
      key = e.which;
      if(e.ctrlKey)
      isCtrl = true;
      else
      isCtrl = false;
      }
      if(isCtrl)
      {
      for(i=0; i<forbiddenKeys.length; i++)
      {
      if(forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase())
      {
      alert('Key combination CTRL + '+String.fromCharCode(key) +' has been disabled.');
      return false;
      }
      }
      }
      return true;
      }