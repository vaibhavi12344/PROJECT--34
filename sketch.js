const Bodies=Matter.Bodies;
const World=Matter.World;
var MaxDrops=100, drop1;

function preload(){
    
}

function setup(){
createCanvas(600,600);

  drop1= new Drops();

}

function draw(){
drop1.display();
}   

