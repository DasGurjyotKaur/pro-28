class Mango{
    constructor(x,y){
     var  options={
        isStatic:true,
        restitution:0,
        friction:1,
      
    
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
        
       this.image = loadImage("sprite/mango.png");
        World.add(world, this.body);
    }
    display(){
  var pos 
  pos=this.body.position
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius);
  
    }
  }