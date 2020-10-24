class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}




/*class Dustbin 
{

    constructor(x,y) 
    {
       this.x = x;
       this.y = y;

       this.dustbinWidth = 200;
       this.dustbinHeight = 100;
       this.dustbinWallThickness = 20;

       var options={ 
           isStatic : true,
       }
       this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinThickness,options);
       this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y+this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);
       this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y- this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,options);

      // Matter .Body.setAngle(this.leftBody,0);
       World.add(world,this.leftBody);
       World.add(world,this.rightBody);
       World.add(world,this.bottomBody);
       

    }

    display() {

        var pos = this.bottomBody.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        rect(0,0,this.dustbinWidth,this.dustbinThickness);
        pop();

        var pos1 = this.rightBody.position;
        push();
        translate(pos1.x,pos1.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        rect(0,0,this.dustbinThickness,this.dustbinHeight);
        pop();


        var pos2 = this.leftBody.position;
        push();
        translate(pos2.x,pos2.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        rect(0,0,this.dustbinThickness,this.dustbinHeight);
        pop();


    }

};*/