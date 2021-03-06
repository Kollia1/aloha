//Global Variables
var banana,bananaimage,foodgroup;
var monkey,monkeyimage;
var obstacleimage,obstaclegroup;
var back,score,bg,ground,groundimage;
var gamestate,play,end;
 
function preload(){
  bananaimage=loadImage("banana.png")

  monkeyimage=loadImage("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

  obstacleimage=loadImage("stone.png")

  back=loadImage("jungle.jpg")

  
}


function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  score=0
  play=1;
  end=0;
  gamestate=play;
  foodgroup= new Group();
  obstaclegroup= new Group();
  
  monkey=createSprite(300,displayHeight-70,10,10);
  monkey.addImage(monkeyimage)
  monkey.scale=0.2;

  ground=createSprite(displayWidth/2,displayHeight-60,displayWidth,10);

  

}


function draw(){
 background(back); 
  monkey.collide(ground);
  ground.x=width/2;
  ground.velocityX = -7;



  if(gamestate===play){
    monkey.velocityY=+0.8
    createBanana();
    createObstacle();
    if(keyCode==32){
       monkey.velocityY=-3;
    }
    if(foodgroup.isTouching(monkey)){
       foodgroup.destroyEach();
       score=score+1;
    }
    if(obstaclegroup.isTouching(monkey)){
       gamestate=end 
    }
    text("score:"+score,300,100)
  }
  else if(gamestate===end){
    text("gameover",300,150)
    text("restart",300,200)
    
  }
  drawSprites();
}

function createBanana(){
  if(World.frameCount%80===0){
    banana=createSprite(displayWidth/2,displayHeight-60,10,10);
    banana.y=random(displayHeight-300,displayHeight-200);
    banana.scale=0.05;
    banana.addImage(bananaimage)
    foodgroup.add(banana);
    banana.velocityX=-4;
    banana.lifetime=200;
  }
}
function createObstacle(){
  if(World.frameCount%300===0){
    obstacle=createSprite(displayWidth/2,displayHeight-60,10,10);
    obstacle.addImage(obstacleimage);
    obstacle.scale=0.15;
    obstacle.velocityX=-5;
    obstacle.lifetime=200;
    obstaclegroup.add(obstacle);
  }
}


  


