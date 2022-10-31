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
  popcorn25 = new Popcorn();
  popcorn26 = new Popcorn();
  popcorn27 = new Popcorn();
  popcorn28 = new Popcorn();
  popcorn29 = new Popcorn();
  popcorn30 = new Popcorn();
  popcorn30 = new Popcorn();
  popcorn31 = new Popcorn();
  popcorn32 = new Popcorn();
  popcorn33 = new Popcorn();
  popcorn34 = new Popcorn();
  popcorn35 = new Popcorn();
  popcorn36 = new Popcorn();
  popcorn37 = new Popcorn();
  popcorn38 = new Popcorn();
  popcorn39 = new Popcorn();
  popcorn40 = new Popcorn();
  popcorn41 = new Popcorn();
  popcorn42 = new Popcorn();
  popcorn43 = new Popcorn();
  popcorn44 = new Popcorn();

  //from top to down, left to right
  eyes01 = new Eyes(150, 150);
  eyes02 = new Eyes(450, 150);
  eyes03 = new Eyes(750, 150);
  eyes04 = new Eyes(150, 450);
  eyes05 = new Eyes(450, 450);
  eyes06 = new Eyes(750, 450);
  eyes07 = new Eyes(150, 750);
  eyes08 = new Eyes(450, 750);
  eyes09 = new Eyes(750, 750);
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

  eyes01.display((color(235, 1, 0)),(color(250, 232, 208)), (color(5, 125, 192)), (color(230, 179, 0)));
  eyes02.display((color(4, 207, 217)),(color(252, 220, 0)), (color(184, 3, 1)), (color(251, 219, 220)));
  eyes03.display((color(7, 180, 0)),(color(251, 201, 6)), (color(230, 3, 133)), (color(1, 139, 1)));
  eyes04.display((color(9, 133, 85)),(color(260, 203, 167)), (color(226, 1, 116)), (color(11, 179, 207)));
  eyes05.display((color(236, 1, 119)),(color(178, 3, 2)), (color(1, 1, 60)), (color(202, 179, 3)));
  eyes06.display((color(255, 238, 212)),(color(255, 211, 1)), (color(204, 1, 0)), (color(102, 212, 179)));
  eyes07.display((color(1, 167, 209)),(color(240, 149, 0)), (color(0, 200, 231)), (color(254, 225, 227)));
  eyes08.display((color(0, 134, 190)),(color(127, 226, 212)), (color(1, 153, 16)), (color(235, 1, 135)));
  eyes09.display((color(214, 1, 0)),(color(252, 226, 3)), (color(0)), (color(253, 221, 165)));

  //eye05.display((color(195, 170, 0)),(color(184, 2, 0)));

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

  popcorn25.display(1);
  popcorn25.update();
  popcorn25.checkEdges();

  popcorn26.display(2);
  popcorn26.update();
  popcorn26.checkEdges();

  popcorn27.display(3);
  popcorn27.update();
  popcorn27.checkEdges();

  popcorn28.display(4);
  popcorn28.update();
  popcorn28.checkEdges();

  popcorn29.display(1);
  popcorn29.update();
  popcorn29.checkEdges();

  popcorn30.display(2);
  popcorn30.update();
  popcorn30.checkEdges();

  popcorn31.display(3);
  popcorn31.update();
  popcorn31.checkEdges();

  popcorn32.display(4);
  popcorn32.update();
  popcorn32.checkEdges();

  popcorn33.display(1);
  popcorn33.update();
  popcorn33.checkEdges();

  popcorn34.display(2);
  popcorn34.update();
  popcorn34.checkEdges();

  popcorn35.display(3);
  popcorn35.update();
  popcorn35.checkEdges();

  popcorn36.display(4);
  popcorn36.update();
  popcorn36.checkEdges();

  popcorn37.display(1);
  popcorn37.update();
  popcorn37.checkEdges();

  popcorn38.display(2);
  popcorn38.update();
  popcorn38.checkEdges();

  popcorn39.display(3);
  popcorn39.update();
  popcorn39.checkEdges();

  popcorn40.display(4);
  popcorn40.update();
  popcorn40.checkEdges();

  popcorn41.display(1);
  popcorn41.update();
  popcorn41.checkEdges();

  popcorn42.display(2);
  popcorn42.update();
  popcorn42.checkEdges();

  popcorn43.display(3);
  popcorn43.update();
  popcorn43.checkEdges();

  popcorn44.display(4);
  popcorn44.update();
  popcorn44.checkEdges();
}