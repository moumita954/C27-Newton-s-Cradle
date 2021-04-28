
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;

var myEngine,myWorld;

var roof;

var bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5;



function setup() {
	createCanvas(800, 700);



	myEngine = Engine.create();
	myWorld = myEngine.world;

	roof= new Roof();

	bob1=new Bob(300,300);
	rope1=new Rope(bob1.body,roof.body,-100);

	bob2=new Bob(350,300);
	rope2=new Rope(bob2.body,roof.body,-50);

	bob3=new Bob(400,300);
    rope3=new Rope(bob3.body,roof.body,0);

	bob4=new Bob(450,300);
	rope4=new Rope(bob4.body,roof.body,50);

	bob5=new Bob(500,300);
	rope5=new Rope(bob5.body,roof.body,100);


	

	

  
}


function draw() {
  
  background(0);
  Engine.update(myEngine);
  roof.display();

  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50});

  	}
}
