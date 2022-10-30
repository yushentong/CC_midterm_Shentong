/*
red = (203, 51, 31);
blue = (13, 50, 132);
yellow = (253, 240, 80);
*/

let popcorn01;
let popcorn02;

function setup() {
  createCanvas(900, 900);
  popcorn01 = new Popcorn();
  popcorn02 = new Popcorn();
  popcorn03 = new Popcorn();
  popcorn04 = new Popcorn();
}

function draw() {
  //background
  background(255);
  for (let i = 0; i < 900; i += 10){
    for (let j =0 ; j < 900; j += 10){
      if ((j%20)==0){
        fill(203, 51, 31);
        noStroke();
        ellipse(i,j,8,8);
      } else {
        fill(203, 51, 31);
        noStroke();
        ellipse(i+5,j,8,8);
      }
    }
  }// end of background

  //let gravity = createVector(0, 1);

  popcorn01.display(1);
  popcorn01.update();
  popcorn01.checkEdges();

  popcorn01.overlaps(popcorn02);
  popcorn01.overlaps(popcorn03);

  popcorn02.display(2);
  popcorn02.update();
  popcorn02.checkEdges();

  popcorn02.overlaps(popcorn03);

  popcorn03.display(3);
  popcorn03.update();
  popcorn03.checkEdges();

  popcorn04.display(4);
  popcorn04.update();
  popcorn04.checkEdges();

}