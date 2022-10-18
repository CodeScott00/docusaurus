---
sidebar_position: 1
---
# Introduction

## JavaScript
JavaScript is a programming language that powers the dynamic behaviour of most websites. Alongside HTML and CSS, it is a core technology that makes the web run.

## Methods
Methods return information about an object, and are called by appending an instance with a period `.`, the method name and parentheses.
```
Math.random();
```

## Libraries
Libraries contain methods that can be called by appending the library name with a period `.`, method name and parentheses.
```
Math.random();
^ // Math is the library
```

## Numbers
Numbers are a primitive data type. They include the set of all integers and floating point numbers. 
```
let amount = 7; 
let price = 3.99;
```

## String .length
The `.length` property of a string returns the number of characters that make up the string.
```
let message = "I should be eating pizza instead"
console.log(message.length);
// prints: 32 (probably, if my counting is correct - spaces included)
```

## Data Instances
When a new piece of data is introduced into a JavaScript program, the program keeps track of it in an instance of that data type. An instance is an individual case of a data type. 

## Booleans
Booleans are a primitive data type. They can be either `true` or `false`.

## Math.random();
the `Math.random()` function returns a floating-point, random number in the range from 0(inclusive) up to but not including 1.
```
console.log(Math.random());
// prints: 0 - 0.9
```

## Math.floor();
The `Math.floor()` function returns the largest integer less than or  equal to the given number 

```
console,.log(Math.floor(5.95));
// Prints: 5
```

## Single line comments 
created with foward slashes. 
```
// this line is a comment
```

## Null
Null is a primitive data type. in represents the intentional absense of a value. in code, it is represented as `null`

```
let x = null;
```

## Strings
Strings are a primitive data type. they are a grouping od characters(lletters, spaces, numbers or symbols) surrounded by 'single' or "double" quotes.

## Arthithmetic Operators
JavaScript supports arthimetic operators for:
```
*** + Addition - 5 + 5 = 10
*** - Subtraction - 10 - 5 = 5
*** * Multiplication - 5 * 10 = 50
*** / Division - 10 / 5 = 2
*** % Modulo / Remainder - 10 % 5 = 0.5
```
## Multi-line Comments
In JS, multi-line comments are created by using ``/*` and `*/` (start & finish)
```
/* <- this is the start, this is the end -> */
```

## Remainder/Modulo Operator
This operator returns the number that remains after the right hand number divides into the left hand number as many times as is can evenly.
```
// works out how many weeks in a year and then math.floor() rounds it down.
// prints 52 (rounds down 52.143?)

const weeksInYear = Math.floor(365/7):

`**const daysLeftOver = 365 % 7**`
// prints 25.55

`console.log(`A year has ${weeksInaYear} weeks and ${daysLeftOver} days`)`
```

## Assignment Operator
Assigns the value to the left operand based on the value to the right operand. As if operand is a word. 
here are some of them:
```
let number = 100;

number = number + 10; // prints 110
number += 10; // prints 110
```

## String interpolation & Concatenation
String interpolation: Is the process of evaluating string literals containing one or more placeholders (expressions,variables, etc).
It can be performed using template literals: `my ${name} is`

String Concatenation: Strings can be cocatenated together by using the `+` operator.
```
let age = 13;

// string concatenation
'Jimmy is ' + age + ' years old';

//string interpolation
`Frankie is ${age} years old.`;
```

## Variables 
These are used when theres a need to store data. this data can then be used elsewhere. Variables are stored in computer memory Using variables also allows code to be re-usable since it can be used to replace the same value in multiple places. Variables can store all types of data:
- objects
- strings
- numbers
- lists
- functions
- promises
- booleans
- undefined
```
const currency = '$';
let userIncome = 70000;

console.log(`${currency} ${userIncome} is the salary for this interview m'kay?`)
// prints `$70000 is the salary for this interview m'kay?

const gotTheJob = true;
const expectations = [];
const salaryExpectations = salaryChecker(employee, awesomenessLevel);
```
## Varaible Declarations
- `var` is used pre-ES6 versions of JS.
- `let` is preferred way to declare a varialbe which can be reassigned.
- `const` is the preferred way to declare a variable with a constant value.
```
var age;
let weight;
const pie; 
```

## Undefined
undefined is a primitive JS value that represents lack of defined value. Varialbles that re declared but not intialized to a value will have the value undefined.
```
var noValueAttached;

console.log(noValueAttached);
// prints undefined
```

