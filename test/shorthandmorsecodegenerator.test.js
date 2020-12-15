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
});

function validateLetterToMorseCode(letter, expectedMorseCode) {
    let shmcg = new ShortHandMorseCodeGenerator();

    expect(shmcg.generateLetter(letter)).to.equal(expectedMorseCode);
    expect(shmcg.generateLetter(letter.toLowerCase())).to.equal(expectedMorseCode);
}

