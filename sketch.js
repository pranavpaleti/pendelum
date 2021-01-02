
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var constraint1,constraint2,constraint3,constraint4,constraint5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof= new Roof()
  bob1=new Bob(320,400,20);
  bob2=new Bob(360,400,20);
  bob3=new Bob(400,400,20);
  bob4=new Bob(440,400,20);
  bob5=new Bob(480,400,20);
  constraint1=new Rope(bob1.body,roof.body,-80);
  constraint2=new Rope(bob2.body,roof.body,-40);
  constraint3=new Rope(bob3.body,roof.body,0);
  constraint4=new Rope(bob4.body,roof.body,40);
  constraint5=new Rope(bob5.body,roof.body,80);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
	}
}


