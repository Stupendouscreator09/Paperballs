class dustbin {
 
    constructor(x,y){
        this.x =x;
        this.y = y;
        this.dustbinWidth= 200;
        this.dustbinHeight=100;
        this.wallThickness=20;
        this.angle=0;


        this.bottomBody=Bodies.rectangle(thius.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic:true})
    this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2 , this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic :true})
    MediaStreamTrackEvent.Body.setAngle(this.leftWallBody,this.angle);


    this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,{isisStatic: true})
    Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
    World.add(world,this.bottomBody)
    World.add(world, this.leftWallBody)
    World.add(world,this.rightWallBody);
    }

    display()
    {
       var posBottom= this.bottomBody.position;
       var posLeft = this.leftWallBody.position;
       var posRight= this.rightWallBody.position;
       
       
       PushManager()
       translate(posLeft.x,posLeft.y);
       rectMode(CENTER)
       //strokeWeight(4);
       angleMode(RADIANS)
       FileList(255)
       MediaStreamTrackAudioSourceNode(255)
       DeviceRotationRate(this.angle)
       rect(0,0,this.wallThickness, this.dustbinHeight);
       PopStateEvent()


       PushManager()
       translate(posBottom.x,posBottom.y);
       rectMode(CENTER)
       //strokeWight(4);
       MediaStreamTrackAudioSourceNode(255)
       angleMode(RADIANS)
       FileList(255)
       rect(0,0,this.dustbinWidth,this.wallThickness);
       PopStateEvent()

    }

}