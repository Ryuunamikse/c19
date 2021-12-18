var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var ghost;
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost=createSprite(300,300);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.5
}

function draw() {
  background(0);
  if(gameState ==="play"){
    if(keyDown("left_arrow")){
      ghost.x=ghost.x -3;
    }
    if(keyDown("right_arrow")){
      ghost.x=ghost.x +3;
    }
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
    ghost.velocityY=ghost.velocityY+1;
    if(tower.y > 400){
        tower.y = 300
      }raton();
        if(climbersGroup.isTouching(ghost))
        { ghost.velocityY = 0; }
        raton();
        drawSprites();
  }

    
   
}
function raton() {
  if(frameCount % 240 ===0){
    var door=createSprite(200,-50);
    var climber=createSprite(200,10);
    var invisibleBlock=createSprite(200,15);
    invisibleBlock.widht=climber.widht;
    invisibleBlock.height=2;
    door.x=Math.round(random(100,400));
    climber.x=door.x;
    invisibleBlock.x=door.x;
    door.addImage(doorImg);
    climber.addImage(climberImg);
    door.velocityY=7;
    climber.velocityY=7;
    invisibleBlock.velocityY=7;
  ghost.depth=door.depth;
  ghost.depth+=1;
  door.lifetime=800;
  climber.lifetime=800;
  invisibleBlock.lifetime=800;
  doorsGroup.add(door); 
  invisibleBlock.debug = true; 
climbersGroup.add(climber); 
invisibleBlockGroup.add(invisibleBlock);
  }
}
