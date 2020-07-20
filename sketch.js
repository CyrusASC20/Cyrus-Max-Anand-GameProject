 
let state = 1;
let message = "Use the Left Arrow to move left,"; 
let message1 = "The Right Arrow to move right,";
let message2 = "The Up Arrow to move up,";
let message3 = "And the Down Arrow to move down!";
let message4 = "Avoid the bouncing Lisa Simpson!";
let message5 = "And collect the pool of gold!";
let message6 = "Press the SPACE Key to start!";

let CharImage;
 
let Aang;
 
let prize;
 
let myxpos = 25;
let myypos = 25;
 
 
// make 2 variables for enemies position
 
let enemyxPos = 375;
let enemyyPos = 250;
 
let prizexPos = 700;
let prizeyPos = 450;
 
 
// make 2 variables to control x and y speed
let xSpeed;
let ySpeed;
 
let xDirection = 1;
let yDirection = 1;
 
function preload(){ // loads many assets into your sketch
 
  // load images
  CharImage = loadImage("https://i.imgur.com/H4l36Lp.gif");
  Aang = loadImage("https://i.imgur.com/DTcDEl4.jpg");
  prize = loadImage("https://i.imgur.com/xG4sB.gif");
 
 
}

function setup() {
   createCanvas(750, 500);
   
   if (state == 1){
    background(255,0,0);
    fill(0);
    textSize(45);
    text(message, 0, 50);
    text(message1, 0, 100);
    text(message2, 0, 150);
    text(message3, 0, 200);
    text(message4, 0, 250);
    text(message5, 0, 300);
    text(message6, 0, 350);
  }
  
   xSpeed = random(0,15);
   ySpeed = random(0,15);
}

function draw() {
  if(keyIsDown(32)){
    state = 2
    
}
  if (state == 2){
    background(0);
    image(CharImage,enemyxPos,enemyyPos,50,50);
    image(Aang,myxpos,myypos,50,50);
    image(prize,prizexPos,prizeyPos,50,50);
   
    enemyxPos += xSpeed * xDirection;
    enemyyPos += ySpeed * yDirection;
 
    if(enemyxPos < 25 || enemyxPos > 725 ){
    xDirection *= -1;
  }
 
    else if (enemyyPos <25 || enemyyPos > 475){
    yDirection *= -1;
  }
 
 
 
    let myLeft = myxpos;
    let myRight = myxpos + 50;
    let myTop = myypos;
    let myBottom = myypos + 50;
 
    let enemyLeft = enemyxPos;
    let enemyRight = enemyxPos + 50;
    let enemyTop = enemyyPos;
    let enemyBottom = enemyyPos + 50;
 
    
 
 
    if (enemyRight < myLeft || myRight < enemyLeft || myTop > enemyBottom || enemyTop > myBottom){
      
    }
    else{
      state = 4;
      fill(random(255),random(255),random(255));
      textSize(30);
      text("colliding", 20, 40);
    }
  
    
    let prizeLeft = prizexPos - 25;
    let prizeRight = prizexPos + 25;
    let prizeTop = prizeyPos - 25;
    let prizeBottom = prizeyPos + 25;
    
    if (prizeRight < myLeft || myRight < prizeLeft || myTop > prizeBottom || prizeTop > myBottom){
      
  }
  
    else{
    //enemyxpos = random(50,450);
    //enemyypos = random(50,450);
    state = 3;
    fill(random(255),random(255),random(255));
    textSize(30);
    text("colliding", 20, 40);
} 
  // detect what keys on keyboard are being pressed down
  if(keyIsDown(LEFT_ARROW)){
    myxpos -= 3
}
  if(keyIsDown(RIGHT_ARROW)){
    myxpos += 3
}
  if(keyIsDown(UP_ARROW)){
    myypos -= 3
}
  if(keyIsDown(DOWN_ARROW)){
    myypos += 3
}
  if (myxpos <= 0 ){
    myxpos = 25;
}
  if (myxpos >= 750){
    myxpos = 725;
}
  if (myypos <= 0){
    myypos = 25;
}
  if (myypos >= 500){
    myypos = 475;
}
 
 
}
    /*if (keyCode === 32) {
        state = 2;
        message = "Let The Game Begin!"
    }*/
 
    if (state == 3) {
      message = "You Won";
      background(234,234,234);
      fill(random(255),random(255),random(255));
      textSize(89);
      text(message, 150, 250);
      
    }
 
    if (state == 4) {
      message = "You Lost";
      background(123,123,123);
      fill(random(255),random(255),random(255));
      textSize(89);
      text(message, 150, 250);
      
  }
 
  }
// declare 2 variables that will allow me to control position
/*let myXpos = 100;
let myYpos = 100;
 
// make 2 variables for enemies position
let enemyXpos = 350;
let enemyYpos = 300;
 
let mario;
let bowser;
 
function preload(){
 
    mario = loadImage("https://i.imgur.com/QGo5isT.gif")
    //bowser = loadImage("https://thumbs.gfycat.com/DeadInstructiveEasteuropeanshepherd-small.gif")
}
 
function setup() {
    createCanvas(500, 500);
    noStroke();
  
    rectMode(CENTER);
}
  
function draw() {
    background(0);
 
    //drawing our main character
    fill(255,0,0);
    image(mario,myXpos,myYpos,50,50);
    
    // draw my enemy
    fill(0,0,255);
    //image(bowser,enemyXpos,enemyYpos,50,50);
    
    let myLeft = myXpos - 25;
    let myRight = myXpos + 25;
    let myTop = myYpos - 25;
    let myBottom = myYpos + 25;
 
    let enemyLeft = enemyXpos - 25;
    let enemyRight = enemyXpos + 25;
    let enemyTop = enemyYpos - 25;
    let enemyBottom = enemyYpos + 25;
 
    if (enemyRight < myLeft || myRight < enemyLeft || myTop > enemyBottom || enemyTop > myBottom){
        
    }
 
    else{
        enemyXpos = random(50,450);
        enemyYpos = random(50,450);
 
        fill(random(255),random(255),random(255));
        textSize(30);
        text("colliding", 20, 40);
    }
 
    */
 
  
 

