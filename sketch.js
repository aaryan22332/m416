const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create()
	world = engine.world;

	//Create the Bodies Here.

	var cardboard1 = createSprite(500,610,10,90)
	var cardboard2 = createSprite(550,650,100,10)
	var cardboard3 = createSprite(600,605,10,100)
    var ball = createSprite(200,600,10,10)
    var ground = createSprite(400,660,900,10)  
	
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  

  drawSprites();
 
}



