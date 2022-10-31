class Eyes{

	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	background(color01, color02){
		for (let i = 0; i < 300; i += 10){
			if ((i%20)==0){
				fill(color01);
				rect(this.x, this.y, 300-i, 300-i);
			} else {
				fill(color02);
				rect(this.x, this.y, 300-i, 300-i);
			}
		}
	}

	display(){
		noStroke();

		fill(225, 232, 237);//color of eye base
		ellipse(this.x-65, this.y, 120, 200);//left
		ellipse(this.x+65, this.y, 120, 200);//right

		fill(245, 248, 250);//eye white
		ellipse(this.x-65, this.y, 105, 180);//left
		ellipse(this.x+65, this.y, 105, 180);//right

		let locLeftX = map (mouseX, 0, width, this.x - 65 - 30, this.x - 65 + 30 );
		let locRightX = map (mouseX, 0, width, this.x + 65 - 30, this.x + 65 + 30 );
		let locY = map (mouseY, 0, width, this.y - 30, this.y + 30 );

		//Left Eyeball
		fill(136, 153, 166);
		ellipse(locLeftX, locY, 60, 60);

		fill(41, 47, 51);
		ellipse(locLeftX, locY, 45, 45);

		fill(245, 248, 250);
		ellipse(locLeftX+10, locY-15, 10, 10);

		//Right Eyeball
		fill(136, 153, 166);
		ellipse(locRightX, locY, 60, 60);

		fill(41, 47, 51);
		ellipse(locRightX, locY, 45, 45);

		fill(245, 248, 250);
		ellipse(locRightX+10, locY-15, 10, 10);



	}

	
}