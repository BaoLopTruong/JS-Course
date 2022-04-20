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
        this.count =0;
        this.canClick = true;
        this.fistCard = null;
        this.secondCard = null;
        this.scores = 100;
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
        for (let index = 0; index < 20; index++) {
            let card = new Card(index);
            cards.push(card);
            let col = index % 5;
            let row = Math.floor(index / 5);
            card.setValue(index % 10);
            card.elm.style.top = row * 120 + 'px';
            card.elm.style.left = col * 120 + 'px';
            this.addChild(card);
            card.elm.addEventListener("click", this.onClickCard.bind(this, card));
        }
        console.log(this.cards);
        this.play.elm.style.display = "none";
        this._createResetGame();
        //push shufferCard
        // this.cards = [];
        // for(let index=0; index<20; index++){
        //     this.card = new Card();
        //     this.cards.push(this.card);
        //     this.cards[index].setValue(index % 10);
        // }
        // this.shuffleCards(this.cards);
        // for (let index = 0; index < 20; index++) {
        // let col = index % 5;
        // let row = Math.floor(index / 5);
        // this.cards[index].label.text =index+1;
  
        // this.cards[index].elm.style.top = row * 120 + 'px';
        // this.cards[index].elm.style.left = col * 120 + 'px';
        // this.addChild(this.cards[index]);
        // this.cards[index].elm.addEventListener("click", this.onClickCard.bind(this, this.cards[index]));
        // }
        // console.log(this.cards);
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
        this.score.text = "Score: " + this.scores;
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
    _createPlayAgain(){
        this.playAgain = new Label();
        this.playAgain.text = "Play Again";
        this.playAgain.color = "red";
        this.playAgain.fontSize = 20;
        this.playAgain.x = 5;
        this.playAgain.y = 40;
        this.playAgain.y = 50;
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

    onClickCard(card) {
        if (!this.canClick) return;

        if (card === this.fistCard) return;

        if (this.fistCard === null) {
            this.fistCard = card;
            // open card
            this.fistCard.open();
            console.log('first01', this.fistCard.value, this.fistCard.index);

        } else {
            this.canClick = false;
            this.secondCard = card;
            // open card
            this.secondCard.open();
            console.log('first02', this.secondCard.value, this.secondCard.index);
            setTimeout(() => { this.compareCard() }, 1000);
        }

    }

    compareCard() {
        if (this.fistCard.value === this.secondCard.value) {
            // hide
            this.fistCard.hide();
            this.secondCard.hide();
            this.scores += 10;
            this.count++;
        } else {
            //close
            this.fistCard.close();
            this.secondCard.close();
            this.scores -= 10;
        }
        this.canClick = true;
        this.fistCard = null;
        this.score.text = "Score: " + this.scores;
        this.checkWin(this.scores);
    }

    checkWin(point) {
        if (point == 0) {
            alert("You close");
            this.play.elm.style.display = "none";
           this._createPlayAgain();
        }
        if (point < 0) return;
        if(this.count == 10){
            alert("you win with:" + this.scores + " poiint");
            this._createPlayAgain();
        }

    }
    resetGame(){
        document.getElementsByTagName('div')[0].innerHTML = "";
        this.scores = 100;
        this._createScore();
        this._createCards();
        this.count=0;
    }


}

// create background
let game = new Game();
document.body.appendChild(game.elm);




