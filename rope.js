class Rope{
	constructor(body1,body2,xOffset){
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:xOffset,y:0}
		}
		//console.log(options);
		this.rope=Constraint.create(options);
		this.xOffset=xOffset;
		World.add(myWorld,this.rope);
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
        stroke("blue");
		strokeWeight(2);
        //fill("white");
		line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y);
	}

}