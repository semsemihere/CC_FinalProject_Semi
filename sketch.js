// sketch.js
// preload images and objects

function preload(){
  // font
  font = loadFont('assets/Macondo-Regular.ttf');
  // image for all
  door = loadImage("assets/door.png")
  opendoor = loadImage("assets/openDoor.png")
  // room 1 Images
  key = loadImage("assets/room1/key.png")
  box = loadImage("assets/room1/box.png")
  desk = loadImage("assets/room1/desk.png")
  drink = loadImage("assets/room1/drink.png")
  eat = loadImage("assets/room1/eat.png")
  lantern = loadImage("assets/room1/lantern.png")
  wallpaper = loadImage("assets/room1/wallpaper.png")
  wall = loadImage("assets/room1/background.jpeg")

  // room 2 Images
  rose = loadImage("assets/room2/rose.png")
  bush = loadImage("assets/room2/bushes.png")
  table = loadImage("assets/room2/table.png")
  paint = loadImage("assets/room2/paint.png")
  hatter = loadImage("assets/room2/hatter.png")
  hat = loadImage("assets/room2/hat.png")
  teapot = loadImage("assets/room2/teapot.png")
  dormouse = loadImage("assets/room2/dormouse.png")
  hare = loadImage("assets/room2/hare.png")
  forest = loadImage("assets/room2/forest.png")
  bubble = loadImage("assets/room2/speech.png")

  // room 3
  queen = loadImage("assets/room3/queen.png")
  paper = loadImage("assets/room3/paper.png")
  room = loadImage("assets/room3/room.png")

  // ending
  cheshire = loadImage("assets/cheshire.png")
}

function setup() {
  createCanvas(width, height);
  noStroke();
  // default font
  textFont(font);

  // starting page is called in the beginning
  // button should disappear when next room is called
  button = createButton('Click Me!');
  button.position(230, 275);
  button.style('color: white')
  button.style('background-color:transparent');
  button.style('border: none');
  button.style('font-size: 30px');
  button.style('font-family: font');
  // when start button is clicked, move to room 1
  button.mousePressed(roomOne);

  //// Interactive Objects that should be defined
  dormouseButton = new Drag(220, 300, dormouse);
  hareButton = new Hare(430, 200, hare);

  userInput = createInput('Press enter to submit');
  userInput.hide();
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
  else{
    end();
  }
}

function mousePressed(){
  //// Room 1
  if(room1){
    if(eatButton.clicked()){
      eatButton.use();
      eatUsed = true;
      big = true;
      regular = false;
    }
    if(drinkButton.clicked()){
      drinkButton.use();
      drinkUsed = true;
      big = false;
      small = true;
    }
  }

  //// Room 2
  else if(room2){
    dormouseButton.pressed();
  }
}

function mouseReleased(){
  //// Room 2
  dormouseButton.released();
}

function keyPressed(){
  // if enter
  if(room3 && keyCode === 13){
    checker();
  }
}
