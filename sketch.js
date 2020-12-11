
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var groundSprite;
var rectangle1,rectangle2,rectangle3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paperBall= new Ball(50,650,40,40);
	paperBall.shapeColor="red"

	ground= new Ground(50,670,1550,20)

	rectangle1=new Bin(460,610);


	

	


	




	
	//Create the Bodies Here.


	
	


	Engine.run(engine);
	


}


function draw() {
  rectMode(CENTER);
  background("grey");
  drawSprites();



  paperBall.display();
 rectangle1.display();
 ground.display();
}

  
function keyPressed() { 
	
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
 }
 

  
 

 




