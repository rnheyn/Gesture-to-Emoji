Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function(Uri){
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+Uri+'"/>'
    })
}
console.log(ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Z-k1bP4KE/model.json',modelLoaded)
function modelLoaded() {
    console.log('modelLoaded')
    speak()
}
prediction1=""
prediction2=""
function speak() {
    s=window.speechSynthesis
    d1="The first prediction is "+prediction1
    d2="The second prediction is "+prediction2
    u=new SpeechSynthesisUtterance(d1+d2)
    s.speak(u)
}
function check() {
    img=document.getElementById("capturedimage")
    classifier.classify(img,got_result)
}
function got_result (error,results){
    if(error){console.error(error)}
    else{
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML=results[0].label
        document.getElementById("result_emotion_name2").innerHTML=results[1].label
        prediction1=results[0].label
        prediction2=results[1].label
        speak()
        if(results[0].label=="CALL"){
            document.getElementById("update_emoji").innerHTML="&#129305;"
        }
        if(results[0].label=="STOP"){
            document.getElementById("update_emoji").innerHTML="&#9995;"
        }
        if(results[0].label=="PEACE"){
            document.getElementById("update_emoji").innerHTML="&#9996;"
        }

        if(results[1].label=="CALL"){
            document.getElementById("update_emoji2").innerHTML="&#129305;"
        }
        if(results[1].label=="STOP"){
            document.getElementById("update_emoji2").innerHTML="&#9995;"
        }
        if(results[1].label=="PEACE"){
            document.getElementById("update_emoji2").innerHTML="&#9996;"
        }
    }
}
