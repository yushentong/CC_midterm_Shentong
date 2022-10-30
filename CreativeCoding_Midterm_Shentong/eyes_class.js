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

	eyes(){
		
	}

	
}