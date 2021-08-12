class Obstacle {
  constructor() {
    this.width = 200;
    this.height = 100;
    this.x = 1000;
    //this.x = CANVAS_WIDTH + this.width;
    this.y = 150;
  }

  draw() {
    this.x -= 8;
    this.y += 2;
    image(theBird, this.x, this.y, this.width, this.height);
  }
}
