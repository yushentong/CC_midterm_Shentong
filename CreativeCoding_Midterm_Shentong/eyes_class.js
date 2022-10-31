class Eyes{

	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	/*background(color01, color02){
		for (let i = 0; i < 300; i += 10){
			if ((i%20)==0){
				fill(color01);
				rect(this.x, this.y, 300-i, 300-i);
			} else {
				fill(color02);
				rect(this.x, this.y, 300-i, 300-i);
			}
		}
	}*/

	display(color01, color02, color03, color04){

		noStroke();

		fill(color01);//background of the frame
		rect(this.x, this.y, 300, 300)

		fill(color04);//eyewhite pop art mimic
		ellipse(this.x-60, this.y, 120, 200);//left
		ellipse(this.x+70, this.y, 120, 200);//right

		fill(color03);//color of eye base
		ellipse(this.x-65, this.y, 120, 200);//left
		ellipse(this.x+65, this.y, 120, 200);//right

		fill(color04);//eye white on the eye base
		ellipse(this.x-65, this.y, 105, 180);//left
		ellipse(this.x+65, this.y, 105, 180);//right

		let locLeftX = map (mouseX, 0, width, this.x - 65 - 30, this.x - 65 + 20 );
		let locRightX = map (mouseX, 0, width, this.x + 65 - 30, this.x + 65 + 20 );
		let locY = map (mouseY, 0, width, this.y - 30, this.y + 30 );

		//Eyeball
		fill(color01);//eyeball base pop art mimic
		ellipse(locLeftX+5, locY, 60, 60);
		ellipse(locRightX+5, locY, 60, 60);

		fill(color02);//eyeball base
		ellipse(locLeftX, locY, 60, 60);
		ellipse(locRightX, locY, 60, 60);

		fill(color01);//eyeball iris
		ellipse(locLeftX, locY, 35, 35);
		ellipse(locRightX, locY, 35, 35);

		fill(color03);//eyeball highlight
		ellipse(locLeftX+10, locY-10, 20, 20);
		ellipse(locRightX+10, locY-10, 20, 20);

		//Decoration
		noFill();
		strokeWeight(10);
		stroke(color03);
		arc(this.x+65, this.y, 150, 240, 0, 0.5*PI);
		arc(this.x-65, this.y, 150, 240, PI, 1.5*PI);


	}

	
}