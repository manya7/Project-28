class Tree {
    constructor(x, y) {
      var options = {
        isStatic: true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 400,400, options);
      this.width = 400;
      this.height = 400;

      this.image=loadImage("pluckingMangoes/tree.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
    //rectMode(CENTER);
    // rect(pos.x, pos.y, this.width, this.height);

      imageMode(CENTER);
      image(this.image,pos.x,pos.y,400,400)
     
    }
  }