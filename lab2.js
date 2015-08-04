'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington. */

function Blob(consumptionRate) {
  this.consumptionRate = consumptionRate;
}

var blob = new Blob();

var peoplePerHour = 1;
var population = 1000;
var hours = 0;

while (population > 0) {
  population = population - peoplePerHour;
  peoplePerHour++;
  hours++;
  if (population <= 0) {
    break;
  }
}

var hoursSpentInDowington = hours;
                            // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.
Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {
  var hoursToConsume = 0;
  if (population === 0) {
    return hoursToConsume;
  }
  while (population > 0) {
    population = population - peoplePerHour;
    hoursToConsume++;
    if (population <= 0) {
      return hoursToConsume;
    }
    peoplePerHour++;
  }
};
console.log(blob.hoursToOoze(276, 1));
  // TODO: implement me based on the instructions above.
  // Be sure to then assign me to the Blob's prototype.

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(21, 1) === 6, '21 people should take 6 hours to ooze.');
assert(blob.hoursToOoze(78, 1) === 12, '78 people should take 12 hours to ooze.');
assert(blob.hoursToOoze(276, 1) === 23, 'no people means no time needed.');
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(home, language) {
  this.home = home;
  this.language = language;
}

//   // TODO: specify a home planet and a language
//   // you'll need to add parameters to this constructor

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function(sb) {
  console.log(hello[this.language]);
  return (hello[sb.language]);
};
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
function Klingon() {
  this.SentientBeing = 'Klingon';
}
Klingon.prototype = new SentientBeing('Qo\'noS', 'klingon');

function Romulan() {
  this.SentientBeing = 'Romulan';
}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

function Human() {
  this.SentientBeing = 'Human';
}
Human.prototype = new SentientBeing('Earth', 'federation standard');

// var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: make a klingon
// var romulan = new SentientBeing('Romulus', 'Jolan\'tru'); // TODO: make a romulan
// var human = new SentientBeing('Earth', 'hello'); // TODO: make a human

// console.log(human.sayHello(klingon));
// console.log((new Human()).sayHello(new Klingon()));
assert((new Human()).sayHello(new Klingon()) === 'nuqneH',
   'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the human should hear hello');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the romulan should hear Jolan\'tru');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneH');
//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max() {
  return Math.max(1, 3, 2);
  // TODO: return the largest number in the given array
}
console.log(max([1, 3, 2]));
// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');
assert(max([1, 3, 2]) > 1, '[1,3,2]');
assert(max([1, 3, 2]) > 2 && max([1, 3, 2]) < 4, '[1,3,2]');
assert(max([1, 3, 2]) < 4 && max([1, 3, 2]) > 2, '[1,3,2]');

  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()
function variablify(string) {
  var newString = '';
  var newArr = [];
  if (string.indexOf(' ') != -1) {
    newArr = string.split(' ');
    for (var i = 1; i < newArr.length ; i++) {
      newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].substr(1);
    }
    newString = newArr.join('');
  }
  return newString;
}
variablify('popped popping popcorn');
// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');
assert(variablify('high fives please') === 'highFivesPlease',
  'variablify(\'high fives please\')');
assert(variablify('popped popping popcorn') === 'poppedPoppingPopcorn',
  'variablify(\'popped popping popcorn\')');
assert(variablify('best dog roxy') === 'bestDogRoxy',
  'variablify(\'best dog roxy\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
