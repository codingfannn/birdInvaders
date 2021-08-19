class Game {
  constructor() {
    this.player = new Player();
    this.background = new Background();
    this.obstacles = [];
    this.bullet = [];
    this.lives = 4;
    this.isStarted = false;
  }

  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    mySound = loadSound("./assets/AngryThemeSong.mp3");
  }

  restartGame() {
    if (isLooping()) {
      return;
    }
    this.player = new Player();
    this.background = new Background();
    this.bullet = [];
    this.lives = 4;
    livesHolder.innerText = "Lives: <span>4</span>";
    loop();
    mySound.play();
  }

  gameOver() {
    livesHolder.innerHTML = "";
    //background(150);
    image(bgImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    image(gameOverImage, 480, 175, 600, 400);

    textAlign(CENTER);
    //text("GAME OVER", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    text(
      "PRESS ENTER to play again",
      CANVAS_WIDTH / 2,
      CANVAS_HEIGHT / 2 + 200
    );
  }

  startScreen() {
    // background(150);
    image(bgImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    fill(5, 245, 105);
    textFont("Georgia", 75);
    stroke(color(237, 34, 2));
    strokeWeight(5);
    textAlign(CENTER);
    //text("BIRD INVADERS THE GAME", 1000, 300);
    //text("YOUR GOAL IS TO AVOID THE BIRDS", 1000, 500);
    text("PRESS ENTER to Start", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
  }

  draw() {
    // Show the start screen until not started
    if (!this.isStarted) {
      this.startScreen();
    }
    // If game started draw all the things
    else {
      livesHolder.innerHTML = `Lives: <span>${this.lives}</span>`;
      this.background.draw();
      this.player.draw();

      mySound.setVolume(0.6);

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
          this.lives--;
          livesHolder.innerHTML = `Lives: <span>${this.lives}</span>`;
          console.log(this.lives);
        }
      });

      if (this.lives === 0) {
        noLoop();
        mySound.stop();
        console.log("YOUR GAME IS OOOOOVEEEEERRRR");
        this.obstacles = [];
        this.gameOver();
      }
    }
  }

  keyPressed() {
    if (!mySound.isPlaying() && isLooping()) {
      mySound.loop();
      mySound.play();
      console.log("play started");
    }

    if (keyCode === SPACE) {
      //let bullets = new Bullet(0, CANVAS_HEIGHT / 2.5);
      this.bullet.push(new Bullet(this.player.x + 100, this.player.y + 100));
    }

    if (keyCode === ENTER) {
      if (isLooping()) {
        this.isStarted = true;
      } else {
        this.restartGame();
      }
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
