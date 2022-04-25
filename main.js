function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(170,550);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet('pose',gotPoses);

}

function modelloaded(){
    console.log("PoseNet has loaded!")
}

function draw(){
    background('#00FF00')
}

function gotPoses(){
    if (results.length > 0){
        console.log(results)
    }
}