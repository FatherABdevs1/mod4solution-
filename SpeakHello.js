(function (window) {
   var helloSpeaker = {};
  helloSpeaker.names = ["Yaakov", "Paul", "Frank", "Larry", "Paula", "Laura"];
var speakWord = "Hello";

helloSpeaker.speak=function (name) {
  console.log(speakWord + "helloSpeaker.names" + name);
}

  window.helloSpeaker = helloSpeaker;
}) ();