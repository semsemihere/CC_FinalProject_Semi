//// Room 2
// Has all the functions and components needed for Room 2

function roomTwo() {
  //// end room1 and start room2
  start = false;
  room1 = false;
  room2 = true;
  room3 = false;
  button.hide();

  //// Background
  // background(255,195,107);
  forest.resize(600,600);
  image(forest, 0, 0);

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

  let doorButton2 = new Button(100, 220, door)
  if(!white){
    // image(door, 100, 220);
    doorButton2.display();
    // if the dormouse is hidden and door is clicked
    // open the door
    if(!white && hidden){
      // overdraw the door by the opened door
      opendoor.resize(150,100);
      let openDoorButton2 = new Button(100,220,opendoor);
      openDoorButton2.display();
      // if the open door is clicked, move to room3
      if(openDoorButton2.clicked()){
        room2 = false;
        room3 = true;
        roomThree();
      }

    }

  }

  //// Table Part
  // hatter and hare
  image(hatter, 250, 70);
  // hare is clickable
  hareButton.display();
  // hareline will be randomly generated
  hareline = script[num];
  if(talk){
    // bubble
    noStroke();
    fill(10,10,10,70);
    ellipse(480, 100, 200, 180);
    fill(0);
    textSize(18);
    textAlign(CENTER);
    text(hareline, 390, 80, 180, 100);
  }


  image(table, 70, 0);

  teapot.resize(180,100);
  image(teapot, 300, 400);

  // dormouse will be draggable object
  dormouse.resize(100, 80);
  dormouseButton.display();

}

//// Function definition
// show speech bubble
function randNum(){
  num = floor(random(0, 9));
  // console.log("bubble")
}
