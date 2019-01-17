var Inquirer = require("inquirer");
var Words = require("./words.js");

var wordBank = ["San Diego", "San Francisco", "Los Angeles", "Sacramento", "Fresno"];
var randomNum = Math.floor(Math.random() * 5) + 1;
var chosenWord = wordBank[randomNum];
var convertedWord = new Words(chosenWord);

const guessGame = () => {
    console.log("\n");
    convertedWord.displayFn();

    Inquirer.prompt([
        {
            name: 'guess',
            type: 'input',
            message: "Please enter a letter to make a guess."
        }
    ]).then(function(answer) {
        convertedWord.runGuess(answer.guess);
        guessGame();
    })
}

guessGame();