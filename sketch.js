var garden;
var tom,jerry;
var tom_img,jerry_img;

function preload(){

garden = laodImage("garden.png");
tom = loadImage("tomOne.png");
jerry = loadImage("jerry.png");

}

function setup(){

    createCanvas(600,600);
    background("black");
    
    garden_img = createSprite(300,300,10,10)
    garden_img.addImage(garden);

    tom_img = createSprite(450,450,10,10);
    tom_img.addImage(tom);

    jerry_img = createSprite(200,450,10,10);
    jerry_img.addImage(jerry);
}

function draw(){
    createCanvas(600,600);
    background("black");
    drawSprites();
}