class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacles = [];
    this.bullet = [];
    this.lives = 4;
    this.isPlaying = true;
  }

  restartGame() {
    if (this.isPlaying) {
      return;
    }

    loop();
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    //mySound = loadSound("./assets/angrysong.mp3");
  }

  // canvasPressed() {
  // mySound.play();
  //}

  draw() {
    this.background.draw();
    this.player.draw();

    // mySound.setVolume(0.6);

    /*for (let i = 0; i < bullet.length; i++) {
      this.bullet[i].show();
      this.bullet[i].move();
    }*/

    /*this.bullet.forEach((bullet, index) => {
      bullet.show();
      if (bullet.x >= CANVAS_WIDTH) {
        bullet.remove();
      }
    });*/

    //this.bullet.show();
    //this.bullet.move();

    if (frameCount % 30 === 0) {
      this.obstacles.push(new Obstacle());
    }
    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();

      if (obstacle.x < -obstacle.width) {
        this.obstacles.splice(index, 1);
      }

      if (this.collisionCheck(this.player, obstacle)) {
        console.log("-lives");
        this.obstacles.splice(index, 1);
        if (this.lives === 1) {
          this.isPlaying = false;
          noLoop();
        }
        this.lives--;
      }
    });

    /*if (this.collisionCheck(this.player, this.obstacle)) {
      console.log("AAAAAAAAAAAA");
      this.points++;
    }*/
  }

  keyPressed() {
    if (keyCode === SPACE) {
      //let bullets = new Bullet(0, CANVAS_HEIGHT / 2.5);
      this.bullet.push(new Bullet(this.player.x + 100, this.player.y + 100));
    }

    if (keyCode === ENTER) {
      this.restartGame();
    }
  }

  collisionCheck(object1, object2) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB
    if (object1.bottomSide < object2.topSide) {
      return false;
    }
    if (object1.rightSide < object2.leftSide) {
      return false;
    }
    if (object1.leftSide > object2.rightSide) {
      return false;
    }
    if (object1.topSide > object2.bottomSide) {
      return false;
    }
    return true;
  }

  //1st can be used, they are the same
  /*collisionCheck2(obstacle, player) {
    // UA > TB
    // RA > LB
    // LA < RB
    // TA < UB
    if (obstacle.bottomSide < player.topSide) {
      return false;
    }
    if (obstacle.rightSide < player.leftSide) {
      return false;
    }
    if (obstacle.leftSide > player.rightSide) {
      return false;
    }
    if (obstacle.topSide > player.bottomSide) {
      return false;
    }
    return true;
  }*/

  //collisionCheck(player, obstacle) {
  // UA > TB
  // RA > LB
  // LA < RB
  // TA < UB

  /*const aUnderSide = player.y + player.height;
    const bTopSide = obstacle.y;

    if (aUnderSide < bTopSide) {
      return false;
    }

    const aRightSide = player.x + player.width;
    const bLeftSide = obstacle.x;

    if (aRightSide < bLeftSide) {
      return false;
    }

    const aLeftSide = player.x;
    const bRightSide = obstacle.x + obstacle.width;
    if (aLeftSide > bRightSide) {
      return false;
    }

    const aTopSide = player.y;
    const bUnderSide = obstacle.y + obstacle.height;
    if (aTopSide > bUnderSide) {
      return false;
    }

    return true;
  }*/
}
