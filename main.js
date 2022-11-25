var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";

    recognition.start();

    Webcam.attach("#camera");
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;

   
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format: 'jpeg',
    jpeg_quality:90
});


