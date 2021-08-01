# Sudoo-Readable-Identifier

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Readable-Identifier/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Readable-Identifier/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Readable-Identifier/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Readable-Identifier)
[![npm version](https://badge.fury.io/js/%40sudoo%2Freadable-identifier.svg)](https://www.npmjs.com/package/@sudoo/readable-identifier)
[![downloads](https://img.shields.io/npm/dm/@sudoo/readable-identifier.svg)](https://www.npmjs.com/package/@sudoo/readable-identifier)

Identifier for human and machine

## Install

```sh
yarn add @sudoo/readable-identifier
# Or
npm install @sudoo/readable-identifier --save
```

## Usage

You will need to install or create a word set before use this package.

For example:

```sh
yarn add @sudoo/words-english
# Or
npm install @sudoo/words-english --save
```

Generate readable pair/tuple for your uuid or other identifier

```ts
import { ReadableIdentifierGenerator } from "@sudoo/readable-identifier";
import { englishWords } from "@sudoo/words-english";

const identifier: string = "Your Awesome Identifier";

// Default
const generator = ReadableIdentifierGenerator.from(englishWords);
generator.generatePair(identifier); // worthless-lamb
generator.generateTuple(identifier); // oceanic-consist-france

// Override Connector
const generator = ReadableIdentifierGenerator.from(englishWords, {
    join: ' ',
});
generator.generatePair(identifier); // worthless lamb
generator.generateTuple(identifier); // oceanic consist france

// Use Capital
const generator = ReadableIdentifierGenerator.from(englishWords, {
    capital: true,
});
generator.generatePair(identifier); // Worthless-Lamb
generator.generateTuple(identifier); // Oceanic-Consist-France
```
