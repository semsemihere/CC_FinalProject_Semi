//// Room 2
// Has all the functions and components needed for Room 2
let white = true; // check the rose color
let talk = false; // start talking once clicked
let num = 1;
let hide = false;

function roomTwo() {
  //// end room1 and start room2
  start = false;
  room1 = false;
  room2 = true;
  room3 = false;
  button.hide();

  //// Background
  background(255,195,107);

  // note that they must be in order; image that goes on top should be called later

  //// Bush Part
  // bush, rose, paint, door...
  bush.resize(400, 250);
  image(bush, -50, 100);

  paint.resize(120,120);
  // paint button will be clickable
  // paint button will control roses as well
  let paintButton = new Paint(0, 250, paint);
  paintButton.display();

  // Just to make sure the tints does not affect other images
  noTint();
  // draw the door if roses are Red
  door.resize(150,100);

  let doorButton = new Button(100, 220, door)
  if(!white){
    // image(door, 100, 220);
    doorButton.display();
    // if the dormouse is hidden and door is clicked, move to room 3
    if(hide && doorButton.clicked()){
      room2 = false;
      room3 = true;
      roomThree();
    }
  }

  //// Table Part
  // hatter and hare

  image(hatter, 250, 70);
  // hare is clickable
  // image(hare, 320, 200);
  let hareButton = new Hare(450, 230, hare);
  hareButton.display();
  if(talk){
    noStroke();
    fill(10,10,10,70);
    ellipse(480, 100, 200, 180);
    fill(0);
    textSize(18);
    speech(400, 80, 180, 100, num);
  }

  image(table, 70, 0);


  teapot.resize(180,100);
  image(teapot, 300, 400);

  // dormouse will be draggable object
  dormouse.resize(100, 80);
  dormouseButton.display();

}


//// Made buttton class a base class
// checks click and hover
class Button{
  constructor(x, y,image){
    this.x = x;
    this.y = y;
    this.img = image;
  }

  display(){
    image(this.img, this.x, this.y);
  }

  // tell if the object is hovered
  // returns bool
  hover() {
    if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
      return true;
    } else {
      return false;
    }
  }

  // tell if the object is clicked
  // returns bool
  clicked() {
    if(mouseIsPressed){
      if (mouseX > this.x && mouseX < this.x + this.img.width && mouseY > this.y && mouseY < this.y + this.img.height) {
        console.log("clicked")
        return true;
      } else {
        return false;
      }
    }
  }
}

// Paint class that is inherited from the Button class
class Paint extends Button{
  constructor(x, y, image){
    super(x,y,image);
  }

  display() {
    stroke(0);

    image(this.img, this.x, this.y);
    // if clicked, and if the roses are not already painted,
    // paint the rose
    if(white){
      if(this.clicked()){
        // console.log("tint")
        white = false;
        tint(255, 0, 0);
      }
    }
    else{ // already clicked
      tint(255, 0, 0);
    }

    rose.resize(70,70);
    image(rose, 100, 150); // middle
    image(rose, 180, 180); // right
    image(rose, 30, 190); // left
  }
}

// Drag class is inherited from the Button class
// used for the draggable objects
class Drag extends Button{
  constructor(x, y, image){
    super(x,y,image);
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  display() {
    // update the x, y position
    this.update();
    if(!hide){ // if not in teapot
      image(this.img, this.x, this.y);
    }
  }

  update() {
      // Adjust location if being dragged
      if (this.dragging) {
        this.x = mouseX + this.offsetX;
        this.y = mouseY + this.offsetY;
        // check if dormouse is dragged to the teapot
        if(this.x > 300 && this.x < 300 + teapot.width && this.y > 400 && this.y < 400 + teapot.height){
          hide = true;
        }
      }

    }

  pressed() {
    // Did I click on the rectangle?
    if (this.clicked()) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x-mouseX;
      this.offsetY = this.y-mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }

}

// Hare class is for hare to randomize the speech
class Hare extends Button{
  constructor(x, y, image){
    super(x,y,image);
  }

  display(){
    image(this.img, this.x, this.y)
    // image()
    // if the object is clicked, change to random number
    if(this.clicked()){
      talk = true;
      // this.talk();
      num = floor(random(0, 10));
    }
  }
}



// speech
function speech(x1, y1, x2, y2, num){
  fill(0);
  // text('thethe', x, y)
  let script = [
    "It wasn't very civil of you to sit down without being invited",
    "Why is a raven like a writing desk?",
    "You know dormouse wants to go into the teapot",
    "Mad Hatter is really Mad",
    "Are you Alice?",
    "Let's celebrate your not birthday day",
    "Hatter is in love with the Heart Queen",
    "Heart Queen wanted red roses, not white!",
    "Sometimes I feel like I am not real",
    "Actually, I am April Hare",
  ];
  let hareline = script[num];

  text(hareline, x1, y1, x2, y2);

}
