    noseX=0;
    noseY=0;
    resta=0
    xmanoIzquierda=0;
    xmanoderecha=0;
 function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(550,100); 
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
 }
 function draw(){
    background("#A70DC6") ;
    fill("#99FFFF");
    stroke("#CC33FF");
    square(noseX,noseY,resta);
    document.getElementById("square_side").innerHTML="el ancho y alto  del cuadrado es:" + resta + "pixels";
 }
  function modelLoaded(){
    console.log("el modelo se inicio" );
  }
  function gotPoses(results){
    console.log(results);
    if(results.length>0){
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX" + noseX);
        console.log("noseY" + noseY);
        xmanoIzquierda=results[0].pose.leftWrist.x;
        xmanoderecha=results[0].pose.rightWrist.x;
        resta=floor(xmanoIzquierda - xmanoderecha);
        console.log(resta);
    }
  }