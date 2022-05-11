//// Room 3
// Has all the functions and components needed for Room 3
// End() function as well

function roomThree() {
  // end room2 and start room3
  room2 = false;
  room3 = true;

  // background(255, 158, 158);
  room.resize(600, 600);
  image(room, 0, 0);

  queen.resize(300, 300);
  image(queen, width/2, height-300);

  door.resize(300, 250);
  image(door, -10, height-245);

  paper.resize(580, 270);
  image(paper, 5, 10);

  fill(0);
  textSize(16);
  textAlign(CENTER);
  for(let i = 0; i < 7; ++i){
    text(queenline[i], 30, 45+(20*i), 550, 250);
  }
  textSize(14);
  text(queenline[7], 30, 210, 550, 250);
  text(queenline[8], 30, 225, 550, 250);

  // call the user input box back
  userInput.show();
  userInput.position(80, height-180);
  userInput.size(120,30);
  userInput.input(myInputEvent);
}

function myInputEvent() {
  console.log('you are typing: ', this.value());
}

function checker(){
  userAnswer = userInput.value();
  if(userAnswer == ANSWER){
    room3 = false;
    // hide
    userInput.hide();
    end();
  }
  else{
    userInput.value("Incorrect!");
  }
}

function end(){
  background(255);
  startPage();
  image(cheshire, 200, 150);

  textSize(32);
  text("You escaped! Great Job!", 150, 400);
}
