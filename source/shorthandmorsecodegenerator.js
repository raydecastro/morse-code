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
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--..",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----.",
            "0": "-----"
        };

        return letterToMorseCodeToHashTable[letter.toLowerCase()];
    }
}

export default ShortHandMorseCodeGenerator;
