var path, pathImg
var boy,running
var invisibleboundary,invisibleboundary2

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(350,360,10,10);
  boy.addAnimation(running);
  
  

  invisibleboundary = createSprite(370,200,10,390);
  invisibleboundary.visible = true;

  invisibleboundary2 = createSprite(30,200,10,390);
  invisibleboundary2.visible = true;
  
}

function draw() {
  background(250);
  if(path.y>400){
    path.y = height/2;
  }
  boy.x = World.mouseX
  boy.collide(invisibleboundary);
  boy.collide(invisibleboundary2);
  
  drawSprites();
}
