import './cats.js';
import './sum.js';

/* function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        return undefined;
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        return undefined;
    }
    return string.slice(startAt, endAt);
} */

// console.log(between('Louis "Pops" Armstrong', '"', '"'));
/* var input = prompt('Tell me something', '');
var parenthesized = between(input, '(', ')');
if (parenthesized != undefined) {
    console.log('You parenthesized "',parenthesized,'".');
} */
/* function lastElement(array) {
    if (array.length > 0) {
        return array[array.length - 1];
    } else {
        throw 'Cannot take the last element of an empty array.';
    }
}

function lastElementPlusTen(array) {
    return lastElement(array) + 10;
}

try {
    console.log(lastElementPlusTen([]));
} catch (error) {
    console.log('Something went wrong: ', error);
} */

/* var currentThing = null;
function processThing(thing) {
    var prevThing = currentThing;
    currentThing = thing;
    try {
        // do something
    }
    finally {
        currentThing = prevThing;
    }
} */
/* try {
    console.log(sfdsf);
}
catch(error) {
    console.log('Caught: ' + error.message);
} */
/* var InvalidInputError = new Error('Invalid numeric input');
function inputNumber() {
    var input = Number(prompt('Give me a number', ''));
    if (isNaN(input)) {
        throw InvalidInputError;
    }
    return input;
}
console.log(inputNumber()); */

/* function printArray(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
printArray([2,3,5,7,12]); */
function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}
/*
forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log); */

/* function sum(numbers) {
    var total = 0;
    forEach(numbers, function (number) {
        total += number;
    });
    return total;
}

console.log(sum([2, 3, 5, 7, 12])); */

/* function negate(func) {
    return function(x) {
        return !func(x);
    }
}
var isNotNaN = negate(isNaN);
console.log(isNotNaN(NaN)); */

/* function negate(func) {
    return function() {
        return !func.apply(null, arguments);
    }
} */
function reduce(combine, base, array) {
    forEach(array, function (element) {
        base = combine(base, element);
    });
    return base;
}

function add(a, b) {
    return a + b;
}

function sum(numbers) {
    return reduce(add, 0, numbers);
}

// console.log(sum([2, 3, 5, 7, 12]));
function countZeroes(array) {
    function counter(total, element) {
        return total + (element === 0 ? 1 : 0);
    }
    return reduce(counter, 0, array);
}

function map(func, array) {
    var result = [];
    forEach(array, function (element) {
        result.push(func(element));
    });
    return result;
}
// console.log(map(Math.round, [0.01, 2, 9.89, Math.PI]));
// HTML HyperText Markup language
