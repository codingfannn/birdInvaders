class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
  }

  draw() {
    this.x -= 3;
    image(bgImage, this.x, this.y, this.width, this.height);
    image(bgImage, this.x + this.width, this.y, this.width, this.height);
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }

  playSound() {
    let audio = document.getElementsByClassName("music")[0];
    audio.play();
  }
}
