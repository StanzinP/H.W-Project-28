class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(600,430,300,20,options);
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER)
      fill("red");
      image(this.image,pos.x,pos.y,500, 700);
    }
  }