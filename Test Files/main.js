var Inquirer = require("inquirer");
var Words = require("./words.js");

var wordBank = ["San Diego", "San Francisco", "Los Angeles", "Sacramento", "Fresno"];

const randomWord = () => {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    let chosenWord = wordBank[randomNum];
}

const guessGame = () => {
    Inquirer.prompt([
        {
            name: "opener",
            type: "input",
            message: "Please guess a letter by entering it below.",
        }
    ])
}