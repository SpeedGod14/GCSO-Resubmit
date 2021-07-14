var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  createSprite(700,200,50,3);

  speed = random(223,321);
  weight = random(30,152);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white"

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("pink");

  Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  if(bullet.isTouching(wall)){
   if(Damage < 10){
     bullet.shapeColor = "green"
   } else if(Damage > 10){
     bullet.shapeColor = "red"
     bullet.velocityX = 0;
   }
  }

  drawSprites();
}