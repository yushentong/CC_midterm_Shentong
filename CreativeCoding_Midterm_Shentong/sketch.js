/*
red = (203, 51, 31);
blue = (13, 50, 132);
yellow = (253, 240, 80);
*/

let popcorn01;

function setup() {
  createCanvas(900, 900);
  popcorn01 = new Popcorn(450, 450);
}

function draw() {
  //background
  background(255);
  for (let i = 0; i < 900; i += 10){
    for (let j =0 ; j < 900; j += 10){
      if ((j%20)==0){
        fill(203, 51, 31);
        noStroke();
        ellipse(i,j,7,7);
      } else {
        fill(203, 51, 31);
        noStroke();
        ellipse(i+5,j,7,7);
      }
    }
  }// end of background

  popcorn01.display();
  popcorn01.update();
  popcorn01.checkEdges();

}