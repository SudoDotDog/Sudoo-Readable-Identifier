/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Generator
 * @override Unit Test
 */

import { englishWords } from "@sudoo/words-english";
import { expect } from "chai";
import * as Chance from "chance";
import { ReadableIdentifierGenerator } from "../../src";

describe('Given {ReadableIdentifierGenerator} Class', (): void => {

    const chance: Chance.Chance = new Chance('readable-identifier-generator');

    it('should be able to generate pair - seed 1', (): void => {

        const generator: ReadableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords);

        const identifier: string = generator.generatePair(chance.string());

        expect(identifier).to.be.equal("cooing-blow");
    });

    it('should be able to generate pair - seed 2', (): void => {

        const generator: ReadableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords);

        const identifier: string = generator.generatePair(chance.string());

        expect(identifier).to.be.equal("kind-cowbell");
    });

    it('should be able to generate tuple - seed 1', (): void => {

        const generator: ReadableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords);

        const identifier: string = generator.generateTuple(chance.string());

        expect(identifier).to.be.equal("helpful-mark-channel");
    });

    it('should be able to generate tuple - seed 2', (): void => {

        const generator: ReadableIdentifierGenerator = ReadableIdentifierGenerator.from(englishWords);

        const identifier: string = generator.generateTuple(chance.string());

        expect(identifier).to.be.equal("fresh-lock-catamaran");
    });
});
