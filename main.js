Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach('camera');

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="sefie" src="'+data_uri+'">';
    });
}

console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/gJ3y3zHf4/model.json", modelLoaded);

function modelLoaded(){
    console.log('Model is loaded');
}

prediction_1="";
prediction_2="";

function talk(){
    var synth=window.speechSynthesis;
    data_speak="The first prediction is "+prediction_1;
    data_speak2="the secon prediction is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(data_speak+data_speak1);
    synth.speak(utterThis);
}
