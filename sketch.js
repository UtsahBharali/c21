var bullet,wall;
var damage;


function setup() {
  createCanvas(1600,400);

  weight = random(30,52);
speed = random(223,321);

thickness = random(22,83);

bullet = new Bullet(weight,speed);
    
  wall = new Wall(thickness);
 
}



function draw() {
background(0,0,0); 
if(bullet.sprite.collide(wall.sprite)){
 bullet.sprite.velocityX = 0;
  deform();

}
console.log(damage);
  drawSprites();
}

function deform(){
   damage =0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness; 

  if(damage>10){
    
    wall.sprite.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.sprite.shapeColor = color(0,255,0);
  }
  console.log(damage);
}

