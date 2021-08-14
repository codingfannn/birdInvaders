class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    noStroke();
    fill(247, 223, 5);
    ellipse(this.x, this.y, 25, 25);
    this.x += 5;
  }

  move() {
    this.x += 5;
  }
}
