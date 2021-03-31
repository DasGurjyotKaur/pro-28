
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var tree,boy,boyIMG,mango,strech,gameState="onSling"

function preload()
{boyIMG=loadImage("sprite/boy.png")
	
}

function setup() {
  createCanvas(1000, 800);
  engine=Engine.create();
  world=engine.world;


boy=createSprite(250,620,50,5);
boy.addImage(boyIMG);

boy.scale=0.2;



  tree=new Trees(750,360,500,820);
ground=new Ground(679,760,2000,20);


mango1=new Mango(800,100);
mango2=new Mango(700,100);
mango3=new Mango(600,200);
mango4=new Mango(700,200);
mango5=new Mango(800,200);
stone= new Stone(120,500);
strech=new Elastic(stone.body,{x:200,y:620});






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  tree.display();
  ground.display();

boy.display();
stone.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
strech.display();

 detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);


  drawSprites();
 
}


function mouseDragged(){
if(gameState!=="launched"){


  Matter.Body.setPosition(stone.body,{
      x:mouseX,y:mouseY
  })
}
}

  function mouseReleased(){
      strech.fly();
      gameState="launched";
  }
  function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    elastic.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:225,y:550})
		elastic.attach(stone.body)
	}
}
function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.body+stone.r){
		Matter.Body.setStatic(ango.body,false)
	}




}