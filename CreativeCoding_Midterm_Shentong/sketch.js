/*
red = (203, 51, 31);
blue = (13, 50, 132);
yellow = (253, 240, 80);
*/

function setup() {
  createCanvas(900, 900);
  rectMode(CENTER);

  popcorn01 = new Popcorn();
  popcorn02 = new Popcorn();
  popcorn03 = new Popcorn();
  popcorn04 = new Popcorn();
  popcorn05 = new Popcorn();
  popcorn06 = new Popcorn();
  popcorn07 = new Popcorn();
  popcorn08 = new Popcorn();
  popcorn09 = new Popcorn();
  popcorn10 = new Popcorn();
  popcorn11 = new Popcorn();
  popcorn12 = new Popcorn();
  popcorn13 = new Popcorn();
  popcorn14 = new Popcorn();
  popcorn15 = new Popcorn();
  popcorn16 = new Popcorn();
  popcorn17 = new Popcorn();
  popcorn18 = new Popcorn();
  popcorn19 = new Popcorn();
  popcorn20 = new Popcorn();
  popcorn21 = new Popcorn();
  popcorn22 = new Popcorn();
  popcorn23 = new Popcorn();
  popcorn24 = new Popcorn();

  eye01 = new Eyes(450, 450);
}

function draw() {
  //background red dots
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

  eye01.background((color(30,255,20)),(color(0,0,255)));
  eye01.display();

  //let gravity = createVector(0, 1);

  popcorn01.display(1);
  popcorn01.update();
  popcorn01.checkEdges();

  popcorn02.display(2);
  popcorn02.update();
  popcorn02.checkEdges();

  popcorn03.display(3);
  popcorn03.update();
  popcorn03.checkEdges();

  popcorn04.display(4);
  popcorn04.update();
  popcorn04.checkEdges();

  popcorn05.display(1);
  popcorn05.update();
  popcorn05.checkEdges();

  popcorn06.display(2);
  popcorn06.update();
  popcorn06.checkEdges();

  popcorn07.display(3);
  popcorn07.update();
  popcorn07.checkEdges();

  popcorn08.display(4);
  popcorn08.update();
  popcorn08.checkEdges();

  popcorn09.display(1);
  popcorn09.update();
  popcorn09.checkEdges();

  popcorn10.display(2);
  popcorn10.update();
  popcorn10.checkEdges();

  popcorn11.display(3);
  popcorn11.update();
  popcorn11.checkEdges();

  popcorn12.display(4);
  popcorn12.update();
  popcorn12.checkEdges();

  popcorn13.display(1);
  popcorn13.update();
  popcorn13.checkEdges();

  popcorn14.display(2);
  popcorn14.update();
  popcorn14.checkEdges();

  popcorn15.display(3);
  popcorn15.update();
  popcorn15.checkEdges();

  popcorn16.display(4);
  popcorn16.update();
  popcorn16.checkEdges();

  popcorn17.display(1);
  popcorn17.update();
  popcorn17.checkEdges();

  popcorn18.display(2);
  popcorn18.update();
  popcorn18.checkEdges();

  popcorn19.display(3);
  popcorn19.update();
  popcorn19.checkEdges();

  popcorn20.display(4);
  popcorn20.update();
  popcorn20.checkEdges();

  popcorn21.display(1);
  popcorn21.update();
  popcorn21.checkEdges();

  popcorn22.display(2);
  popcorn22.update();
  popcorn22.checkEdges();

  popcorn23.display(3);
  popcorn23.update();
  popcorn23.checkEdges();

  popcorn24.display(4);
  popcorn24.update();
  popcorn24.checkEdges();
}