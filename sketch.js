
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,500,30);

	bobObject1 = new Bob(400, 350); 
	bobObject2 = new Bob(460, 350)
	bobObject3 = new Bob(520, 350)
	bobObject4 = new Bob(340, 350)
	bobObject5 = new Bob(280, 350)

	rope1 = new Rope(bobObject1.body, roof.body, 0, 0);
	rope2 = new Rope(bobObject2.body, roof.body, 66, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 132, 0);
	rope4 = new Rope(bobObject4.body, roof.body, -66, 0);
	rope5 = new Rope(bobObject5.body, roof.body, -132, 0);


	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(210);
	Engine.update(engine);
	roof.display();

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();	
	rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}

