const game = new Game();

function draw() {
  game.draw();
}

function setup() {
  game.setup();
}

function preload() {
  bgImage = loadImage("./assets/background_base.png");
  thePig = loadImage("./assets/pig.png");
  theBird = loadImage("./assets/red_angry_bird.png");
  yellowBird = loadImage("./assets/yellow_bird.png");
  // purpleBird = loadImage("./assets/purpl")
}
