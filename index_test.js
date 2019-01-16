var Inquirer = require("inquirer");
var Words = require("./words_test.js");

var wordBank = ["New York City", "Los Angeles", "Detroit", "Seattle", "Chicago"];

const randomWord = () => {
    var randomNum = Math.floor(Math.random * 5) + 1;
    var chosenWord = wordBank(randomNum);
}