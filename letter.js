class Letter {
    constructor (letter) {
        this.value = letter;
        this.display = "_ ";
        this.guessed = false;

        this.compareFn = (guess) => {
            if (guess == this.value) {
                this.display = this.value;
                console.log(this.display);
            } else if (guess != this.value) {
                this.display = "_ ";
                console.log(this.display);
            }
        };

        this.guessFn = (guess) => {
            if (guess == this.value && !this.guessed) {
                this.guessed = true;
            }
        };
    }
}

module.exports = Letter;