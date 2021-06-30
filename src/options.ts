/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Options
 */

export type ReadableIdentifierGeneratorOptions = {

    readonly join: string;
    readonly capital: boolean;
    readonly ignoreCase: boolean;

    readonly emptyIdentifierPair: string;
    readonly emptyIdentifierTuple: string;

    readonly unknownIdentifierPair: string;
    readonly unknownIdentifierTuple: string;
};

const defaultReadableIdentifierGeneratorOptions: ReadableIdentifierGeneratorOptions = {

    join: '-',
    capital: false,
    ignoreCase: false,

    emptyIdentifierPair: '[Empty Identifier]',
    emptyIdentifierTuple: '[Empty Identifier]',

    unknownIdentifierPair: '[Unknown Identifier]',
    unknownIdentifierTuple: '[Unknown Identifier]',
};

export const fixReadableIdentifierGeneratorOptions = (options?: Partial<ReadableIdentifierGeneratorOptions>): ReadableIdentifierGeneratorOptions => {

    const fixedOptions: ReadableIdentifierGeneratorOptions = {

        ...defaultReadableIdentifierGeneratorOptions,
        ...options,
    };
    return fixedOptions;
};
