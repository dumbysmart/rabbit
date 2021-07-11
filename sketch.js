var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleimg;
var leaf, leafimg;
var oleaf, oleafimg;
var rleaf, rleafimg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg=loadImage("apple.png");
  leafimg=loadImage("leaf.png")
  oleafimg=loadImage("orangeLeaf.png")
  rleafimg=loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  console.log(frameCount)
  createApples()
  createLeaves()
  createOLeaves()
  createRLeaves()
  drawSprites();
}

function createApples(){
if (frameCount%80==0){
  apple=createSprite(Math.round(random(1,401)), 0, 10, 10)
  apple.addImage(appleimg)
  apple.velocityY=4
  apple.scale=0.05
  }
}

function createLeaves(){
if (frameCount%50==0){
  leaf=createSprite(Math.round(random(1,401)), 0, 10, 10)
  leaf.addImage(leafimg)
  leaf.scale=0.05
  leaf.velocityY=5
}
}

function createOLeaves(){
  if (frameCount%75==0){
    oleaf=createSprite(Math.round(random(1,401)), 0, 10, 10)
    oleaf.addImage(oleafimg)
    oleaf.scale=0.05
    oleaf.velocityY=5
  }
  }

function createRLeaves(){
  if (frameCount%25==0){
    rleaf=createSprite(Math.round(random(1,401)), 0, 10, 10)
    rleaf.addImage(rleafimg)
    rleaf.scale=0.03
    rleaf.velocityY=5
  }
}

