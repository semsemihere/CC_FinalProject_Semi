//// Room 1
// Has all the functions and components needed for Room 1

// constant values of wall's height on regular, big, small
let regular = true;
let yRegular = -250;
let big = false;
let yBig = 0;
let small = false;
let ySmall = -680;

// update the yPos of the wall
let yPos = -250;

let eatButton;
let eatUsed = false;


let drinkButton;
let drinkUsed = false;


function roomOne() {
  start = false;
  room1 = true;
  button.hide();

  wall.resize(600, 1300);

  // if cake is used; get bigger
  if(eatUsed){
    if(yPos < yBig){
      ++yPos;
    }
  }

  if(drinkUsed){
    if(yPos > ySmall){
      --yPos;
    }
  }
  image(wall, 0, yPos);

  //// Cake
  eat.resize(100,100);
  eatButton = new Food(width/2 - 10, 340, eat);
  // draw cake if regular



  //// drink
  drink.resize(80,100);
  drinkButton = new Food(width/2 - 120, 100, drink);
  if(regular){
    // draw cake if not used
    if(!eatUsed){
      eatButton.display();
    }
    // when cake is eaten, get bigger
    else{
      regular = false;
      big = true;
    }
  }
  else if(big){
    // draw drink if not used
    if(!drinkUsed){
      drinkButton.display();
    }
    else{
      big = false;
      small = true;
    }
  }
  //// Door





  //// Drink Object
  // drink.resize(100,130);
  // let drinkButton = new Button(width/2, height/2 + 20, drink);
  // drinkButton.display();

}
