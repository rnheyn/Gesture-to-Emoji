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