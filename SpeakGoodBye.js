(function () {

 var byeSpeaker = "Good Bye"

var speakWord = "Good Bye";


byeSpeaker.speak=function speak(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;
}) (window)