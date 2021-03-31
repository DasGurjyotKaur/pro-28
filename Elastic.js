class Elastic{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:50,
            stifness:0.02
        }
        this.pointB=pointB;
        this.elastic=Constraint.create(options);
        World.add(world,this.elastic);
    }
    display(){
    if(this.elastic.bodyA){
        var pointA=this.elastic.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(9);
        stroke("white");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }

    fly(){
        this.elastic.bodyA=null;
    }

}