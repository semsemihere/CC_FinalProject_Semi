//// Room 3
// Has all the functions and components needed for Room 3
// End() function as well 

let userInput;
let userAnswer;
let ANSWER = "DJSCS"
let queenline = ["You've placed one joker and four aces", "with different suits facedown on a table.",
"Use the hints below to determine the position for each card.",
"1. The club is to the immediate right of the heart.",
"2. Neither the diamond nor the joker is next to the spade.",
"3. Neither the joker nor the diamond is next to the club.",
"4. Neither the diamond nor the spade is next to the heart.",
"Diamond = D, Heart = H, Spade = S, Clover = C, Joker = J"
]
function roomThree() {
  // end room2 and start room3
  room2 = false;
  room3 = true;

  background(255, 158, 158);

  queen.resize(300, 300);
  image(queen, width/2, height-300);

  door.resize(300, 250);
  image(door, -10, height-245);

  paper.resize(580, 270);
  image(paper, 5, 10);

  fill(0);
  textSize(16);
  textAlign(CENTER);
  for(let i = 0; i < 8; ++i){
    text(queenline[i], 30, 50+(25*i), 550, 250);
  }

  userInput = createInput('');
  userInput.position(80, height-200);
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
    end();
  }
  else{
    //reset
  }
}

function end(){
  background(255);
  image(cheshire, 200, 150);

  textSize(32);
  text("You escaped! Great Job!", 150, 400);

}
