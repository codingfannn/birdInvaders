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
    console.log(bulletImg);
  }

  remove() {
    this.delete = true;
  }
}
