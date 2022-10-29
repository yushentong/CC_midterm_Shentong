/*
body PopCorn = (254, 248, 222);
outline PopCorn = (196, 160, 134);
core = (193, 135, 71);

*/

class Popcorn{

	constructor(){
		this.position = createVector(450, 450);
	}

	display(){

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