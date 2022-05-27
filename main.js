function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

    
}
function modelLoaded(){
    console.log('PoseNet is Initialized')
}
function draw(){
    background('#969A97')
}
function gotPoses(result){
    if (result.length > 0) {
        console.log(results);
    }
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = "+ noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("LeftX = "+ leftWristX + " RightX = " + rightWristX + "differnce = " + difference);
    }
}
function draw() {
    background('#D9F1F1');

    textSize(width / 7);
    fill('#FFFFFF') 
    document.getElementById("text_side").innerHTML = "width and hieght of text will be = " + difference + "px";
    text("A N W E S H A  :)",noseX, noseY);
   }