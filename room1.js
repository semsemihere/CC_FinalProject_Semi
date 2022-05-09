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
  if(eatUsed && !drinkUsed){
    if(yPos < yBig){
      // console.log(yPos);
      yPos += 5;
    }
  }

  if(drinkUsed){
    if(yPos > ySmall){
      console.log(yPos);
      yPos -= 5;
    }
  }

  image(wall, 0, yPos);

  //// Cake
  eat.resize(100,100);
  eatButton = new Food(width/2 - 10, 340, eat);

  //// Drink
  drink.resize(80,100);
  drinkButton = new Food(width/2 - 120, 100, drink);

  //// door
  door.resize(200,150);
  let doorButton1 = new Button(10, height-260, door);


  if(regular && !eatUsed){
    // draw cake if not used
      eatButton.display();
  }

  if(big && !drinkUsed){
    if(yPos == yBig){
      drinkButton.display();
    }
  }

  if(small){
    if(yPos == ySmall){
      doorButton1.display();
      // if the open door is clicked, move to room3
      if(doorButton1.clicked()){
        // openDoorButton1.display();
        roomTwo();
      }
    }
  }




}
