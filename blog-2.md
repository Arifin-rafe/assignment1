## How Generics Make TypeScript Code Reusable and Safe

Introduction

Generics in TypeScript help developers write reusable code without losing type safety. With the help of generics we can manage different data in a single function.
Generics Concepts

A generic allows us to use a placeholder type that gets decided when the function is called.

function myName<T>(value: T): T {
  return value;
}

console.log(myName<string>("rafe"));
console.log(myName<number>(100));

Here we can see that the same function can work with strings, numbers, or any other type while still keeping proper type checking. so it helps the developers many data types in single function.
function arrayItem<T>(item: T): T[] {
  return [item];
}

const numbers = arrayItem<number>(5);
const names = arrayItem<string>("rafe");

Here, the same function creates arrays for both numbers and strings without changing the logic.

Conclusion
To concluse we can say that generics in TypeScript code cleaner, reusable, and safer. it helps developers to build flexible functions and components.