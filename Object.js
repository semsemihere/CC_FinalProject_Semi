//// Object.js

//// Variables Definitions
// For start
// bools for screen trasitions
let start = true; // true in the beginning
let room1 = false;
let room2 = false;
let room3 = false;

let width = 600;
let height = 600;


// Room 1


// Room 2
let white = true; // check the rose color
let talk = false; // start talking once clicked
let num = 1;
let hidden = false;
let hareline;
let dormouseButton;
let hareButton;
// hare's script
let script = [
  "Dormouse! Go to the teapot!",
  "Why is a raven like a writing desk?",
  "You know dormouse wants to go into the teapot",
  "'I like what I get' is the same thing as 'I get what I like'!",
  "Twinkle, twinkle, little bat! How I wonder what you're",
  "Tell us a story!",
  "Heart Queen wanted red roses, not white!",
  "I deny it!",
  "Then you should say what you mean"
];



//// Class Definitions
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

//// ROOM 1
class Food extends Button{
  constructor(x, y, image){
    super(x,y,image);
  }

  display(){
    image(this.img, this.x, this.y);
  }

  // when the food button is sclicked, use the food to get big/small
  use(){
      console.log('used')
      regular = false;
      // big = true;
  }
}

//// ROOM 2
// Paint class
// inherited from the Button class
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

// Drag class
// inherited from the Button class
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
    if(!hidden){ // if not in teapot
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
        hidden = true;
      }
    }

  }

  pressed() {
    if(this.clicked()){
      // Did I click on the rectangle?
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

// Hare class
// for hare to randomize the speech
class Hare extends Button{
  constructor(x, y, image){
    super(x,y,image);
  }

  display(){
    image(this.img, this.x, this.y)
  }

  pressed(){
    if(this.clicked()){
      talk = true;
      // generate random number when pressed
      randNum();
    }

  }
}
