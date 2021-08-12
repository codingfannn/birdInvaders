class Obstacle {
  constructor() {
    this.width = 125;
    this.height = 75;
    this.x = 1000;
    //this.x = CANVAS_WIDTH + this.width;
    this.y = 150;
    this.speed = 13;
  }

  draw() {
    this.x -= 8;
    this.y += 2;
    image(theBird, this.x, this.y, this.width, this.height);
    image(yellowBird, this.x + 60, this.y + 70, 60, 60);
    //if (this.x <= -this.width) {
    //  this.x = 0;
    // }
  }
}
