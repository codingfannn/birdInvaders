class Obstacle {
  constructor() {
    this.width = 200;
    this.height = 100;
    this.x = CANVAS_WIDTH + this.width;
    this.y = 70;
  }

  draw() {
    this.x -= 5;
    image(theBird, this.x, this.y, this.width, this.height);
  }
}
