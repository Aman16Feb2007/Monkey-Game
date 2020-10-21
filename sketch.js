var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var score1 = 0;

var Opsicle

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
    
  monkey = createSprite(100,400)
  monkey.addAnimation("m",monkey_running);
  monkey.scale = 0.2;
  
  Ground = createSprite(250,470,1000,20)
    
  Ground.velocityX = -5;
  

  bg = new Group(); 
  og = new Group();

 
}


function draw() {
background("white");

if (keyDown("space") && monkey.y >398 ) {
    monkey.velocityY = -20; 
  
}
 
  if (Ground.x < 0) {
     Ground.x = Ground.width/2;   
      }
  
  
  
  
  monkey.velocityY = monkey.velocityY+1
  monkey.collide(Ground);
  drawSprites();
  Opsticle();
  Banana();
  Score();
  destory();
  //GameOver();
}

function Opsticle() {
  if (frameCount % 300 === 0) {
  opsicle = createSprite(500,418)
  opsicle.addImage(obstaceImage);
  opsicle.scale = 0.21;
  opsicle.velocityX = -5;
  opsicle.lifetime = 100;  
  og.add(opsicle);
}
}
function Banana() {
  if (frameCount % 80 === 0) {
  banana = createSprite(500,random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.19;
  banana.velocityX = -5;
  banana.lifetime = 100;
  bg.add(banana);
}
}

function destory() {
  if (monkey.isTouching(og)) {
    score = score+1;
    og.destroyEach();
  }
  
  if (monkey.isTouching(bg)) {
    score1 = score1+1
    bg.destroyEach();
  }

  
}

function Score() {
  textSize(17);
  fill("blue");
  text("Touched : "+ score,270,30);
  text("Score : "+ score1,120,30);
}

function GameState() {
}

function GameOver() {
  textSize(30);
  fill("red");
  text("GAMEOVER ",165,200);
  }