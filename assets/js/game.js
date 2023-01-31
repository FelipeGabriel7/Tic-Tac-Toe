class Game {
  constructor(player, playerTwo) {
    this.player = player;
    this.playerTwo = playerTwo;
    this.x = "X";
    this.circle = "O";
    this.element;
    this.caseItem = document.querySelectorAll(`.case`);
    this.one = document.querySelector(`.one`);
    this.two = document.querySelector(`.two`);
    this.game = document.querySelector(`.game-init`);
    this.points = 0;
  }

  playersInGame() {
    this.one.addEventListener(`click`, () => {
      alert(` 1 player `);
      this.game.classList.toggle(`visible`);
      this.one.classList.add(`visible`);
      this.two.classList.add(`visible`);
      this.player = 0;
    });

    this.two.addEventListener(`click`, () => {
      alert(`2 players`);
      this.game.classList.toggle(`visible`);
      this.one.classList.add(`visible`);
      this.two.classList.add(`visible`);
      this.player = 0;
      this.playerTwo = 0;
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

  addItem() {
    this.caseItem.forEach((caseIt) => {
      caseIt.addEventListener(`click`, () => {
          this.playerGame();
         

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

    // velha

    let count = 0;

    for (let i = 0; i < this.caseItem.length; i++) {
      if (this.caseItem[i] != undefined) {
        count++;
      }
    }

    if (count === 9) {
      console.log(`Deu velha`);
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
}

const game = new Game();
game.playersInGame();
game.addItem();
game.resetGame();
