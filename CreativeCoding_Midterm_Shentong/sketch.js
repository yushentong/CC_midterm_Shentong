/*
red = (203, 51, 31);
blue = (13, 50, 132);
yellow = (253, 240, 80);
*/

function setup() {
  createCanvas(1500, 900);
  background(255);
}

function draw() {
  //background
  for (let i = 0; i < 1500; i += 10){
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
  }
}