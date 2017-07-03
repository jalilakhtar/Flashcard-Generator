"use strict"
//third input field accept text and cloze arguments

var BasicFlashcard = function (front, back){
this.front = front;
this.back = back;

//showing the back answer
this.showback = function (){
    console.log(this.back);
}
this.showfront = function(){
    console.log(this.front);
}
};

module.exports = BasicFlashcard;

