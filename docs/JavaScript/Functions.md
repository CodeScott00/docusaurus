---
sidebar_position: 3
---
## Arrow Functions (ES6)
Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the `function` keyword and uses a fat arrow `=>` to seperate the parameter(s) from the body. 
There are several variations of arrow functions:
- Arrow functions wit a single parameter do not require `()` around the parameter list.
- Arrow functions with a single expression can use concise function body which returns the result of the espression without the `return` keyword. 

```
// Arrow with two arguments
const sum = (firstPara, secondPara) => {
    return firstPara + secondPara;
};
console.log(sum(5,5)) // prints 10

Arrow with no arguments
const printHello = () = {
    console.log('hello');
};
printHello(); /prints hello

// Arrow function with single parameter
const checkWeight = weight = {
    console.log(`Baggage weight ${weight} kg);
};
checkWeight(25); // prints Baggage weight: 25 kg

// Concise arrow 
const multiply = (a,b) => a * b
console.log(multiply(2,2)); // prints 4
```