class Stone{
    constructor(x,y){
     var  options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.3 
    
      }
      this.body = Bodies.rectangle(x, y, 30,40, options);
      this.width = 30;
      this.height = 40;
        
       this.image = loadImage("sprite/stone.png");
        World.add(world, this.body);
    }
    display(){
  var pos 
  pos=this.body.position
      imageMode(CENTER);
      image(this.image,pos.x,pos.y ,this.width, this.height);
  
    }
  }