
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

  bob_diameter = 40;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

bob1 = new BOB(260,400,30);
bob2 = new BOB(320,400,30);
bob3 = new BOB(380,400,30);
bob4 = new BOB(440,400,30);
bob5 = new BOB(500,400,30);


roof = new ROOF(380,150,300,30);

rope1 = new Rope(bob1.body,roof.body,-bob_diameter*2,0);
rope2 = new Rope(bob2.body,roof.body,-bob_diameter*1,0);
rope3 = new Rope(bob3.body,roof.body,0,0);
rope4 = new Rope(bob4.body,roof.body,bob_diameter*1,0);
rope5 = new Rope(bob5.body,roof.body,bob_diameter*2,0);
}


function draw() {
  rectMode(CENTER);

  background("magenta");

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode == UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-9,y:-36});
	}
}


