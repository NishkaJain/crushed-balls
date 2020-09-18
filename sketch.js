
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var log1,log2,log3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;


	
	ground = new Ground(600,height,1200,20);
	ball = new Ball (70,200,20);

	log1 = createSprite(815,385,150,15);
	log1.shapeColor ="yellow";
	log2 = createSprite(895,340,15,100);
	log2.shapeColor ="yellow";
	log3 = createSprite(735,340,15,100);
	log3.shapeColor ="yellow";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,20,20);

  ball.display();
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
    
  	}
}


