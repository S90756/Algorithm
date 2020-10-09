var fixedRect, movingRect
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red"
  movingRect=createSprite(500,200,50,100);
  movingRect.shapeColor="red"
  fixedRect.debug=true
  movingRect.debug=true
  fixedRect.velocityX=0.6
  fixedRect.velocityY=0.8
  movingRect.velocityX=-0.6
  movingRect.velocityY=0.8
  
}

function draw() {
  background(255,255,255);  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
  /*if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      fixedRect.shapeColor="green"
      movingRect.shapeColor="green"
    }
    else{
      fixedRect.shapeColor="red"
      movingRect.shapeColor="red"

    }
*/
if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2){
    fixedRect.velocityX=fixedRect.velocityX*(-1)
    movingRect.velocityX=movingRect.velocityX*(-1)
  }
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY*(-1)
    movingRect.velocityY=movingRect.velocityY*(-1)
    }
  drawSprites();
}