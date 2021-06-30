/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Identifier
 */

import { Words } from "@sudoo/words";
import { englishWords } from "@sudoo/words-english";
import { SplitedPairIdentifier, SplitedTupleIdentifer } from "./declare";
import { splitPairIdentifier, splitTupleIdentifier } from "./util";

export class ReadableIdentifierGenerator {

    public static from(words: Words): ReadableIdentifierGenerator {

        return new ReadableIdentifierGenerator(words);
    }

    public static default(): ReadableIdentifierGenerator {

        return new ReadableIdentifierGenerator(englishWords);
    }

    private readonly _words: Words;

    private constructor(words: Words) {

        this._words = words;
    }

    public generatePair(identifier: string, join: string = "-"): string {

        const pair: SplitedPairIdentifier = splitPairIdentifier(identifier);

        const adjective: string = this._words.getAdjectiveSet().getStringRemainderBasedWord(pair.left);
        const noun: string = this._words.getNounSet().getStringRemainderBasedWord(pair.right);

        return `${adjective}${join}${noun}`;
    }

    public generateTuple(identifier: string, join: string = "-"): string {

        const tuple: SplitedTupleIdentifer = splitTupleIdentifier(identifier);

        const adjective: string = this._words.getAdjectiveSet().getStringRemainderBasedWord(tuple.left);
        const verb: string = this._words.getVerbSet().getStringRemainderBasedWord(tuple.middle);
        const noun: string = this._words.getNounSet().getStringRemainderBasedWord(tuple.right);

        return `${adjective}${join}${verb}${join}${noun}`;
    }
}
