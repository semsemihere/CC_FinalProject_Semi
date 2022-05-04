// sketch.js
// preload images and objects

// bools for screen trasitions
let start = true; // true in the beginning
let room1 = false;
let room2 = false;
let room3 = false;

let dormouseButton;

let width = 600;
let height = 600;

function preload(){
  // room 1 Images
  drink1 = loadImage("assets/drink01.png");
  drink2 = loadImage("assets/drink02.png");
  // room 2 Images
  rose = loadImage("assets/rose.png")
  bush = loadImage("assets/bushes.png")
  table = loadImage("assets/table.png")
  paint = loadImage("assets/paint.png")
  door = loadImage("assets/door.png")
  hatter = loadImage("assets/hatter.png")
  hat = loadImage("assets/hat.png")
  teapot = loadImage("assets/teapot.png")
  dormouse = loadImage("assets/dormouse.png")
  hare = loadImage("assets/hare.png")
  key = loadImage("assets/key.png")
}


function setup() {
  createCanvas(width, height);
  noStroke();

  // starting page is called in the beginning
  // button should disappear when next room is called
  button = createButton('Start');
  button.position(width/2-20, height/2-20);
  button.style('color: white')
  button.style('background-color:transparent');
  button.style('border: none');
  button.style('font-size: 20px');
  // when start button is clicked, move to room 1
  // button.mousePressed(roomOne);
  button.mousePressed(roomTwo);


  //// Interactive Objects that should be defined
  dormouseButton = new Drag(220, 300, dormouse);

}

function draw() {
  if(start){
    startPage();
  }
  else if(room1){
    roomOne();
  }
  else if(room2){
    roomTwo();
  }
  else if(room3){
    roomThree();
  }

}


function mousePressed(){
  //// Room 2
  dormouseButton.pressed();
}

function mouseReleased(){
  //// Room 2
  dormouseButton.released();
}
