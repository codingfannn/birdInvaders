class Obstacle {
  constructor() {
    this.width = 100;
    this.height = 70;
    //this.x = 1500;
    this.x = CANVAS_WIDTH + this.width;
    this.y = 150;
    this.speed = 10;
    this.currentBird = random(birds);
  }

  draw() {
    this.x -= 8;
    this.y += 2;
    image(this.currentBird, this.x, this.y, this.width, this.height);
    //if (this.x <= -this.width) {
    //  this.x = 0;
    // }
  }
}
