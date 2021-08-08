const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sprites/snow3.jpg";
var score = 0;

function preload() {
    getBackgroundImg();
}


function setup() {
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
 
    bg = new bg(windowWidth,windowHeight,50,50);

}

function draw() {
  background(255,255,255);  
  bg.display();
  
  drawSprites();
}