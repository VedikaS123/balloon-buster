  var score=0
  var groundimg
  var bowimg
  var redballoonimg
  var greenballoonimg
  var blueballoonimg
  var pinkballoonimg
  var arrowimg
  var gameState
  
function preload(){
 //load your images here 
   groundimg=loadImage("background0.png")
   bowimg=loadImage("bow0.png") 
   redballoonimg=loadImage("red_balloon0.png")
   greenballoonimg=loadImage("green_balloon0.png")
   blueballoonimg=loadImage("blue_balloon0.png")
   pinkballoonimg=loadImage("pink_balloon0.png")
   arrowimg=loadImage("arrow0.png")
}

function setup() {
  createCanvas(500, 400);
  
  //add code here
  ground=createSprite(0,0,600,600)
  ground.addImage(groundimg)
  ground.velocityX=-4
  ground.scale=2.5

  bow=createSprite(490,200,20,20)
  bow.addImage(bowimg) 
  
  redBalloonGroup=new Group();
  greenBalloonGroup=new Group();
  blueBalloonGroup=new Group();
  pinkBalloonGroup=new Group();
  arrowGroup= new Group();

 }


function draw() {
  background("white")
  
   var selectBalloon=Math.round(random(1,4))
  if (frameCount%60===0){
   if(selectBalloon===1) {
     createPinkballoon();
   }
   else if(selectBalloon===2){
    createBlueballoon(); 
   }
    else if(selectBalloon===3){
     createGreenballoon(); 
    }
    else {createRedballoon();}
  } 
   if(keyDown("space")){
  createArrow(); 
 }
  if (ground.x<0){
  ground.x=ground.width/2
}
  bow.y=mouseY  
  
 if (arrowGroup.isTouching(redBalloonGroup)){
  redBalloonGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+1
} 
if (arrowGroup.isTouching(greenBalloonGroup)){
  greenBalloonGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+1
}
  if (arrowGroup.isTouching(blueBalloonGroup)){
  blueBalloonGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+1
}
  if (arrowGroup.isTouching(pinkBalloonGroup)){
  pinkBalloonGroup.destroyEach();
  arrowGroup.destroyEach();
  score=score+1
}
  
  drawSprites();
  //add code here
  score=score+ Math.round(frameCount/90)
  text("score"+score,30,30)
}
function createArrow() { 
  arrow= createSprite(360, 100, 5, 10);    
  arrow.addImage(arrowimg)
  arrow.velocityX = -6; 
  arrow.scale = 0.3; 
  arrow.y= bow.y 
  arrowGroup.add(arrow)
}
function createRedballoon(){
if (frameCount%60===0){
redballoon=createSprite(0,200,1,1) 
redballoon.addImage(redballoonimg)   
redballoon.velocityX=5
redballoon.y=Math.round(random(50,390))
redballoon.scale=0.1
redballoon.lifetime=100
redBalloonGroup.add(redballoon)
}   
}

function createGreenballoon(){
 if (frameCount%60===0){
greenballoon=createSprite(0,200,1,1) 
greenballoon.addImage(greenballoonimg)   
greenballoon.velocityX=4
greenballoon.y=Math.round(random(50,390))
greenballoon.scale=0.1
greenballoon.lifetime=120
greenBalloonGroup.add(greenballoon)
}  
}

function createBlueballoon(){
  if (frameCount%60===0){
blueballoon=createSprite(0,200,1,1) 
blueballoon.addImage(blueballoonimg)   
blueballoon.velocityX=3
blueballoon.y=Math.round(random(50,390))
blueballoon.scale=0.1
blueballoon.lifetime=160
blueBalloonGroup.add(blueballoon)
}  
}
function createPinkballoon(){
if (frameCount%60===0){
pinkballoon=createSprite(0,200,1,1) 
pinkballoon.addImage(pinkballoonimg)   
pinkballoon.velocityX=6
pinkballoon.y=Math.round(random(50,390))
pinkballoon.scale=1.2
pinkballoon.lifetime=80
pinkBalloonGroup.add(pinkballoon)
}  
}
