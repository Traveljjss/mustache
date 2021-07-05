noseX=0;
noseY=0;
function preload(){
mustache=loadImage('16972-200-removebg-preview.png')
}
function setup(){
 canvas=createCanvas(300,300);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 video.size(300,300);
 poseNet=ml5.poseNet(video,modelLoaded);
 poseNet.on('pose',gotPoses);
} 
function modelLoaded(){
    console.log('poseNet is Initialized');
}
function gotPoses(results){
 if (results.length>0){
     noseX=results[0].pose.nose.x-40;
     noseY=results[0].pose.nose.y-40;
     console.log(results);
     console.log("nosex="+noseX);
     console.log("nosey="+noseY);
 } 
}
function draw(){
image(video,0,0,300,300);
image(mustache,noseX,noseY,100,100);

}
function takeSnapshot(){
    save('myMustacheFilterImage.png');
}