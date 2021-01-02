class Rope{
    constructor(a,b,xoffset){
        var options={
            bodyA:a,
            bodyB:b,
            pointB:{x:xoffset,y:0}
        }
        this.rope=Constraint.create(options)
        this.xoffset=xoffset
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y)
    }
}