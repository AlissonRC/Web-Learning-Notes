function createElement(tag, tagClass) {
  const newElement = document.createElement(tag);
  newElement.className = tagClass;
  return newElement;
}

function createFullPipe(reversePipe = true) {
  this.newPipe = createElement("div", "pipe");
  const pipeBody = createElement("div", "pipeBody");
  const PipeBorder = createElement("div", "pipeBorder");
  this.newPipe.appendChild(reversePipe ? pipeBody : PipeBorder);
  this.newPipe.appendChild(reversePipe ? PipeBorder : pipeBody);
  this.setHeight = (height) => {
    pipeBody.style.height = height + "px";
  };
}

function createPipes(position, height, gap) {
  this.newPipes = createElement("div", "pipes");
  this.pipeTop = new createFullPipe(true);
  this.pipeBot = new createFullPipe(false);

  this.newPipes.appendChild(this.pipeTop.newPipe);
  this.newPipes.appendChild(this.pipeBot.newPipe);
  this.randomGap = () => {
    const topHeight = Math.random() * (height - gap);
    const bottomHeigth = height - gap - topHeight;
    this.pipeTop.setHeight(topHeight);
    this.pipeBot.setHeight(bottomHeigth);
  };
  this.getX = () => parseInt(this.newPipes.style.left.split("px")[0]);
  this.setX = (position) => (this.newPipes.style.left = position + "px");
  this.getWidth = () => this.newPipes.clientWidth;
  this.randomGap();
  this.setX(position);
}

function drawGame(heigth, position, gap, space, score) {
  this.arrayPipes = [
    new createPipes(position, heigth, gap),
    new createPipes(position + space, heigth, gap),
    new createPipes(position + space * 2, heigth, gap),
    new createPipes(position + space * 3, heigth, gap),
  ];
  const move = 3;

  this.animate = () => {
    this.arrayPipes.forEach((element) => {
      element.setX(element.getX() - move);

      if (element.getX() < -element.getWidth()) {
        element.setX(element.getX() + space * this.arrayPipes.length);
        element.randomGap();
      }
      const middle = position / 2;
      const hitMiddle =
        element.getX() + move >= middle && element.getX() < middle;
      if (hitMiddle) {
        // score();
      }
    });
  };
}
const game = new drawGame(520, 1200, 200, 400);
const gameScreen = document.querySelector("[wm-flappy]");
game.arrayPipes.forEach((element) => gameScreen.appendChild(element.newPipes));

function birdCreate(gameHeight) {
  this.bird = createElement("img", "bird");
  this.bird.src = "imgs/passaro.png";
  this.getY = () => parseInt(this.bird.style.bottom.split("px")[0]);
  this.setY = (y) => (this.bird.style.bottom = y + "px");
  this.setY(gameHeight / 2);
}
function birdGravity(bird) {
  const gravity = 3;

  let keypress = false;
  window.onkeyup = (e) => (keypress = false);
  window.onkeydown = (e) => (keypress = true);
  this.teste = () => {
    if (keypress) {
      gameOver();
      console.log(keypress);

      bird.setY(bird.getY() + gravity * 2);
    } else if (!keypress) {
      console.log(keypress);
      bird.setY(bird.getY() - gravity);
    }
  };
}
function gameOver() {
  clearInterval(gameLoop);
}
const bird = new birdCreate(520);
gameScreen.appendChild(bird.bird);
gameScreen.append(bird.bird);
const birdFall = new birdGravity(bird);
const gameLoop = setInterval(() => {
  game.animate();
  birdFall.teste();
}, 20);
