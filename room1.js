//// Room 1
// Has all the functions and components needed for Room 1

function roomOne() {
  start = false;
  room1 = true;
  button.hide();

  wall.resize(600, 1300);

  //// Cake
  eat.resize(100,100);
  eatButton = new Food(width/2 - 10, 340, eat);

  //// Drink
  drink.resize(80,100);
  // let drinkyPos = yPos + 100;
  drinkButton = new Food(width/2 - 120, yPos + 100, drink);

  //// door
  opendoor.resize(200,150);
  let doorButton1 = new Button(10, yPos + 1020, opendoor);


  if(drinkUsed){
    if(yPos > ySmall){
      yPos -= 5;
      doorButton1.update(yPos+ 1020);
      console.log(yPos+1020);
      doorButton1.display();
    }
  }

  image(wall, 0, yPos);

  if(regular && !eatUsed){
    // draw cake if not used
    eatButton.display();
  }

  // if cake is used; get bigger
  if(eatUsed && !drinkUsed){
    if(yPos < yBig){
      // console.log(yPos);
      yPos += 5;
      drinkButton.update(yPos + 100);
      drinkButton.display();
    }
  }
  // draw the drink
  if(big && !drinkUsed){
    if(yPos == yBig){
      drinkButton.display();
    }
  }

  // when gets smaller, move the wall down 
  if(small){
    doorButton1.update(yPos+ 1020);
    doorButton1.display();
    if(yPos == ySmall){
      fill(255);
      textSize(26);
      textStyle(BOLD);
      textAlign(CENTER);
      text("Click Me!", 110, 420);
      // if the open door is clicked, move to room3
      if(doorButton1.clicked()){
        timer = millis() - 2000;
        roomTwo();
      }
    }
  }
}
