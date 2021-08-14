class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacles = [];
    this.bullet = [];
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  mousePressed() {
    if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
      background(255, 0, 0);
    } else {
      song.play();
      background(0, 255, 0);
    }
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();

    /*for (let i = 0; i < bullet.length; i++) {
      this.bullet[i].show();
      this.bullet[i].move();
    }*/

    this.bullet.forEach((bullet, index) => {
      bullet.show();
    });

    //this.bullet.show();
    //this.bullet.move();

    if (frameCount % 45 === 0) {
      this.obstacles.push(new Obstacle());
    }
    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();

      if (obstacle.x < -obstacle.width) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  keyPressed() {
    if (keyCode === SPACE) {
      //let bullets = new Bullet(0, CANVAS_HEIGHT / 2.5);
      this.bullet.push(new Bullet(this.player.x + 100, this.player.y + 100));
    }
  }
}
