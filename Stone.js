class Stone {
    constructor(x, y) {
      var options = {
   
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 60,60, options);
      this.width = 60;
      this.height = 60;

      this.image=loadImage("pluckingMangoes/stone.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
    // rectMode(CENTER);
     //rect(pos.x, pos.y, this.width, this.height);

      imageMode(CENTER);
      image(this.image,pos.x,pos.y,60,60)
     
    }
  }