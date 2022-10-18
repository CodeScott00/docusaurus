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
