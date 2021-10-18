class computerArcher{
    constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.compArcherImage = loadImage("assets/computerArcher.png")
  }
  display() {
    var pos = [this.body.x,this.body.y,this.body.width,this.body.height];
    var angle = this.body.angle;
    if (keyIsDown(DOWN_ARROW) && angle < 1.9) {
    angle += 0.01;
    Matter.Body.setAngle(this.body, angle);
    }
    if (keyIsDown(UP_ARROW) && angle > -1.9) {
    angle -= 0.01; Matter.Body.setAngle(this.body, angle);
    } 
    Matter.Body.setAngle(this.body, PI / 2); // -90 degree
    push();
    translate(pos[1],pos[2]);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop(); 
    } 
  }