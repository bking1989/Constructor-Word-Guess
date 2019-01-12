var Letter = require("./letter.js");

class Words {
    constructor (word) {
        this.letterArr = word.split();
        this.censorArr = [];

        this.convertFn = () => {
            this.letterArr.forEach(function(letter) {
                var newLetter = new Letter(letter);
                censorArr.push(newLetter);
            })
        };

        this.userFn = () => {
            var guess = userInput;
            Letter.compareFn(guess);
            Letter.guessFn(guess);
        };
    }
}

module.exports = Words;