let cirCount, origCircX, origCircY, orgSqrH, orgSqrW;

class Circle{
  constructor(x, y){
    // store the original position
    origCircX = x;
    origCircY = y;
    // counter to reset position
    cirCount = 0; // 0 is before, 1 is after

    this.x = x;
    this.y = y;
  }

  show(){
    fill(153, 174, 191);
    noStroke();
    ellipse(this.x, this.y, 100, 100);
  }

  reset(){
    this.x = origCircX;
    this.y = origCircY;
  }

  move(){
    this.x -= 70;
  }

  clicked(){
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < 50){
      if (cirCount == 0) {
        this.move();
        cirCount = 1;
      }
      else{
        this.reset();
        cirCount = 0;
      }
    }
  }
}



class Square{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.count = 0;

    // store original values
    orgSqrW = 40;
    orgSqrH = 40;


  }

  show(){
    fill(247, 232, 193);
    rect(this.x, this.y, this.width, this.height, 10);
  }

  reset(){
    // this.x = originalX;
    // this.y = originalY;
    this.width = orgSqrW;
    this.height = orgSqrH;
  }

  zoom(){
    this.width = 200;
    this.height = 200;
  }

  // Move
  clicked(){

    if(cirCount == 1){
      if (this.count == 0) {
        let d = dist(mouseX, mouseY, this.x + 20, this.y + 20);
        if(d < 20){
          this.zoom();
          this.count = 1;
        }
      }
      else{
        let d = dist(mouseX, mouseY, this.x + 100, this.y + 100);
        if(d < 120){
          this.reset();
          this.count = 0;
        }
      }
    }
  }
}
