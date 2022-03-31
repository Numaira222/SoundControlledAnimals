
var cat=0;
var dog=0;
var horse=0;
var chicken=0;
var img= document.getElementById("img");

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Xs0BT24Vk/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
    document.getElementById("result_confidence").innerHTML="Accuracy-"+(results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    if(results[0].label=="Barking"){
        document.getElementById("img1").src="dog.gif";
    }
    else if(results[0].label=="Meowing"){
        document.getElementById("img1").src="cat.gif";
        }
    else if(results[0].label=="Neighing"){
        document.getElementById("img1").src="horse.gif";
            }
    else if(results[0].label=="Clucking"){
        document.getElementById("img1").src="chicken.gif";
                }
    else {
        document.getElementById("img1").src="ear.gif";
                    }
    }

}

