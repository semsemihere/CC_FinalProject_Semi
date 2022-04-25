// sketch.js
let clock, message, bottle;
// let originalX, originalY, counter;
let width = 600;
let height = 600;
var drink;
function preload(){
  drink1 = loadImage("assets/drink01.png");
  drink2 = loadImage("assets/drink02.png");
}


function setup() {
  createCanvas(width, height);
  clock = new Circle(width/2, height/2);
  message = new Square(width/2-10, height/2-10);

  drink1.resize(200,200);
  drink2.resize(200,200);
  drink = loadAnimation(drink1,drink2);
  drink.playing = false;

  bottle = new Drink();
}

function draw() {
  background(91, 137, 176);
  message.show();
  clock.show();


  bottle.show(100,300);

}

// When the user clicks the mouse
function mousePressed(){
  message.clicked();
  clock.clicked();
  bottle.clicked();
}

class Drink{
  contructor(){
  }

  show(x,y){
    animation(drink, x, y);
  }

  clicked(){
    let d = dist(mouseX, mouseY, 90, 310);
    console.log(mouseX, mouseY, d);
    if(d < 50){
      drink.play();
      // console.log(d);
    }
    else{
      drink.stop();
    }
  }
}
