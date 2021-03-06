/* var rabbit = {};
rabbit.speak = function(line) {
    console.log('The rabbit says "', line, '"');
};
rabbit.speak("I'm alive."); */

/* function speak(line) {
    console.log('The ', this.adjective, ' rabbit says "', line, '"');
};
var whileRabbit = {adjective: 'white', speak: speak};
var fatRabbit = {adjective: 'fat', speak: speak};
whileRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak('I could sure use a carrot right now.');

speak.apply(fatRabbit, ['Yum.']);
speak.call(fatRabbit, 'Burp.');

function run(from, to) {
    console.log('The ', this.adjective, ' rabbit runs from ', from, ' to ', to, '.');
}
run.apply(whileRabbit, ['A', 'B']);
run.call(fatRabbit, 'the cupboard', 'the fridge'); */

//构造函数创建对象
/* function Rabbit(adjective) {
    this.adjective = adjective;
    this.speak = function(line) {
        console.log('The ', this.adjective, ' rabbit says "', line, '"');
    };
}
var killerRabbit = new Rabbit('killer');
killerRabbit.speak('GRAAAAAAAH!');
Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
killerRabbit.teeth = 'long.sharp, and bloody';
console.log(killerRabbit.teeth);
console.log(Rabbit.prototype.teeth); */
/* function makeRabbit(adjective) {
    return {
        adjective: adjective,
        speak: function(line) {
            console.log('The ', this.adjective, ' rabbit says "', line, '"');
        }
    };
}
var blackRabbit = makeRabbit('black');
blackRabbit.speak(); */

/* function Rabbit(adjective) {
    this.adjective = adjective;
}
Rabbit.prototype.speak = function(line) {
    console.log('The ', this.adjective, ' rabbit says "', line, '".');
} */
/*Object.prototype.properties = function() {
    var result = [];
    for (var property in this) {
        result.push(property);
    }
    return result;
}
var test = {x: 10, y: 3};
console.log(test.properties());*/

/*Object.prototype.properties = function() {
    var result = [];
    for (var property in this) {
        if (this.hasOwnProperty(property)) {
            result.push(property);
        }
    }
    return result;
}
var test = {'Fat Igor': true, 'Fireball': true};
console.log(test.properties());*/

function Dictionary(startValues) {
    this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
    this.values[name] = value;
}
Dictionary.prototype.lookup = function(name) {
    return this.values[name];
}
Dictionary.prototype.contains = function(name) {
    return Object.prototype.propertyIsEnumerable.call(this.values, name);
}
Dictionary.prototype.each = function(action) {
    forEachIn(this.values, action);
}
var colors = new Dictionary({
    Grover: 'blue',
    Elmo: 'red',
    Bert: 'yellow'
});

function Foo() {
    this.value = 2;
}
Foo.prototype = 1;
function Bar() {}
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World!';
Bar.prototype.constructor = Bar;
var test = new Bar();
// console.log(Bar.prototype);