/*
body PopCorn = (254, 248, 222);
outline PopCorn = (196, 160, 134);
core = (193, 135, 71);

*/

class Popcorn{

	constructor(){
		this.mass = 1;
		this.position = createVector(random(0,900), random(0,900));
		this.velocity = createVector(0,0);
		//this.velocity.mult(2);
	}

	update(){
		if (0<mouseX<900&&0<mouseY<900){
			if ((mouseX - this.position.x)<10 || (mouseY - this.position.y)<10){
				let mouse = createVector(mouseX, mouseY);
				this.acceleration = p5.Vector.sub(mouse, this.position).div(-1);
				this.acceleration.setMag(1);
			} else {
				this.acceleration = createVector(0, 0);
			}
		}

		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.velocity.limit(10);

		//console.log(this.position.x);
		//console.log(this.position.y);
	}

	applyForce(force){
		let f = p5.Vector.div(force, this.mass);
	    this.acceleration.add(f);
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

	overlaps(other){
		let distance = dist(this.position.x, this.position.y, other.position.x, other.position.y);

		if (distance < 70){
			this.velocity.x *= -1;
			this.velocity.y *= -1;
			other.velocity.x *= -1;
			other.velocity.y *= -1;
		} 

		//console.log(distance);

	}

	display(style){

		if(style == 1){
			noStroke();

			fill(196, 160, 134);
			ellipse(this.position.x-10,this.position.y-5, 40, 40);
			ellipse(this.position.x+5,this.position.y+10, 40, 40);
			ellipse(this.position.x-15,this.position.y+15, 40, 40);
			ellipse(this.position.x+10,this.position.y-10, 40, 40);
			ellipse(this.position.x+20,this.position.y+20, 40, 40);

			fill(254, 248, 222);
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

		if(style == 2){
			noStroke();
			fill(196, 160, 134);
			ellipse(this.position.x-30,this.position.y-5, 40, 40);
			ellipse(this.position.x-15,this.position.y+10, 40, 40);
			ellipse(this.position.x-45,this.position.y+25, 40, 40);
			ellipse(this.position.x+10,this.position.y+20, 40, 40);
			ellipse(this.position.x-20,this.position.y+40, 40, 40);

			fill(254, 248, 222);
			ellipse(this.position.x-30,this.position.y-5, 30, 30);
			ellipse(this.position.x-15,this.position.y+10, 30, 30);
			ellipse(this.position.x-45,this.position.y+25, 30, 30);
			ellipse(this.position.x+10,this.position.y+20, 30, 30);
			ellipse(this.position.x-20,this.position.y+40, 30, 30);
			ellipse(this.position.x-10,this.position.y+22, 30, 30);
			ellipse(this.position.x-20,this.position.y+20, 30, 30);

			fill(193, 135, 71);
			ellipse(this.position.x-22,this.position.y+25, 10, 10);
			ellipse(this.position.x-15,this.position.y+20, 10, 10);
			ellipse(this.position.x-25,this.position.y+20, 10, 10);
			ellipse(this.position.x-20,this.position.y+20, 10, 10);
			ellipse(this.position.x-17,this.position.y+25, 10, 10);


		}
	}
}