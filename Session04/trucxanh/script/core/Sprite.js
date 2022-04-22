import { Node } from "./Node.js";
export class Sprite extends Node {
    constructor() {
        super();
        this._path = "";
        this._zIndex=0;
    }
    get zIndex(){
        return this._scaleX;
    }
    set zIndex(value){
        this._zIndex = value;
        this.elm.style.zIndex = this._zIndex;
    }

    get path(){
        return this._path;
    }
    set path(value){
        this._path = value;
        this.elm.src = this._path;
    }
    _createElement(){
        let elm = document.createElement("img");
        elm.style.position = "absolute";
        return elm;
    }
}