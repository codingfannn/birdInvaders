class Player {
  constructor() {
    this.y = CANVAS_HEIGHT / 2;
    this.x = 0;
    this.height = 100;
    this.width = 100;
    this.speed = 15;
    this.rightBoundary = CANVAS_WIDTH - this.width;
    this.bottomBoundary = CANVAS_HEIGHT - this.height;
    this.delete = false;
  }

  draw() {
    this.move();
    this.maintainBoundaries();
    image(thePig, this.x, this.y, this.width, this.height);
  }

  maintainBoundaries() {
    if (this.x >= this.rightBoundary) {
      this.x = this.rightBoundary;
    }

    if (this.y >= this.bottomBoundary) {
      this.y = this.bottomBoundary;
    }

    if (this.x <= 0) {
      this.x = 0;
    }

    if (this.y <= 0) {
      this.y = 0;
    }
  }

  remove() {
    this.delete = true;
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

  get bottomSide() {
    return this.y + this.height;
  }
  get topSide() {
    return this.y;
  }
  get leftSide() {
    return this.x;
  }
  get rightSide() {
    return this.x + this.width;
  }
}
