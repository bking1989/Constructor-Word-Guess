class Letters {
    constructor(originalChar) {
        this.originalChar = originalChar;
        this.placeholder = "_ ";
        this.display = this.placeholder;
        this.guessed = false;

        this.returnVal = () => {
            console.log(`\n${this.display}`);
        };

        this.compare = (userInput) => {
            if (userInput == this.originalChar) {
                this.display = this.originalChar;
            }
        };
    }
}

module.exports = Letters;