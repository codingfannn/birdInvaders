class Bullet {
  constructor(x, y, bulletImg) {
    this.x = x;
    this.y = y;
    this.width = 75;
    this.height = 50;
    this.image = bulletImg;
    this.delete = false;
  }

  show() {
    image(bulletImg, this.x, this.y, this.width, this.height);
    this.x += 5;
    console.log(bulletImg);
  }

  remove() {
    this.delete = true;
  }
}
