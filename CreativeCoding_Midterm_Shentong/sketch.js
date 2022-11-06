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
  background(255);

  let m=millis();

  let scene01;
  let scene02;

  /*
  console.log("scene01");
  console.log(scene01);
  console.log("scene02");
  console.log(scene02);
  */

  //console.log(m);

  if(0<=(m%20000)&&(m%20000)<=9999){
    scene01 = true;
    scene02 = false;
  }

  if(scene01 == true && scene02 == false){
    //scene 01

    eyes01.display((color(235, 1, 0)),(color(250, 232, 208)), (color(5, 125, 192)), (color(230, 179, 0)));
    eyes02.display((color(4, 207, 217)),(color(252, 220, 0)), (color(184, 3, 1)), (color(251, 219, 220)));
    eyes03.display((color(7, 180, 0)),(color(251, 201, 6)), (color(230, 3, 133)), (color(1, 139, 1)));
    eyes04.display((color(9, 133, 85)),(color(260, 203, 167)), (color(226, 1, 116)), (color(11, 179, 207)));
    eyes05.display((color(236, 1, 119)),(color(178, 3, 2)), (color(1, 1, 60)), (color(202, 179, 3)));
    eyes06.display((color(255, 238, 212)),(color(255, 211, 1)), (color(204, 1, 0)), (color(102, 212, 179)));
    eyes07.display((color(1, 167, 209)),(color(240, 149, 0)), (color(0, 200, 231)), (color(254, 225, 227)));
    eyes08.display((color(0, 134, 190)),(color(127, 226, 212)), (color(1, 153, 16)), (color(235, 1, 135)));
    eyes09.display((color(214, 1, 0)),(color(252, 226, 3)), (color(0)), (color(253, 221, 165)));
  }

  //scene 02

  if(10000<=(m%20000)&&(m%20000)<=19999){
    scene01 = false;
    scene02 = true;
  }

  if(scene02 == true && scene01 == false){
    background(252, 239, 230);

    let range = map(mouseX, 0, width, 0, 500)

    for (let i = 0; i <= 400+range; i += 30){
      for (let j =0 ; j <= 900; j += 30){
        if ((j%60)==0){
          if(i<=150){
            fill(203, 51, 31);
            noStroke();
            ellipse(i,j,i/10+10,i/10+10);
          }
          else if(i<=350){
            fill(203, 51, 31);
            noStroke();
            ellipse(i,j,20,20);
          }else{
            fill(203, 51, 31);
            noStroke();
            ellipse(i,j,20-((i-400)/10),20-((i-400)/10));
          } 
        }
          else{
            if(i<=150){
              fill(203, 51, 31);
              noStroke();
              ellipse(i+15,j,i/10+10,i/10+10);
          }
            else if(i<=350){
              fill(203, 51, 31);
              noStroke();
              ellipse(i+15,j,20,20);
          }
          else{
            fill(203, 51, 31);
            noStroke();
            ellipse(i+15,j,20-((i-400)/10),20-((i-400)/10));
          } 
        }
      }
    }// end of background

    push();
    scale(2);

    //hairbase
    noStroke();
    fill(252, 239, 230);
    rect(59,286,120,120);
    rect(70,121,55,220);
    triangle(0,218,0,231,28,231);
    triangle(117,247,114,352,151,352);

    beginShape();
    vertex(89,59);
    vertex(89,226);
    vertex(125,226);
    vertex(132,125);
    vertex(90,59);
    endShape();

    beginShape();
    bezier(0,345,88,388,133,365,147,345);
    endShape();

    beginShape();
    vertex(0,15);
    vertex(0,120);
    vertex(47,200);
    vertex(45,15);
    endShape();

    //face outline
    noFill();
    stroke(41,48,116);
    strokeWeight(11);
    bezier(99,0,86,103,151,129,129,204);//face outline
    bezier(129,204,112,258,128,332,204,450);//face outline
    strokeWeight(13);//hair
    bezier(0,350,12,373,71,435,109,449);
    bezier(0,350,88,388,133,365,147,350);
    strokeWeight(12);
    bezier(0,322,37,338,107,319,127,293);
    strokeWeight(10);
    bezier(0,273,27,278,52,269,74,241);
    bezier(0,214,28,237,80,243,0,119);
    strokeWeight(8);
    bezier(38,14,42,67,96,57,113,105);
    bezier(0,63,15,110,71,112,72,179);
    bezier(0,31,25,56,44,82,67,116);

    strokeWeight(18);//eyebrow
    bezier(173,42,156,43,139,20,106,63);
    bezier(275,20,301,-20,400,36,424,0);

    //eyes
    noStroke();
    fill(252, 239, 230);//eyebase
    beginShape();//left
    bezier(213,131,192,100,163,99,122,130);//left eyes outline
    bezier(211,138,195,157,141,158,125,125);
    bezier(206,122,216,128,215,138,202,143);
    bezier(448,93,343,77,324,94,312,115);//right eyes
    bezier(330,98,357,50,380,72,417,92);
    bezier(450,90,363,167,340,104,327,118);
    bezier(327,97,298,109,318,119,338,123);
    rect(355,111,55,12);
    endShape();

    stroke(41,48,116);//iris
    strokeWeight(6);
    fill(137,200,181);
    ellipse(183,129,40,40);
    ellipse(395,102,43,43);

    fill(41,48,116);
    ellipse(183,129,9,9);
    ellipse(395,102,11,11);

    noStroke();
    fill(240,227,221);
    ellipse(179,123,5,9);
    ellipse(392,95,6,11);

    noFill();
    stroke(41,48,116);
    strokeWeight(8);
    bezier(213,127,192,100,163,99,122,126);//left eyes outline
    bezier(211,142,195,157,141,158,125,129);

    bezier(358,74,343,77,324,94,312,113);//right eyes
    bezier(358,74,380,70,423,97,448,88);
    bezier(450,95,363,167,340,104,327,123);

    //eyelash
    noStroke();
    fill(41,48,116);

    //left
    beginShape();
    curveVertex(120,133);
    curveVertex(120,133);
    curveVertex(98,115);
    curveVertex(130,125); 
    curveVertex(130,125);  
    endShape();

    beginShape();
    curveVertex(123,120);
    curveVertex(123,120);
    curveVertex(110,105);
    curveVertex(139,115); 
    curveVertex(139,115); 
    endShape();

    beginShape();
    curveVertex(140,118);
    curveVertex(140,118);
    curveVertex(128,105);
    curveVertex(147,110); 
    curveVertex(147,110); 
    endShape();

    beginShape();
    curveVertex(150,109);
    curveVertex(150,109);
    curveVertex(143,98);
    curveVertex(162,104); 
    curveVertex(162,104); 
    endShape();

    beginShape();
    curveVertex(166,103);
    curveVertex(166,103);
    curveVertex(160,95);
    curveVertex(186,107); 
    curveVertex(186,107); 
    endShape();

    beginShape();
    curveVertex(122,135);
    curveVertex(122,135);
    curveVertex(110,145);
    curveVertex(130,143); 
    curveVertex(130,143); 
    endShape();

    beginShape();
    curveVertex(133,143);
    curveVertex(133,143);
    curveVertex(130,155);
    curveVertex(150,150); 
    curveVertex(150,150); 
    endShape();

    beginShape();
    curveVertex(151,152);
    curveVertex(151,152);
    curveVertex(148,159);
    curveVertex(173,150); 
    curveVertex(173,150); 
    endShape();

    beginShape();
    curveVertex(171,153);
    curveVertex(171,153);
    curveVertex(169,160);
    curveVertex(188,148); 
    curveVertex(188,148); 
    endShape();

    //right
    beginShape();
    curveVertex(357,76);
    curveVertex(357,76);
    curveVertex(380,62);
    curveVertex(375,75);
    curveVertex(375,75);
    endShape();

    beginShape();
    curveVertex(377,75);
    curveVertex(377,75);
    curveVertex(397,65);
    curveVertex(388,80);
    curveVertex(388,80);
    endShape();

    beginShape();
    curveVertex(390,80);
    curveVertex(390,80);
    curveVertex(412,70);
    curveVertex(405,80);
    curveVertex(405,80);
    endShape();

    beginShape();
    curveVertex(408,85);
    curveVertex(408,85);
    curveVertex(442,75);
    curveVertex(426,90);
    curveVertex(426,90);
    endShape();

    beginShape();
    curveVertex(426,90);
    curveVertex(426,90);
    curveVertex(460,78);
    curveVertex(445,90);
    curveVertex(445,90);
    endShape();

    beginShape();
    curveVertex(430,105);
    curveVertex(430,105);
    curveVertex(460,110);
    curveVertex(450,97);
    curveVertex(450,97);
    endShape();

    beginShape();
    curveVertex(425,115);
    curveVertex(425,115);
    curveVertex(446,119);
    curveVertex(438,108);
    curveVertex(438,108);
    endShape();

    beginShape();
    curveVertex(425,115);
    curveVertex(425,115);
    curveVertex(446,119);
    curveVertex(433,108);
    curveVertex(433,108);
    endShape();

    beginShape();
    curveVertex(413,124);
    curveVertex(413,124);
    curveVertex(431,125);
    curveVertex(419,115);
    curveVertex(419,115);
    endShape();

    noFill();
    stroke(41,48,116);
    strokeWeight(6);
    bezier(270,93,271,82,274,75,282,68);//small line near right eyes
    bezier(333,85,323,80,313,71,310,57);

    strokeWeight(11);
    bezier(130,-10,95,18,45,4,0,15);

    strokeWeight(8);
    bezier(214,84,232,93,250,183,223,227);//nose
    bezier(223,261,223,269,232,278,246,281);
    bezier(308,279,327,268,327,257,319,246);

    bezier(271,262,282,255,291,258,296,266);//nosehole

    //mouth
    noStroke();
    fill(166,30,34);

    triangle(262,335,223,352,281,352);
    triangle(262,335,281,352,352,342);
    triangle(262,335,281,352,352,342);
    triangle(245,360,238,382,263,382);
    triangle(305,377,355,377,345,357);

    beginShape();
    vertex(322,340);
    vertex(317,347);
    vertex(360,357);
    vertex(360,345);
    endShape();

    beginShape();//mouthbase
    bezier(220,354,233,331,244,331,260,337);//upperlip
    bezier(370,346,301,319,282,317,260,337);
    bezier(358,339,370,345,365,355,360,358);
    bezier(287,352,272,360,239,361,223,352);
    bezier(358,372,323,427,224,412,242,375);//downlip
    bezier(355,378,364,368,358,354,340,353);
    endShape();

    noFill();
    stroke(41,48,116);
    strokeWeight(6);
    bezier(220,354,233,331,244,331,260,334);//upperlip outline
    bezier(370,346,301,319,282,317,260,334);
    bezier(362,356,311,335,255,372,221,354);

    bezier(344,354,329,377,243,381,244,361);//downlip ouline
    bezier(358,372,323,427,224,412,242,365);

    strokeWeight(6);//inbetween mouth and lip
    bezier(254,318,260,309,260,302,255,294);
    pop();

    //end of scene 02
  }

  //popcorn layer

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