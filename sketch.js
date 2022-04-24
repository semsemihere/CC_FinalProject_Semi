// sketch.js
let clock, message;
// let originalX, originalY, counter;
let width = 600;
let height = 600;

function setup() {
  createCanvas(width, height);
  clock = new Circle(width/2, height/2);
  message = new Square(width/2-10, height/2-10);
}

function draw() {
  background(91, 137, 176);
  message.show();
  clock.show();
}

// When the user clicks the mouse
function mousePressed(){
  message.clicked();
  clock.clicked();
}
