/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Generator
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { SplitedPairIdentifier, splitPairIdentifier } from "../../src";

describe('Given {ReadableIdentifierGenerator} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('readable-identifier-generator');

    it('should be able to generate pair', (): void => {

        const pair: SplitedPairIdentifier = splitPairIdentifier("A");

        expect(pair).to.be.deep.equal({
            left: "A",
            right: "A",
        });
    });
});
