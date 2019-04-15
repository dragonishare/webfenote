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
killerRabbit.speak('GRAAAAAAAH!'); */




