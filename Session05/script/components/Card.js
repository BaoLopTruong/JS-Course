import { Node } from "../core/Node.js";
import { Sprite } from "../core/Sprite.js";
import { Label } from "../core/Label.js";
export class Card extends Node {
    constructor(index) {
        super();
        this.index = index;
        this.value = null;
        this._createSprite();
        this._createCover();
        this._createLabel();
 
        this._opacity = 1;
    }
    get opacity(){
        return this._opacity;
    }
    set opacity(value){
        this._opacity = value;
        this.elm.style.opacity =  this._opacity;
    }
    _createCover() {
        let cover = new Node();
        cover.width = 100;
        cover.height = 100;
        cover.elm.style.backgroundColor = "orange";
        cover.elm.style.border = "1px solid blue";
        this.cover = cover;
        this.addChild(this.cover);
    }
    _createSprite() {
        this.sprite = new Sprite();
        this.sprite.width = 100;
        this.sprite.height = 100;
        this.addChild(this.sprite);
    }

    _createLabel() {
        let label = new Label();
        label.text = this.index + 1;
        label.width = 40;
        this.label = label;
        this.addChild(this.label);
    }
    setValue(value) {
        this.value = value;
        this.sprite.path = "./images/trucxanh" + value + ".jpg";
    }
    open() {
        this.cover.elm.style.display = "none";
        this.label.elm.style.display = "none";
    }
    hide() {
        this.sprite.elm.style.display = "none";
    }
    close() {
        this.cover.elm.style.display = "block";
        this.label.elm.style.display = "block";
    }
    flipOpenCard() {
        const tl = gsap.timeline();
        tl.to(this.cover, { scaleX: 0, duration: 0.2 })
         .to(this.label, { scaleX: 0, duration: 0.2 })
         .to(this.sprite, { scaleX: 1, duration: 0.2 });
    }
    flipCloseCard() {
        const tl = gsap.timeline({ paused: true });
        tl.to(this.sprite, { scaleX: 0, duration: 0.2 });
        tl.to(this.cover, { scaleX: 1, duration: 0.2 })
        .to(this.label, { scaleX: 1, duration: 0.2 });
  
        tl.play();
    }
    zoomIn() {
        const tl = gsap.timeline({ paused: true });
        tl.to(this.sprite.elm, {  duration: 0.8 })
        .to(this.sprite.elm, {  duration: 0.8, scale:2 });
        tl.call(() => {
            this.hide();
        })
        tl.play();
    }

}

