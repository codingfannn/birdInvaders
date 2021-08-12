class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacles = [];
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();

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
