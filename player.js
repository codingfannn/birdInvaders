class Player {
  constructor() {
    this.y = CANVAS_HEIGHT / 3;
    this.x = 0;
    this.height = 150;
    this.width = 150;
    this.speed = 15;
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
  }

  draw() {
    this.move();
    this.maintainBoundaries();
    image(thePig, this.x, this.y, this.width, this.height);
  }

  maintainBoundaries() {
    if (this.x >= this.rightBoundary) {
      this.x = 0;
    }

    if (this.y >= this.bottomBoundary) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = this.rightBoundary;
    }
    if (this.y < 0) {
      this.y = this.bottomBoundary;
    }
  }

  move() {
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
  }
}
