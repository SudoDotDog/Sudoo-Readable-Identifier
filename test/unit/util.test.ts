/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Util
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { SplitedPairIdentifier, SplitedTupleIdentifer, splitPairIdentifier, splitTupleIdentifier } from "../../src";

describe('Given [Util] Helper Methods', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('readable-identifier-util');

    it('should be able to split pair - length 1', (): void => {

        const pair: SplitedPairIdentifier = splitPairIdentifier("A");

        expect(pair).to.be.deep.equal({
            left: "A",
            right: "A",
        });
    });

    it('should be able to split pair - length 2', (): void => {

        const pair: SplitedPairIdentifier = splitPairIdentifier("AB");

        expect(pair).to.be.deep.equal({
            left: "A",
            right: "B",
        });
    });

    it('should be able to split pair - length 3', (): void => {

        const pair: SplitedPairIdentifier = splitPairIdentifier("ABC");

        expect(pair).to.be.deep.equal({
            left: "A",
            right: "BC",
        });
    });

    it('should be able to split pair - length 4', (): void => {

        const pair: SplitedPairIdentifier = splitPairIdentifier("ABCD");

        expect(pair).to.be.deep.equal({
            left: "AB",
            right: "CD",
        });
    });

    it('should be able to split tuple - length 1', (): void => {

        const tuple: SplitedTupleIdentifer = splitTupleIdentifier("A");

        expect(tuple).to.be.deep.equal({
            left: "A",
            middle: "A",
            right: "A",
        });
    });

    it('should be able to split tuple - length 2', (): void => {

        const tuple: SplitedTupleIdentifer = splitTupleIdentifier("AB");

        expect(tuple).to.be.deep.equal({
            left: "A",
            middle: "A",
            right: "B",
        });
    });

    it('should be able to split tuple - length 3', (): void => {

        const tuple: SplitedTupleIdentifer = splitTupleIdentifier("ABC");

        expect(tuple).to.be.deep.equal({
            left: "A",
            middle: "B",
            right: "C",
        });
    });

    it('should be able to split tuple - length 4', (): void => {

        const tuple: SplitedTupleIdentifer = splitTupleIdentifier("ABCD");

        expect(tuple).to.be.deep.equal({
            left: "A",
            middle: "B",
            right: "CD",
        });
    });

    it('should be able to split tuple - length 5', (): void => {

        const tuple: SplitedTupleIdentifer = splitTupleIdentifier("ABCDE");

        expect(tuple).to.be.deep.equal({
            left: "A",
            middle: "BC",
            right: "DE",
        });
    });

    it('should be able to split tuple - length 6', (): void => {

        const tuple: SplitedTupleIdentifer = splitTupleIdentifier("ABCDEF");

        expect(tuple).to.be.deep.equal({
            left: "AB",
            middle: "CD",
            right: "EF",
        });
    });
});
