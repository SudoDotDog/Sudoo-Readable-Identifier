/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Identifier
 */

import { Words } from "@sudoo/words";
import { SplitedPairIdentifier, SplitedTupleIdentifer } from "./declare";
import { splitPairIdentifier, splitTupleIdentifier } from "./util";

export type ReadableIdentifierGeneratorOptions = {

    readonly join: string;
    readonly capital: boolean;
    readonly ignoreCase: boolean;
};

export class ReadableIdentifierGenerator {

    public static from(words: Words, options?: Partial<ReadableIdentifierGeneratorOptions>): ReadableIdentifierGenerator {

        const fixedOptions: ReadableIdentifierGeneratorOptions = {

            join: '-',
            capital: false,
            ignoreCase: false,
            ...options,
        };

        return new ReadableIdentifierGenerator(words, fixedOptions);
    }

    private readonly _words: Words;
    private readonly _options: ReadableIdentifierGeneratorOptions;

    private constructor(words: Words, options: ReadableIdentifierGeneratorOptions) {

        this._words = words;
        this._options = options;
    }

    public generatePair(identifier: string): string {

        const formattedIdentifier: string = this._formatIdentifier(identifier);
        const pair: SplitedPairIdentifier = splitPairIdentifier(formattedIdentifier);

        const adjective: string = this._getAdjective(pair.left);
        const noun: string = this._getNoun(pair.right);

        return [adjective, noun].join(this._options.join);
    }

    public generateTuple(identifier: string): string {

        const formattedIdentifier: string = this._formatIdentifier(identifier);
        const tuple: SplitedTupleIdentifer = splitTupleIdentifier(formattedIdentifier);

        const adjective: string = this._getAdjective(tuple.left);
        const verb: string = this._getVerb(tuple.middle);
        const noun: string = this._getNoun(tuple.right);

        return [adjective, verb, noun].join(this._options.join);
    }

    private _getAdjective(component: string): string {

        const adjective: string = this._words.getAdjectiveSet().getStringRemainderBasedWord(component);

        if (this._options.capital) {
            return this._capitalize(adjective);
        }
        return adjective;
    }

    private _getVerb(component: string): string {

        const verb: string = this._words.getVerbSet().getStringRemainderBasedWord(component);

        if (this._options.capital) {
            return this._capitalize(verb);
        }
        return verb;
    }

    private _getNoun(component: string): string {

        const noun: string = this._words.getNounSet().getStringRemainderBasedWord(component);

        if (this._options.capital) {
            return this._capitalize(noun);
        }
        return noun;
    }

    private _formatIdentifier(identifier: string): string {

        if (this._options.ignoreCase) {
            return identifier.toLowerCase();
        }
        return identifier;
    }

    private _capitalize(value: string): string {

        return `${value.substring(0, 1).toUpperCase()}${value.substring(1, value.length).toLowerCase()}`;
    }
}
