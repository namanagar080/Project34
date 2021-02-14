const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world;
var ground;
var hero,string,backgroundImg;
function preload() {
//preload the images here
backgroundImg=loadImage("images/images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(1500,height-20,3000,20);
   hero = new Hero(50,200,100,100);
   string = new Fly(hero,{x:200,y:200});
}

function draw() {
  background(backgroundImg);
   Engine.update(engine);
  ground.display();
  hero.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

