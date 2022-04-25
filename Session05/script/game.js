import { Card } from "./components/Card.js";
import { Label } from "./core/Label.js";
import { Node } from "./core/Node.js";



class Game extends Node {
    constructor() {
        super();
        this._init();

    }

    _init() {
        this._createBackGround();
        this.soundMusic = new Audio("./audio/music.mp3");
        this.soundBreak = new Audio("./audio/break.mp3");
        this.soundShot = new Audio("./audio/shot.mp3");
        this.soundDeath = new Audio("./audio/death.mp3");

        this.count = 0;
        //this._isClicked = false;
        this.canClick = false;
        this.fistCard = null;
        this.secondCard = null;
        this.toTalPoint = { value: 100 };
        this.point = 100;
        this._createScore();
        this._createPlayGame();
        setTimeout(() => {
            this.canClick = true
        }, 5000);
    }
    _createBackGround() {
        this.elm.style.backgroundImage = "url(./images/trucxanh_bg.jpg)";
        this.elm.style.top = "20%";
        this.elm.style.left = "25%";
        this.width = 800;
        this.height = 600;
    }

    _createCards() {
        //no shufferCard
        this.cards = [];
        this.tl = gsap.timeline();
        for (let index = 19; index >= 0; index--) {
            let card = new Card(index);
            this.cards.push(card);
            card.setValue(index % 10);
            card.x = 350;
            card.y = 230;
            this.addChild(card);
            card.elm.addEventListener("click", this.onClickCard.bind(this, card));
            this.tl.from(card, { x: 350, y: 230, opacity: 0, duration: 0.05 })
                .from(card.cover.elm, { display: "none", duration: 0.05 });

        }

        this.cards.reverse();
        setTimeout(() => {
            this._playMoveCard(this.cards);
        }, 2500);
        console.log(this.cards);
        this.play.elm.style.display = "none";
        this.soundMusic.play();
    }


    shuffleCards(array) {
        let counter = array.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }

    _createScore() {
        this.score = new Label();
        this.score.text = "Score: " + this.point;
        this.score.color = "white";
        this.score.fontSize = 30;
        this.score.x = 5;
        this.score.y = 10;
        this.addChild(this.score);
    }

    _createPlayGame() {
        this.play = new Label();
        this.play.text = "Play Game";
        this.play.color = "red";
        this.play.fontSize = 20;
        this.play.x = 5;
        this.play.y = 40;
        this.play.y = 50;
        this.play.elm.addEventListener("click", this._createCards.bind(this));
        this.addChild(this.play);

    }

    _createPlayAgain() {
        this.playAgain = new Label();
        this.playAgain.text = "Play Again";
        this.playAgain.color = "red";
        this.playAgain.fontSize = 50;
        this.playAgain.x = 280;
        this.playAgain.y = 200;
        this.playAgain.elm.addEventListener("click", this.resetGame.bind(this));
        this.addChild(this.playAgain);
        this.soundMusic.play();
    }

    _createCongratulation() {
        this.conGrag = new Node();
        this.conGrag.width = 320;
        this.conGrag.height = 300;
        this.conGrag.x = 230;
        this.conGrag.y = 150;
        this.conGrag.elm.style.backgroundImage = 'url(./images/congratulation.gif)';
        this.addChild(this.conGrag);
        let tl = gsap.timeline({ paused: true });

        tl.to(this.conGrag.elm, { scale: 3, duration: 2 })
            .to(this.conGrag.elm, { opacity: 0, duration: 2 })
        tl.play();
    }

    _createGameOver() {
        this.gameOver = new Node();
        this.gameOver.width = 400;
        this.gameOver.height = 300;
        this.gameOver.x = 200;
        this.gameOver.y = 150;
        this.gameOver.elm.style.backgroundImage = 'url(./images/gameover.gif)';
        this.addChild(this.gameOver);
        let tl = gsap.timeline({ paused: true });

        tl.to(this.gameOver.elm, { scale: 2, duration: 2 })
            .to(this.gameOver.elm, { opacity: 0, duration: 2 })
        tl.play();
    }

    _playMoveCard(arrCards) {
        for (let index = 0; index < 20; index++) {
            let col = index % 5;
            let row = Math.floor(index / 5);
            var x = col * 100 + 150;
            var y = row * 100 + 130;
            TweenMax.to(arrCards[index], 0.6, { ease: Back.easeOut.config(8), x: x, y: y, delay: (index + 1) * 0.1 })
        }
    }

    onClickCard(card) {
        if (!this.canClick) return;

        if (this.fistCard === card) return;
        if (this.fistCard != null && this.secondCard != null) { this.canClick = false }
        if (this.fistCard === null) {
            this.fistCard = card;
            // open card
            this.fistCard.sprite.scaleX = 0;
            this.soundShot.play();
            this.fistCard.flipOpenCard();
            console.log('first01', this.fistCard.value, this.fistCard.index);

        } else {
            this.canClick = false;
            this.secondCard = card;
            // open card
            this.secondCard.sprite.scaleX = 0;
            this.soundShot.pause();
            this.soundShot.play();
            this.secondCard.flipOpenCard();
            console.log('first02', this.secondCard.value, this.secondCard.index);
            setTimeout(() => { this.compareCard() }, 1000);
        }

    }

    countPoint(x) {
        let tl = gsap.timeline({ paused: true })
        tl.to(this.toTalPoint, {
            value: x, duration: 1, onUpdate: () => {
                this.score.text = "Score: " + Math.floor(this.toTalPoint.value);
            }
        });
        tl.play();
    }

    compareCard() {
        if (this.fistCard.value === this.secondCard.value) {
            // hide
            this.canClick = false;
            this.fistCard.sprite.zIndex = 2;
            this.secondCard.sprite.zIndex = 2;
            this.point += 10;
            this.count++;
            this.fistCard.zoomIn();
            this.secondCard.zoomIn();
            setTimeout(() => {
                this.soundBreak.play();
            }, 1000)

        } else {
            //close
            this.canClick = true;
            this.soundDeath.play();
            this.fistCard.flipCloseCard();
            this.secondCard.flipCloseCard();
            this.point -= 10;
        }
        this.canClick = true;
        this.fistCard = null;
        this.checkWin(this.point);
        setTimeout(() => {
            this.countPoint(this.point);
        }, 1000)
    }

    checkWin(point) {
        if (point == 0) {
            setTimeout(() => {
                this._createGameOver();
            }, 1000)
            setTimeout(() => {
                this.removeCard();
            }, 2500)
            setTimeout(() => {
                this._createPlayAgain();
            }, 3000)
        }
        if (point < 0) return;
        if (this.count == 10) {
            setTimeout(() => {
                this._createCongratulation();
            }, 2000)
            setTimeout(() => {
                this.removeCard();
                this._createPlayAgain();
            }, 4000)
        }
    }

    removeCard() {
        for (let index = 0; index < 20; index++) {
            this.removeChild(this.cards[index]);
        }
        this.removeChild(this.score)
        console.log(this.children);
        this.children = [];
        console.log(this.children);
    }
    resetGame() {
        this.point = 100;
        this._createScore();
        this._createCards();
        this.count = 0;
        this.fistCard = null;
        this.removeChild(this.playAgain)
    }

}

// create background
let game = new Game();
document.body.appendChild(game.elm);

