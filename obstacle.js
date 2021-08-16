class Obstacle {
  constructor() {
    this.width = 50;
    this.height = 35;
    //this.x = 1500;
    this.x = CANVAS_WIDTH + this.width;
    this.y = random(0, CANVAS_HEIGHT - this.height);
    this.currentBird = random(birds);
    this.delete = false;
  }

  draw() {
    this.x -= 7;

    this.height += random(0.1, 0.3);
    this.width += random(0.1, 0.3);
    image(this.currentBird, this.x, this.y, this.width, this.height);
  }

  remove() {
    this.delete = true;
  }
}
