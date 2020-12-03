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
        let shmcg = new ShortHandMorseCodeGenerator();
        let expectedMorseCode = ".-";

        expect(shmcg.generateLetter('A')).to.equal(expectedMorseCode);
        expect(shmcg.generateLetter('a')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'B' as '-...' [dash dot dot dot]", () => {
        let shmcg = new ShortHandMorseCodeGenerator();
        let expectedMorseCode = "-...";

        expect(shmcg.generateLetter('B')).to.equal(expectedMorseCode);
        expect(shmcg.generateLetter('b')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'C' as '-.-.' [dash dot dash dot]", () => {
        let shmcg = new ShortHandMorseCodeGenerator();
        let expectedMorseCode = "-.-.";

        expect(shmcg.generateLetter('C')).to.equal(expectedMorseCode);
        expect(shmcg.generateLetter('c')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'D' as '-..' [dash dot dot]", () => {
        let shmcg = new ShortHandMorseCodeGenerator();
        let expectedMorseCode = "-..";

        expect(shmcg.generateLetter('D')).to.equal(expectedMorseCode);
        expect(shmcg.generateLetter('d')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'E' as '-..' [dot]", () => {
        let shmcg = new ShortHandMorseCodeGenerator();
        let expectedMorseCode = ".";

        expect(shmcg.generateLetter('E')).to.equal(expectedMorseCode);
        expect(shmcg.generateLetter('e')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'F' as '..-.' [dot dot dash dot]", () => {
        let shmcg = new ShortHandMorseCodeGenerator();
        let expectedMorseCode = "..-.";

        expect(shmcg.generateLetter('F')).to.equal(expectedMorseCode);
        expect(shmcg.generateLetter('f')).to.equal(expectedMorseCode);
    });

    it("shall generate letter 'G' as '--.' [dash dash dot]", () => {
        let shmcg = new ShortHandMorseCodeGenerator();
        let expectedMorseCode = "--.";

        expect(shmcg.generateLetter('G')).to.equal(expectedMorseCode);
        expect(shmcg.generateLetter('g')).to.equal(expectedMorseCode);
    });
});
