class Bob{

	constructor(x,y,){
	
		var options={
			
			restitution:1,
			friction:0.3,
			density:0.8
			
			}
		
		this.body=Bodies.circle(x,y, 25, options);
		World.add(myWorld, this.body);

	}
	display()
	{
			
			var pos=this.body.position;
			//push()
			//translate(paperpos.x, paperpos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			fill("red")
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(pos.x,pos.y,50,50);
			//pop()
			
	}

}

