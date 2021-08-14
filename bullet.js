class Bullet {
  constructor() {
    this.x = 255;
    this.y = CANVAS_HEIGHT / 2.5;
  }

  show() {
    fill(247, 223, 5);
    ellipse(this.x, this.y, 25, 25);
  }

  move() {
    this.x += 5;
  }
}
