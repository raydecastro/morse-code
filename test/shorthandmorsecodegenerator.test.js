import {expect} from "chai";
import ShortHandMorseCodeGenerator from "../source/shorthandmorsecodegenerator.js";

describe("ShortHandMorseCodeGenerator", () => {
    it("shall exist", () => {
        let shmcg = new ShortHandMorseCodeGenerator();

        expect(shmcg).to.not.be.undefined;
    });

    it("shall generate a dot as one unit", () => {
        let shmcg = new ShortHandMorseCodeGenerator();

        expect(shmcg.generateDot()).to.equal(".");
        expect(shmcg.generateDot().length).to.equal(1);
    });

    it("shall generate dash as one unit", () => {
        let shmcg = new ShortHandMorseCodeGenerator();

        expect(shmcg.generateDash()).to.equal("-");
        expect(shmcg.generateDash().length).to.equal(1);
    });

    it("shall generate a space between the same letter as zero unit", () => {
        let shmcg = new ShortHandMorseCodeGenerator();

        expect(shmcg.generateSpaceBetweenSameLetter()).to.equal("");
        expect(shmcg.generateSpaceBetweenSameLetter().length).to.equal(0);
    });

    it("shall generate space between different letters as one unit", () => {
        let shmcg = new ShortHandMorseCodeGenerator();

        expect(shmcg.generateSpaceBetweenDifferentLetters()).to.equal(" ");
        expect(shmcg.generateSpaceBetweenDifferentLetters().length).to.equal(1);
    });

    it("shall generate space between words as two units", () => {
        let shmcg = new ShortHandMorseCodeGenerator();

        expect(shmcg.generateSpaceBetweenWords()).to.equal("  ");
        expect(shmcg.generateSpaceBetweenWords().length).to.equal(2);
    });

    it("shall generate letter 'A' as '.-' [dot dash]", () => {
        validateLetterToMorseCode("A", ".-");
    });

    it("shall generate letter 'B' as '-...' [dash dot dot dot]", () => {
        validateLetterToMorseCode("B", "-...");
    });

    it("shall generate letter 'C' as '-.-.' [dash dot dash dot]", () => {
        validateLetterToMorseCode("C", "-.-.");
    });

    it("shall generate letter 'D' as '-..' [dash dot dot]", () => {
        validateLetterToMorseCode("D", "-..");
    });

    it("shall generate letter 'E' as '.' [dot]", () => {
        validateLetterToMorseCode("E", ".");
    });

    it("shall generate letter 'F' as '..-.' [dot dot dash dot]", () => {
        validateLetterToMorseCode("F", "..-.");
    });

    it("shall generate letter 'G' as '--.' [dash dash dot]", () => {
        validateLetterToMorseCode("G", "--.");
    });

    it("shall generate letter 'H' as '....' [dot dot dot dot]", () => {
        validateLetterToMorseCode("H", "....");
    });

    it("shall generate letter 'I' as '..' [dot dot]", () => {
        validateLetterToMorseCode("I", "..");
    });

    it("shall generate letter 'J' as '.---' [dot dash dash dash]", () => {
        validateLetterToMorseCode("J", ".---");
    });

    it("shall generate letter 'K' as '-.-' [dash dot dash]", () => {
        validateLetterToMorseCode("K", "-.-");
    });

    it("shall generate letter 'L' as '.-..' [dot dash dot dot]", () => {
        validateLetterToMorseCode("L", ".-..");
    });

    it("shall generate letter 'M' as '--' [dash dash]", () => {
        validateLetterToMorseCode("M", "--");
    });

    it("shall generate letter 'N' as '-.' [dash dot]", () => {
        validateLetterToMorseCode("N", "-.");
    });

    it("shall generate letter 'O' as '---' [dash dash dash]", () => {
        validateLetterToMorseCode("O", "---");
    });

    it("shall generate letter 'P' as '.--.' [dot dash dash dot]", () => {
        validateLetterToMorseCode("P", ".--.");
    });

    it("shall generate letter 'Q' as '--.-' [dash dash dot dash]", () => {
        validateLetterToMorseCode("Q", "--.-");
    });

    it("shall generate letter 'R' as '.-.' [dot dash dot]", () => {
        validateLetterToMorseCode("R", ".-.");
    });

    it("shall generate letter 'S' as '...' [dot dot dot]", () => {
        validateLetterToMorseCode("S", "...");
    });

    it("shall generate letter 'T' as '-' [dash]", () => {
        validateLetterToMorseCode("T", "-");
    });

    it("shall generate letter 'U' as '..-' [dot dot dash]", () => {
        validateLetterToMorseCode("U", "..-");
    });

    it("shall generate letter 'V' as '...-' [dot dot dot dash]", () => {
        validateLetterToMorseCode("V", "...-");
    });

    it("shall generate letter 'W' as '.--' [dot dash dash]", () => {
        validateLetterToMorseCode("W", ".--");
    });

    it("shall generate letter 'X' as '-..-' [dash dot dot dash]", () => {
        validateLetterToMorseCode("X", "-..-");
    });

    it("shall generate letter 'Y' as '-.--' [dash dot dash dash]", () => {
        validateLetterToMorseCode("Y", "-.--");
    });

    it("shall generate letter 'Z' as '--..' [dash dash dot dot]", () => {
        validateLetterToMorseCode("Z", "--..");
    });

    it("shall generate letter '1' as '.----' [dot dash dash dash dash]", () => {
        validateLetterToMorseCode("1", ".----");
    });

    it("shall generate letter '2' as '..---' [dot dot dash dash dash]", () => {
        validateLetterToMorseCode("2", "..---");
    });

    it("shall generate letter '3' as '...--' [dot dot dot dash dash]", () => {
        validateLetterToMorseCode("3", "...--");
    });

    it("shall generate letter '4' as '....-' [dot dot dot dot dash]", () => {
        validateLetterToMorseCode("4", "....-");
    });

    it("shall generate letter '5' as '.....' [dot dot dot dot dot]", () => {
        validateLetterToMorseCode("5", ".....");
    });

    it("shall generate letter '6' as '-....' [dash dot dot dot dot]", () => {
        validateLetterToMorseCode("6", "-....");
    });

    it("shall generate letter '7' as '--...' [dash dash dot dot dot]", () => {
        validateLetterToMorseCode("7", "--...");
    });

    it("shall generate letter '8' as '---..' [dash dash dash dot dot]", () => {
        validateLetterToMorseCode("8", "---..");
    });

    it("shall generate letter '9' as '----.' [dash dash dash dash dot]", () => {
        validateLetterToMorseCode("9", "----.");
    });

    it("shall generate letter '0' as '-----' [dash dash dash dash dash]", () => {
        validateLetterToMorseCode("0", "-----");
    });
});

function validateLetterToMorseCode(letter, expectedMorseCode) {
    let shmcg = new ShortHandMorseCodeGenerator();

    expect(shmcg.generateLetter(letter)).to.equal(expectedMorseCode);
    expect(shmcg.generateLetter(letter.toLowerCase())).to.equal(expectedMorseCode);
}

