
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, bola

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1= new Box (400,650,800,10)
	box2= new Box (550,600,10,100)
	box3= new Box (700,600,10,100)

	bola = Bodies.circle(200,20,20);
	World.add(world,bola);

	rectMode(CENTER)

Engine.run(engine);
  ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
box1.show()
box2.show()
box3.show()
ellipse(bola.position.x,bola.position.y, 20,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === 38){
		Body.applyForce(bola,{x:0,y:0},{x:0.05,y: -0.05})
	}
}

