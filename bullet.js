class Bullet {
  constructor(x, y, bulletImg) {
    this.x = x;
    this.y = y;
    this.width = 55;
    this.height = 40;
    this.image = bulletImg;
    this.delete = false;
  }

  show() {
    image(bulletImg, this.x, this.y - 20, this.width, this.height);
    this.x += 5;
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
