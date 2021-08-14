class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacles = [];
    this.bullet = new Bullet(0, CANVAS_HEIGHT / 2.5);
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();
    this.bullet.show();
    this.bullet.move();

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
}
