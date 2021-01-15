class Ropenew{
    constructor(body1,point2)
    {
        var options=
        {
            bodyA:body1,
           
            pointB:point2
        }
    this.rope =Constraint.create(options);
    this.bodyA = body1;
    this.pointB = point2;
    World.add(world,this.rope);
    }
    display()
    {
        var posA = this.rope.bodyA.position;
        var posB = this.rope.pointB;
        strokeWeight(5);
        stroke("green");
        line(posA.x,posA.y,posB.x,posB.y);

    }
}