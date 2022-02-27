
Webcam.set({
    width:350,
    heigth:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>'
    })
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/LHZ1FWdDx/model.json',model_loaded)

function model_loaded()
{
    console.log('model is loaded')
}

function check()
{
    img= document.getElementById('capture_img');
    classifier.classify(img,gotresults);
}



function gotresults(error,result)
{
    if (error) {
        console.error(error);

    } else{
        console.log(result)
        document.getElementById("result_object_name").innerHTML=result[0].label
        document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed()
    }
 }


















