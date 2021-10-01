var virus1,virus2,virus3;
var zombie1,zombie2;
var girl,backgroundimg;
var virus1img,virus2img,virus3img,zombie1img,zombie2img,girlimg;

function preload(){
  backgroundimg = loadImage("images/hospital.jpg");
  virus1img= loadImage("images/virus1.png");
  virus2img= loadImage("images/virus2.png");
  virus3img= loadImage("images/virus3.png");
  zombie1img= loadImage("images/zombie1.png");
  zombie2img= loadImage("images/zombie2.png");
  girlimg= loadImage("images/girl.png");
  dropletimg=loadImage("images/waterdrop.png");
  sanitizerimg=loadImage("images/sanitizer.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  girl=createSprite(windowWidth/2-600,windowHeight/2+200,50,50);
  girl.addImage("girl",girlimg);
  girl.scale=0.48;

  sanitizer=createSprite(windowWidth/2-560,windowHeight/2+200,50,50);
  sanitizer.addImage("sanitizer",sanitizerimg);
  sanitizer.scale=0.035;
  
  
}

function draw() {
  background(backgroundimg);
  sanitizer.y=mouseY;
  var randomEnemies=Math.round(random(1,5));
  if(frameCount%60===0){
    if(randomEnemies===1){
      virus1();
    }
    else if(randomEnemies===2){
      virus2();
    }
    else if(randomEnemies===3){
      virus3();
    }
  }

  drawSprites();
}
function virus1(){
  if(frameCount%60===0){
    yellowVirus=createSprite(windowWidth/2+1000,Math.round(random(100,450)),10,10);
    yellowVirus.addImage("virus1",virus1img);
    yellowVirus.velocityX=-4;
    yellowVirus.scale=0.04;

  }
}
function virus2(){
  if(frameCount%60===0){
    greenVirus=createSprite(windowWidth/2+1000,Math.round(random(200,550)),10,10);
    greenVirus.addImage("virus2",virus2img);
    greenVirus.velocityX=-3;
    greenVirus.scale=0.3;

  }
}
function virus3(){
  if(frameCount%60===0){
    redVirus=createSprite(windowWidth/2+1000,Math.round(random(350,600)),10,10);
    redVirus.addImage("virus3",virus3img);
    redVirus.velocityX=-4;
    redVirus.scale=0.2;

  }
}
function zombie1(){
  if(frameCount%60===0){
    greenVirus=createSprite(windowWidth/2+1000,Math.round(random(200,550)),10,10);
    greenVirus.addImage("virus2",virus2img);
    greenVirus.velocityX=-3;
    greenVirus.scale=0.3;

}
function zombie2(){

}