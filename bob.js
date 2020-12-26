class Bob{

    constructor(x,y,radius){

    var options = {
        friction: 0.3,
        density: 0.8,
        restitution: 1.0
    }

this.body = Bodies.circle(x,y,radius, options);
this.radius = radius;

World.add(world, this.body);

    }

display(){
    var pos = this.body.position;

    ellipseMode(RADIUS);
    
    fill("green")
    ellipse(pos.x,pos.y,this.radius,this.raduis)
    
}





}