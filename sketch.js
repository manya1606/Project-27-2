const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5
var rope1
var roof
var roofObject
var bobDiameter
var Options
var rope1



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,500,50)
	bobObject2 = new Bob(300,500,50)
	bobObject3 = new Bob(400,500,50)
	bobObject4 = new Bob(500,500,50)
	bobObject5 = new Bob(600,500,50)

	roof = new Roof(400,100,600,35)

	rope1 = new Rope(bobObject1.body, roof.body, -80, 0)
	rope2 = new Rope(bobObject2.body, roof.body, -40, 0)
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0)
	rope4 = new Rope(bobObject4.body, roof.body, 40, 0)
	rope5 = new Rope(bobObject5.body, roof.body, 80, 0)


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:50, y:-50})
		
	}
}

