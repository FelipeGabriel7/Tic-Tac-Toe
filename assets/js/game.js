class Game {
  constructor(player, playerTwo) {
    this.player = player;
    this.playerTwo = playerTwo;
    this.x = "X";
    this.circle = "O";
    this.inteligence = 0;
    this.counter = 0;
    this.filled = 0;
    this.element;
    this.caseItem = document.querySelectorAll(`.case`);
    this.one = document.querySelector(`.one`);
    this.two = document.querySelector(`.two`);
    this.game = document.querySelector(`.game-init`);
  }

  playersInGame() {
    this.one.addEventListener(`click`, () => {
      alert(` 1 player `);
      this.game.classList.toggle(`visible`);
      this.one.classList.add(`visible`);
      this.two.classList.add(`visible`);
      this.player = 0;
      this.playerTwo = this.inteligence;

      this.addItemAI();
    });

    this.two.addEventListener(`click`, () => {
      alert(`2 players`);
      this.game.classList.toggle(`visible`);
      this.one.classList.add(`visible`);
      this.two.classList.add(`visible`);
      this.player = 0;
      this.playerTwo = 0;

      this.addItem();
    });
  }

  playerGame() {
    if (this.player === this.playerTwo) {
      this.element = this.x;
    } else {
      this.element = this.circle;
    }

    return this.element;
  }

  playerGameAI() {
    if (this.player === this.inteligence) {
      this.element = this.x;
    } else {
      this.element = this.circle;
    }

    return this.element;
  }

  addItemAI() {
    for (let i = 0; i < this.caseItem.length; i++) {
      this.caseItem[i].addEventListener(`click`, () => {
        this.playerGameAI();

        let cloneElement = this.element;

        if (this.player === this.inteligence) {
          this.player++;

          if (this.inteligence) {
            this.inteligence++;
          }
        } else {
          this.playerTwo++;
        }

        console.log(cloneElement);

        for (let i = 0; i < this.caseItem.length; i++) {
          const randomNumber = Math.floor(
            Math.random() * (this.caseItem.length - 0) + 0
          );

          if (this.caseItem[i].innerHTML == 0) {
            console.log(this.caseItem[i]);

            this.caseItem[randomNumber].innerHTML = cloneElement;
            this.counter++;

            break;
          } else {
            this.filled++;
          }

          this.winGame();
        }
      });
    }
  }

  addItem() {
    this.caseItem.forEach((caseIt) => {
      caseIt.addEventListener(`click`, () => {
        this.playerGame();

        this.counter += 1;

        if (caseIt.innerHTML == 0) {
          let cloneElement = this.element;

          caseIt.innerHTML = cloneElement;

          if (this.player === this.playerTwo) {
            this.player++;
          } else {
            this.playerTwo++;
          }
        }

        this.winGame();
      });
    });
  }

  winGame() {
    let b1 = document.getElementById(`b1`);
    let b2 = document.getElementById(`b2`);
    let b3 = document.getElementById(`b3`);
    let b4 = document.getElementById(`b4`);
    let b5 = document.getElementById(`b5`);
    let b6 = document.getElementById(`b6`);
    let b7 = document.getElementById(`b7`);
    let b8 = document.getElementById(`b8`);
    let b9 = document.getElementById(`b9`);

    // horizontal

    if (b1.innerHTML === `X` && b2.innerHTML === `X` && b3.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b1.innerHTML === `O` &&
      b2.innerHTML === `O` &&
      b3.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    if (b4.innerHTML === `X` && b5.innerHTML === `X` && b6.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b4.innerHTML === `O` &&
      b5.innerHTML === `O` &&
      b6.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    if (b7.innerHTML === `X` && b8.innerHTML === `X` && b9.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b7.innerHTML === `O` &&
      b8.innerHTML === `O` &&
      b9.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    // vertical
    if (b1.innerHTML === `X` && b4.innerHTML === `X` && b7.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b1.innerHTML === `O` &&
      b4.innerHTML === `O` &&
      b7.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    if (b2.innerHTML === `X` && b5.innerHTML === `X` && b8.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b2.innerHTML === `O` &&
      b5.innerHTML === `O` &&
      b8.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    if (b3.innerHTML === `X` && b6.innerHTML === `X` && b9.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b3.innerHTML === `O` &&
      b6.innerHTML === `O` &&
      b9.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    // Diagonal

    if (b1.innerHTML === `X` && b5.innerHTML === `X` && b9.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b1.innerHTML === `O` &&
      b5.innerHTML === `O` &&
      b9.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    if (b3.innerHTML === `X` && b5.innerHTML === `X` && b7.innerHTML === `X`) {
      this.messageWinner(` X venceu `);
      this.playerOne++;
    } else if (
      b3.innerHTML === `O` &&
      b5.innerHTML === `O` &&
      b7.innerHTML === `O`
    ) {
      this.messageWinner(` O venceu `);
      this.playerTwo++;
    }

    if (this.counter === 9) {
      setTimeout(() => {
        this.counter = 0;
      }, 500);

      console.log(this.counter);
      return this.drawGame();
    }
  }

  messageWinner(text) {
    const winner = document.querySelector(`.message-winner`);
    const win = document.querySelector(`.win`);

    win.classList.remove(`visible`);
    winner.classList.add(`Message`);
    winner.innerHTML = text;
  }

  resetGame() {
    let btn = document.querySelector(`.btn-reset`);

    btn.addEventListener(`click`, () => {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  }

  drawGame() {
    this.messageWinner(` Deu velha `);
  }
}

const game = new Game();
game.playersInGame();
game.resetGame();
