Webcam.set({
    width:340,
    height:250,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("webcam");
Webcam.attach("#webcam");

function Capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("camerapic").innerHTML = '<img id="image" src="'+data_uri+'"/>'
    });

}
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZB4t0nN9T/model.json",modelLoaded)

function modelLoaded(){
    console.log('Model Loaded !');

}

function check(){
    var image = document.getElementById("image");
    classifier.classify(image,result);
}

function result(error,results){
 if (error){
     console.log(error);
 }
 else{
     console.log(results);

     document.getElementById("object").innerHTML = results[0].label;
     document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
 }

}   
