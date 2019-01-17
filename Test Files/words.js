var Letters = require("./letters.js");

class Words{
    constructor(word) {
        this.letterArr = word.toUpperCase().split("");
        this.displayArr = this.letterArr.map(letter => new Letters(letter));

        this.displayFn = () => {
            console.log(this.displayArr.map(letter => letter.display).join("") + "\n");
        };

        this.runGuess = (guess) => {
            this.displayArr.forEach(function(letter) {
                letter.compareFn(guess);
            });
        };
    };
};


module.exports = Words;