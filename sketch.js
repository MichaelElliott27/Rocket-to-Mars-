var space,spacePhoto;
var star, starPhoto;
var rocket,rocketPhoto;
var meteor,meteorPhoto;
var rocketGroup,meteorGroup,starGroup;
var PLAY = 1,END = 0;
var gameState = PLAY;
var altitude;
var starScore;
function preload(){
spacePhoto = loadImage("Coding.jpg")
  starPhoto = loadImage("star.png")
  rocketPhoto = loadImage("rocket.png")
  meteorPhoto = loadImage("meteor.png")
}

function setup(){
  createCanvas(400,400);
  
 space = createSprite(200,200);
 space.addImage(spacePhoto);
  space.velocityY = 3;
 rocket = createSprite(200,300);
  rocket.addImage(rocketPhoto);
  rocket.scale = 0.1
rocketGroup = new Group()
  starGroup = new Group()
  meteorGroup = new Group()
  altitude = 0;
  starScore = 0;
}

function draw() {
  background(0);
  if(gameState === PLAY){
  
  if(space.y > 300 ){
    space.y = height/2;
   }
  if(keyDown("left_arrow")){
    rocket.x -= 3
  }
  if(keyDown("right_arrow")){
    rocket.x += 3;
  }
  if(keyDown("space")){
    rocket.velocityY = -7;
 }
    if(rocket.isTouching(starGroup)){
    starScore = starScore +1;
    star.destroy()
    }
  if(rocket.isTouching(meteorGroup)||rocket.y> 400){
    rocket.destroy()
   gameState = END;
  }  
    rocket.velocityY += 0.9;
    
createStars();
 drawSprites();
  fill("red");
  stroke("red");
  textSize(15);
  text("Altitude: "+altitude, 30 ,50 )
  altitude = altitude + Math.round(getFrameRate()/10);
  fill("red");
  stroke("red");
  textSize(15);
  text("Stars: "+starScore, 30 ,20 )
  }
  else 
    if(gameState === END){
    textSize (30);
    stroke("blue");
    fill("blue");
    text("GameOver",130,200)
    textSize (20);
    stroke("blue");
    fill("blue");
    text("Your Rocket Has Crashed ",90,230)
    space.velocityY = 0;
    space.destroy()
    meteorGroup.destroyEach()
    starGroup.destroyEach()
    //display score just after drawsprites in gameState PLAY.
      
    
  }

}
function createStars(){
  if(frameCount%120 === 0){
  
  var rand = Math.round(random(100,300))
   star = createSprite(rand,-200);
  star.addImage(starPhoto);
  star.scale = 0.06;
  star.velocityY = 5;
  star.lifetime = 300;
 starGroup.add(star)
  }
  if(frameCount%110 === 0){
    var rand2 = Math.round(random(100,300))
  meteor = createSprite(rand2,-200);
  meteor.addImage(meteorPhoto);
  meteor.scale = 0.1;
  meteor.velocityY = 5;
  meteor.lifetime = 300;
 meteorGroup.add(meteor);
  rocketGroup.add(rocket);
  }
}