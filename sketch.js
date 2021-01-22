const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var log2;
var log3;
var bird1;

function setup(){
    var canvas = createCanvas(1105,470);
    displayWidth=displayHeight
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350)
    log1 = new Log(810, 380, 300, PI/2)
    log2 = new Log(790, 250, 300, PI/4)
    bird1 = new Bird(200, 200)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    log2.display();
    bird1.display();
    ground.display();
}