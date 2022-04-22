import { Card } from "./components/Card.js";
import { Label } from "./core/Label.js";
import { Node } from "./core/Node.js";
import { Sprite } from "./core/Sprite.js";


class Game extends Node {
    constructor() {
        super();
        this._init();

    }

    _init() {
        this.count = 0;
        this.canClick = true;
        this.fistCard = null;
        this.secondCard = null;
        this.toTalPoint = { value: 100 };
        this.point = 100;
        this.elm.style.backgroundImage = "url(../trucxanh/images/trucxanh_bg.jpg)";
        this.elm.style.top = "20%";
        this.elm.style.left = "25%";
        this.width = 800;
        this.height = 600;
        this._createScore();
        this._createPlayGame();
    }

    _createCards() {
        //no shufferCard
        let cards = [];
        let tl = gsap.timeline();
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);
            cards.push(card);
            card.setValue(index % 10);
            card.x = 310;
            card.y = 250;
            card.opacity=1;
            card.sprite.zIndex=0;
            this.addChild(card);
            card.elm.addEventListener("click", this.onClickCard.bind(this, card));
            tl.from(card, { x: 310, y: 250, opacity: 0, duration: 0.1 })
          
        }
        this._secondCard(cards);
        console.log(cards);
        this.play.elm.style.display = "none";
        this._createResetGame();

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
        this.reset.elm.style.display = "none";
    }

    _createResetGame() {
        this.reset = new Label();
        this.reset.text = "Reset Game";
        this.reset.color = "red";
        this.reset.fontSize = 20;
        this.reset.x = 5;
        this.reset.y = 40;
        this.reset.y = 50;
        this.reset.elm.addEventListener("click", this.resetGame.bind(this));
        this.addChild(this.reset);
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

    _firstLoad(cards) {
        let tl = gsap.timeline();
        for (let index = cards.length-1; index > 0 ; index--) {
            tl.from(cards[index].cover, { x: 200, y: 200, opacity: 0, duration: 1 })
            .from(cards[index].label, { x: 200, y: 200, opacity: 0, duration: 1 })
                .from(cards[index].sprite, { x: 200, y: 200, zIndex: 12, duration: 1 })
                console.log(cards[index])
            console.log(cards[index].sprite);
        }
        tl.play();
    }

    _secondCard(arrCards) {
        const tl= gsap.timeline();
        for (let index=0; index < arrCards.length; index++) {
            let col = index % 5;
            let row = Math.floor(index / 5);
            var x = col * 120 + 100;
            var y = row * 120 + 100;
            tl.to(arrCards[index], { ease: Back.easeOut.config(6), x: x, y: y, duration: 0.3 });
        }
    }

    onClickCard(card) {
        if (!this.canClick) return;

        if (this.fistCard === card) return;

        if (this.fistCard === null) {
            this.fistCard = card;
            // open card
            this.fistCard.flipCard();
            console.log('first01', this.fistCard.value, this.fistCard.index);

        } else {
            this.canClick = false;
            this.secondCard = card;
            // open card
            this.secondCard.flipCard();
            console.log('first02', this.secondCard.value, this.secondCard.index);
            setTimeout(() => { this.compareCard() }, 1000);
        }

    }

    countPoint(x) {
        let tl = gsap.timeline({ paused: true })
        tl.to(this.toTalPoint, {
            value: x, duration: 1, onUpdate: () => {
                this.score.text = "Score: " + Math.floor(this.toTalPoint.value);
                console.log(this.toTalPoint.value);
            }
        });
        tl.play();
    }

    compareCard() {
        if (this.fistCard.value === this.secondCard.value) {
            // hide
            this.fistCard.sprite.zIndex = 2;
            this.secondCard.sprite.zIndex = 2;
            this.fistCard.zoomIn();
            this.secondCard.zoomIn();
            this.point += 10;
            this.count++;
        } else {
            //close
            this.fistCard.flopCard();
            this.secondCard.flopCard();
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
            setTimeout(()=>{
                document.getElementsByTagName('div')[0].innerHTML = "";
                this._createGameOver();
            },1000)
            
            setTimeout(() => {
                
                this._createPlayAgain();
            }, 3000)
        }
        if (point < 0) return;
        if (this.count == 10) {
            setTimeout(()=>{
                this._createCongratulation();
            },1000)
            
            setTimeout(() => {
                this._createPlayAgain();
            }, 3000)
        }
    }
    
    resetGame() {
        document.getElementsByTagName('div')[0].innerHTML = "";
        this.point = 100;
        this._createScore();
        this._createCards();
        this.count = 0;
        this.fistCard = null;
    }

}

// create background
let game = new Game();
document.body.appendChild(game.elm);




