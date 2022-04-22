import { Node } from "./Node.js";

export class Label extends Node {
    constructor() {
        super();
        this._text = "";
        this._fontSize = 0;
        this._fontFamily = 0;
        this._color = "black";
    }

    get text() {
        return this._text;
    }
    set text(value){
        this._text = value;
        this.elm.innerText = this._text;
    }
    get fontSize() {
        return this._fontSize;
    }
    set fontSize(value){
        this._fontSize = value;
        this.elm.style.fontSize = this._fontSize + "px";
    }
    get fontFamily() {
        return this._fontFamily;
    }
    set fontFamily(value){
        this._fontFamily = value;
        this.elm.style.fontFamily = this._fontFamily;
    }
    get color() {
        return this._color;
    }
    set color(value){
        this._color = value;
        this.elm.style.color = this._color;
    }
    _createElement(){
        let elm = document.createElement("span");
        elm.style.position = "absolute";
        elm.style.top = "40px";
        elm.style.left = "45px";
        return elm;
    }
}