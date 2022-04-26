leftWristX = 0;
rightWristX = 0;
difference = 0;



function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(170,550);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);

}

function modelloaded(){
    console.log("PoseNet has loaded!");
}

function draw(){
    background('#00FF00');
    textSize(difference);
    fill("#0000FF");
    text('Parth', 20, 30);
}

function gotPoses(){
    if (results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("left wrist: " + leftWristX+"right wrist: "+rightWristX + "difference: "+ difference);
    }
}