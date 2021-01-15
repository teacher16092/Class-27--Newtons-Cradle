class Rope{
    constructor(body1,body2,xOffset)
    {
        var options=
        {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:xOffset,y:0}
        }
    this.rope =Constraint.create(options);
    this.xOffset =xOffset;
    World.add(world,this.rope);
    }
    display()
    {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        strokeWeight(5);
        stroke("green");
        line(posA.x,posA.y,posB.x+this.xOffset,posB.y);

    }
}