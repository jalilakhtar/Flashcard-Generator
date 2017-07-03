"use strict"
//Require Node NPM
var inquirer = require("inquirer");

//require fs
var fs = require("fs");

//require objets
var BasicFlashCard = require("./basicFlashCard.js");
var ClozeFlashCard = require("./clozeFlashCard.js");

//Empty var to store programmers data
var answers = [];


//third input field accept front and back arguments

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
this.getfront = function(){
    return this.front;
}
this.getback = function(){
    return this.back;
}
};


var ClonzeFlashcard = function (text, cloze){
this.text = text;
this.cloze = cloze;

this.showtext = function(){
    console.log(this.text);
}
this.showcloze = function(){
    console.log(this.cloze);
}
this.getshowtext = function(){
    return this.text;
}
this.getcloze = function(){
    return this.cloze;
}
};

inquirer.prompt([
    {
        type: "list",
        name: "choice",
        message: "What type of question will you make?",
        choices: ["Basic", "Cloze"]
    }
]).then(processSelection);

function processSelection(selection)
{
    if(selection.choice == "Basic"){
        inquirer.prompt ([
    
    {
        name: "question",
        message: "Enter Question",
        type: "input"
    },
    {
        name: "answer",
        message: "Enter Answer",
        type: "input"
    }

]).then(handleBasicResponse);

    }

    else{
inquirer.prompt ([
       {
        name: "answercloze",
        message: "Enter Cloze",
        type: "input"
    },
    {
        name: "answertext",
        message: "Enter Text",
        type: "input"
    }

]).then(handleClozeResponse);

    }
//var to Prompt Programmers
// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington"
// );
// console.log(firstPresident.front);
// console.log(firstPresident.back);

}



//require text file
// var text = require("text.txt");

//Read user data
// fs.readFile('text.txt','utf8', readFileResult);
 

//Handles the user answer to prompts
function handleBasicResponse(answer){
  
    
    //print method is to show object

     console.log(answer);
           fs.appendFile("basic.txt", answer.question + "?" + answer.answer+"\n", appendError);

var newAnswer = new BasicFlashcard (answer.question, answer.answer);
    newAnswer.showback();
    answers.push(newAnswer);

}

      // It will add the value to the bank file.


    
//Handles the user answer to prompts
function handleClozeResponse(answer){
  
    
    console.log(answer);
       fs.appendFile("cloze.txt", answer.answertext + "?..." + answer.answercloze+"\n", appendError);

    var newCloze = new ClonzeFlashcard (answer.answertext, answer.answercloze);
    console.log(JSON.stringify(newCloze));
    newCloze.showtext();
    answers.push(newCloze);
    

      // It will add the value to the bank file.
}


//function to find errors
function appendError(err){
    if(err){
        console.log(err);
    }
    
}
