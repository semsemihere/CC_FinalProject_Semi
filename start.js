// start.js
// starting page

let t;
const frames = 4000;
const cirSize = 0.05;


function startPage(){
  if(start){

     // expand
    scale(width, height);
    background(0);

    //// create circles in spiral
    fill(160);

    // time
    // make the frame loop
    t = fract(frameCount / frames);
    // count
    const count = 1000 * t;
    for(let i = 0; i < count; ++i){
      // fraction
      const f = i / count;
      //polar coordinates
      const a = i * PI; // angle from the center
      const radius = 1; // radius of the cicle from the center
      const dist = f * radius;
      const x = 0.5 + cos(a * TWO_PI) * dist;
      const y = 0.5 + sin(a * TWO_PI) * dist;
      const r = 0.05 * f; // radius of individual circle
      circle(x,y,r);
    }
  }
}
