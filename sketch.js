const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

 //Creating Player Base and Computer Base Object
 playerBase = new playerBase(300,random(450,height-300),180,150);
 player = new player(285,playerBase.body.position.y-153,50,180);

 computerBase = new computerBase(width-300,random(450,height-300),180,150);
 computerPlayer = new computerPlayer(width-280,computerBase.body.position.y-153,50,180);
}

function draw() {
 background(180);

 Engine.update(engine);

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Displaying Playerbase and computer base 
 playerBase.display();
 player.display();

  //displaying Player and computerplayer
 computerBase.display();
 computerPlayer.display();
} 