class Bob{
    constructor(x,y)
    {
        var options=
        {
            friction:0.3,
            density:1,
            restitution:0.8
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        
        fill("yellow")
        ellipse(pos.x,pos.y,50,50);
    }
}