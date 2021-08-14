class Obstacle {
  constructor() {
    this.width = 50;
    this.height = 35;
    //this.x = 1500;
    this.x = CANVAS_WIDTH + this.width;
    this.y = 300;

    this.currentBird = random(birds);
  }

  draw() {
    this.x -= 7;
    //this.y +=
    this.height += random(0.3, 0.5);
    this.width += random(0.1, 0.3);
    image(this.currentBird, this.x, this.y, this.width, this.height);
    //if (this.x <= -this.width) {
    //  this.x = 0;
    // }
  }
}
