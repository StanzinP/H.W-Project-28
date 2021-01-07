
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango1Image;
var mango2,mango2Image;
var mango3,mango3Image;
var mango4,mango4Image;
var mango5,mango5Image;

var boy,boyImage;
var stone,stoneImage;
var tree,treeImage;

function preload()
{
mango1Image = loadImage("mango.js");	
mango2Image = loadImage("mango.js");	
mango3Image = loadImage("mango.js");	
mango4Image = loadImage("mango.js");	
mango5Image= loadImage("mango.js");	

boyImage = loadImage("boy.png");
stoneImage = loadImage("stone.png");
treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	
	stone=new Stone(235,420,30)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

textSize(25); 
text("Press Space to get a second Chance to Play!!",50 ,50); 
image(boy ,200,340,200,300);


detectollision(stoneObj,mango1);
detectollision(stoneObj,mango2);
detectollision(stoneObj,mango3);
detectollision(stoneObj,mango4);
detectollision(stoneObj,mango5);

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

boy.display();

drawSprites();
 
}

function keyPressed(){
if(keyCode === 32)   {
	Matter.body.setPosition(stoneObj.body,{x:235, y:420})
	launcherObject.attach(stoneObj.body);
   }
}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r)
  {
	Matter.Body.setStatic(lmango.body,false);
  }
}



