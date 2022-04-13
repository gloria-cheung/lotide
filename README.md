# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gloriacheung/lotide`

**Require it:**

`const _ = require('@gloriacheung/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head(...)`: returns first element of array
* `function tail(...)`: returns everything except first element of array
* `function middle(...)`: returns middle of array 
* `function countLetters(...)`: returns object of letters with number of times appears in string
* `function countOnly(...)`: returns object and count only what you pass in
* `function findKeyByValue(...)`: returns key of object based on value passed in
* `function flatten(...)`: returns single array with no nested inside
* `function letterPositions(...)`: returns object showing index that each letter appears at
* `function without(...)`: returns array without elements from second array