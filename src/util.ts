/**
 * @author WMXPY
 * @namespace ReadableIdentifier
 * @description Util
 */

import { SplitedPairIdentifier, SplitedTupleIdentifer } from "./declare";

export const splitPairIdentifier = (identifier: string): SplitedPairIdentifier => {

    if (identifier.length < 2) {

        return {
            left: identifier,
            right: identifier,
        };
    }

    const splitPoint: number = Math.floor(identifier.length / 2);
    return {
        left: identifier.substring(0, splitPoint),
        right: identifier.substring(splitPoint, identifier.length),
    };
};

export const splitTupleIdentifier = (identifier: string): SplitedTupleIdentifer => {

    if (identifier.length < 2) {

        return {
            left: identifier,
            middle: identifier,
            right: identifier,
        };
    }

    if (identifier.length < 3) {

        return {
            left: identifier.substring(0, 1),
            middle: identifier.substring(0, 1),
            right: identifier.substring(1, 2),
        };
    }

    const splitPointOne: number = Math.floor(identifier.length / 3);
    const splitPointTwo: number = Math.floor(identifier.length / 3 * 2);
    return {
        left: identifier.substring(0, splitPointOne),
        middle: identifier.substring(splitPointOne, splitPointTwo),
        right: identifier.substring(splitPointTwo, identifier.length),
    };
};
