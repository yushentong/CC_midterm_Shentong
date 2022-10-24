/*let x;
let y;
let xspeed;
let yspeed;
let x_acc;
ley y_acc;
*/

let position;
let velocity; // aka speed!

function setup() {
  createCanvas(800, 800);
  background(0);

  /*
  x = 100;
  y = 100;
  xspeed = 2.5;
  yspeed = .5;
  
  can be written as:
  */

  position = createVector (100,100);
  velocity = createVector(2.5, 0.5);
}

function draw() {
  background(0);
/*
  x = x+xspeed;
  y = y+yspeed;

  can be wriiten as
  */

  position.add (velocity);


  /*if((x>width)||(x<0)){

    xspeed = xspeed * -1;
  }

  if((y>height)||(y<0)){

    xypeed = yspeed * -1;
  }
  */

  //position & velocity are vector objects

  if((position.x>width)||(position.x<0)){
    velocity.x = velocity.x * -1;
  }

  if((position.y>height)||(position.y<0)){
    velocity.y = velocity.y * -1;
  }

  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x,position.y,50,50);
 

}

function mousePressed(){
  //letTest()

}
/*
function letTest() {
  
  let x = 1;

  {
    let x = false;  // different variable
    print(x);  // 2
  }

  print(x);  // 1
}

*/




