class Letters{
    constructor(letter) {
        if (letter != " ") {
            this.value = letter;
            this.placeholder = "_ ";
            this.display = this.placeholder;
            this.guessed = false;

            this.compareFn = (guess) => {
                if (guess == this.value && !this.guessed) {
                    this.guessed = true;
                    this.display = this.value;
                } else if (guess != this.value) {
                    this.guessed = false;
                    this.display = this.placeholder;
                };
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