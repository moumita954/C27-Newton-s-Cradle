class Roof{

	constructor(){
	
		var options={
			isStatic:true			
			}
	
		this.body=Bodies.rectangle(400,100,300,10, options);
		this.width=300;
		this.height=10;
 		World.add(myWorld, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			//push()
			//translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("yellow");
			rect(pos.x,pos.y,this.width, this.height);
			//pop()
			
	}

}