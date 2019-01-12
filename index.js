var Inquirer = require("inquirer");
var Words = require("./word.js");

var wordBank = ["No Country for Old Men", "The Dark Knight", "American Psycho", "Zoolander", "Gladiator"];
var guessBank = [];

var randomMovie = () => {
    var newIndex = Math.floor(Math.random() * 5) + 1;
    var chosenMovie = wordBank[newIndex];
    var convertedMovie = new Words(chosenMovie);
}