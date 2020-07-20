let myx = 50
let myy = 125

let x2 = 50
let y2 = 125

function setup() {
    createCanvas(750, 500);
    background(0);
}

if (myx>x2 && myx<x2 && myy>y2 && myy < y2){
    fill(255,0,0);
    textSize(30);
    text("colliding", 20, 40);
} 
else {
    fill(random(255),random(255),random(255));
    textSize(30);
    text("not colliding", 20, 40);

}
    