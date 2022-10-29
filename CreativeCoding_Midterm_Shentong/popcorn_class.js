/*
body PopCorn = (254, 248, 222);
outline PopCorn = (196, 160, 134);
core = (193, 135, 71);

*/

class Popcorn{

	constructor(x, y){
		this.position = createVector(x, y);
		this.velocity = createVector(0,2);
		this.velocity.mult(2);
	}

	update(){
		let mouse = createVector(mouseX, mouseY);
		this.acceleration = p5.Vector.sub(mouse, this.position);
		this.acceleration.setMag(0.1);

		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);

		console.log(popcorn01.x);
		console.log(popcorn01.y);
	}

	checkEdges(){

	  if (this.position.x > width) {
	     this.position.x = width;
	     this.velocity.x *= -1;
	  }
	  else if (this.position.x < 0) {
	     this.position.x = 0;
	     this.velocity.x *= -1;
	  }
	    
	  if (this.position.y > height){
		  this.position.y = height;
		  this.velocity.y *= -1;
	  }
	  else if(this.position.y <0){
		  this.position.y = 0;
	      this.velocity.y *= -1;
	  }
  }

	display(){
		//popcorn style 1

		noStroke();

		fill(196, 160, 134);
		ellipse(this.position.x-10,this.position.y-5, 40, 40);
		ellipse(this.position.x+5,this.position.y+10, 40, 40);
		ellipse(this.position.x-15,this.position.y+15, 40, 40);
		ellipse(this.position.x+10,this.position.y-10, 40, 40);
		ellipse(this.position.x+20,this.position.y+20, 40, 40);

		fill(1254, 248, 222);
		ellipse(this.position.x-10,this.position.y-5, 30, 30);
		ellipse(this.position.x+5,this.position.y+10, 30, 30);
		ellipse(this.position.x-15,this.position.y+15, 30, 30);
		ellipse(this.position.x+10,this.position.y-10, 30, 30);
		ellipse(this.position.x+20,this.position.y+20, 30, 30);

		strokeWeight(5);
		stroke(193, 135, 71);
		arc(this.position.x-10,this.position.y-5, 20, 20, 0, 0.5*PI);
		arc(this.position.x+20,this.position.y+20, 20, 20, PI, 1.25*PI);

	}
}