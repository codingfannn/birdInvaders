class Obstacle {
  constructor() {
    this.width = 50;
    this.height = 35;

    this.x = CANVAS_WIDTH + this.width;
    this.y = random(0, CANVAS_HEIGHT - this.height);

    this.currentBird = random(birds);
    this.delete = false;
    this.isDestroying = false;
  }

  draw() {
    this.x -= 7;

    this.height += random(0.1, 0.3);
    this.width += random(0.1, 0.3);
    image(this.currentBird, this.x, this.y, this.width, this.height);
  }

  destroy() {
    this.isDestroying = true;
    setTimeout(() => {
      this.delete = true;
    }, 200);
    /*if (this.isDestroying) {
      this.currentBird = explosionImage;
      image(explosionImage, this.x, this.y, this.width, this.height);
    } else {
      image(explosionImage, this.x, this.y, this.width, this.height);
    }   */
  }

  remove() {
    this.delete = true;
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
