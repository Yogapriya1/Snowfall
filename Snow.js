class Snow {
    constructor(x,y,r){
        var options={
            restitution:1,
            friction: 1,
            density: 4
        }
        this.image = loadImage("snow4.webp")
       this.body = Bodies.circle(x,y,r,options);
       World.add(world,this.body);
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,50,50)
    }
}