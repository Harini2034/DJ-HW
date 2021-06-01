song1 = "";
song2 = "";
leftWristX = 0;
leftWistY =0;
rightWristX = 0;
rightWristY =0;
scoreLeftWrist =0;

function preload()
{
   song1 = loadSound("Wolves.mp3");
   song2 = loadSound("Shower.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
    }
}

function draw()
{
   image(video, 0, 0, 600, 500);
   fill("#FF0000");
   stroke("#FF0000");

   if(scoreLeftWrist > 0.2)
   {
       circle(leftWristX, leftWristY, 20);
       document.getElementById("volume").innerHTML = "Shower.mp3" ;
      if (leftWristY > 0 && leftWristY < 250)
      {
          song1.play();
          song1.setVolume(1);
          song1.rate(1);
      }
       
      if (leftWristY > 250 && leftWristY < 500)
      {
          song1.stop();
      }
   }
}

