var fixedRect,movingRect;

function setup(){
  createCanvas(600,600);
  fixedRect=createSprite(180,300,100,150);
  fixedRect.shapeColor="green";
  fixedRect.debug="true";
  movingRect=createSprite(500,300,80,130);
  movingRect.shapeColor="green";
  movingRect.debug="true";
}

function draw(){
  background("black");
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}