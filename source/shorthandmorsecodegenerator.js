// TODO: refactor this to remove duplication and possibly use inheritance
//
// import MorseCodeGenerator from "../source/morsecodegenerator.js";
//
// class ShortHandMorseCodeGenerator extends MorseCodeGenerator {

class ShortHandMorseCodeGenerator {
    constructor() {
        this.dot = ".";
        this.dash = "-";
        this.spaceBetweenSameLetter = "";
        this.spaceBetweenDifferentLetters = " ";
        this.spaceBetweenWords = "  ";
    }

    generateDot() {
        return this.dot;
    }

    generateDash() {
        return this.dash;
    }

    generateSpaceBetweenSameLetter() {
        return this.spaceBetweenSameLetter;
    }

    generateSpaceBetweenDifferentLetters() {
        return this.spaceBetweenDifferentLetters;
    }

    generateSpaceBetweenWords() {
        return this.spaceBetweenWords;
    }

    generateLetter(letter) {
        let letterToMorseCodeToHashTable = {
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..", 
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....", 
            "i": ".."
        };

        return letterToMorseCodeToHashTable[letter.toLowerCase()];
    }
}

export default ShortHandMorseCodeGenerator;
