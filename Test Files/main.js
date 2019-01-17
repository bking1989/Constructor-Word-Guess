var Inquirer = require("inquirer");
var Words = require("./words.js");

var wordBank = ["San Diego", "San Francisco", "Los Angeles", "Sacramento", "Fresno"];

const randomWord = () => {
    var randomNum = Math.floor(Math.random() * 5) + 1;
    var chosenWord = wordBank[randomNum];
    var converted = new Words(chosenWord);
    converted.displayFn();
}

const guessGame = () => {
    randomWord();

    Inquirer.prompt([
        {
            name: "opener",
            type: "input",
            message: "Please guess a letter by entering it with a keyboard.",
        }
    ]).then(function(answer) {
        var userInput = answer;
        converted.runGuess(userInput);
        converted.displayFn();
    });
}

guessGame();