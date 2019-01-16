class Letters{
    constructor(letter) {
        if (letter != " ") {
            this.value = letter;
            this.placeholder = "_ ";
            this.display = this.placeholder;
            this.guessed = false;

            this.guessFn = () => {
                if (!this.guessed) {
                    this.display = this.placeholder;
                } else if (this.guessed) {
                    this.display = this.value;
                }
            };

            this.compareFn = (guess) => {
                if (guess == this.value) {
                    this.guessed = true;
                } else if (guess != this.value) {
                    this.guessed = false;
                }
            };
        } else if (letter == " ") {
            this.value = letter;
            this.placeholder = " ";
            this.display = " ";
            this.guessed = true;
        }
    };
};

module.exports = Letters;