var fixedRect, movingRect;
var square1,square2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  square1 = createSprite(300,200,60,60);
  square1.shapeColor = "orange";
  square2 = createSprite(200,300,60,40);
  square2.shapeColor = "orange";
  
}

function draw() {
  background(0,0,0);  
  bounceOff(fixedRect,movingRect);
  
  square2.x = mouseX;
  square2.y = mouseY;

  if(isTouching(square1,square2)){
    square1.shapeColor = "yellow";
    square2.shapeColor = "yellow";
  }
  else{
    square1.shapeColor = "orange";
    square2.shapeColor = "orange";
  }
  drawSprites();
}

