/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Identifier
 */

import { Words } from "@sudoo/words";
import { englishWords } from "@sudoo/words-english";

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
}
