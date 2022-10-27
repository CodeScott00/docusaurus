---
sidebar_position: 2
---
## Control flow
- Control flow is the order that statements are executed in a program.
- the default control flow is for staements to be executed in from left to right, top to bottom.
Control structures such as conditionals (if statements etc) alter control flow by only executing blocks of code if certain conditions are met. These structures essentailly make the decsions about which code is executed as the program runs.

## Logical 'OR' Operator  ||
The OR operator `||` checks two values and returns a boolean. 
- if one or both values are 'truthy' it returns `true`.
- if both values are 'falsy' it returns `false`.

| A | B | A 'OR' B |
| ------------- | ------------ | ------------ |
| false | false | false |
| false | true | true |
| true | false | true |
| true | true | true |

```
true || false;  //true
10 > 5 || 10 >20;   //true
false || false; //false
10 > 100 || 10 > 20;    //false
```

## Ternary Operator '?'
The ternary operator allows for a compact syntax in the case of binary( choosing between two choices) decisions.
It accepts a condition followed by a `?` operator, and then two expressions seperated by a `:`. if the condition evaluated to `truthy`, the first expression is executed otherwise the second expression is executed.
```
let price = 10;
let day = "Tuesday";

day === "Tuesday" ? price -= 2 : += 1;

//if day is Tuesday (price - 2) else (price + 1)
```
## Logical Operator &&
the logical operator `&&` checks two values and returns a boolean. if both values are truthy, then it returns true. if one or both values are falsy, then it retuns false. 
## Logical Operator 
the logical NOT Operator `!` can be used t do one of the following :
- invert a boolean value.
- invert the truthiness of non-Boolean values. 
```
let lateToWork = true;
let oppositeValue = !lateToWork;

console.log(oppositeValue)
// prints false
```
## Comparison Operators
Comparison operators are used to compare two values and return `true` or `false` depending on the validity of the comparison.
- `===` strict equal
- `!==` strict not equal
- `>` greather than
- `>=` greater than or equal to
- `<` less than
- `<=` less than or equal
```
1 > 3 // false 
3> 1 // true
250 >= 250 // true
1 === 1 // true
1 === '1' // false
1 === 2 // false
```

## Switch Statement 
- The `switch` statment provides a means of checking an expression against multiple `case` clauses. if a case matches, the code inside that clause is executed.
- The case clause should finish with a break keyword. if no case matches but a `default` clause is included, the code inside `default` will be executed.
- **Note**: if `break` is omitted from the block of a `case` the `switch` staement will continue to check against `case` values until a break is encountered or the flow is broken. 
```
const food = "caramel shortcake";

swtich (food) {
    case "haddock":
        console.log("the taste of the sea");
        break;
    case "pizza":
        console.log("Two for Tuesdays");
        break;
    default:
        console.log("Enjoy your meal whatever it may be");
}
// prints Enjoy your meal whatever it may be
```
## if Statement
an `if` statement accepts an expression with a set of parentheses:
- if the expression evaluates to a truthy value, then the code within its code body execute.
- if the expression evalautes to a falsy value, its code body will not execute. 
```const elvisIsDead = true;
if (elvisIsDead) {
    console.log("The King rests in peace")
}
// prints The King rests in peace
```
## else Statement
an `else` block can be added to an `if` block or a series of `if-else if` blocks. the `else` block will be executed only if the `if` condition fails.
```
const isTaskComplete = false;

if(isTaskComplete) {
    console.log("Done");
} else {
    console.log("Not Done");
}
```
## else if clause
After an intial `if` block, `else if` blocks can each check an additional condition. an optional `else` block can be added after the `else if` block(s) to run by default if none of the conditions evaluated to truthy. 
```
const size = 10;

if (size > 100) {
    console.log("big");
}   else if (size > 20) {
    console.log("Medium");
}   else if (size > 4) {
    console.log("Small")
}   else {
    console.log("Tiny");
}
// prints Small
```
## Truthy and Falsy
In JS values evaluate to `true` or `false` when evaluated as Booleans.
- values that evaluate to `false` are known as falsy
- values that evaluate to `true` are known as truthy.
Falsy values include `false`, `0`, empty strings, `null` `undefined` and `NaN`. all other values are truthy.