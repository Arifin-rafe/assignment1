## Why any is Called a “Type Safety Hole” and Why unknown is Safer

Introduction

Both any and unknown can store any type of value. But they they do ooposite work. While any removes TypeScript’s safety checks, but unknown forces us to check the type before using the value. This is why unknown is considered the safer option.

Why any is a “Type Safety Hole”

The any type basically tells TypeScript to stop checking for errors.So it will not show any error during code execution.


let name: any = "rafe";

console.log(name.toFixed(2));

here TypeScript allows the code even though toFixed() only works on numbers. This can cause runtime errors. That’s why any is called a “type safety hole”

Why unknown is Safer

The unknown type can also hold any value, but without checking its type first you cant use it.

const name: unknown = "rafe";

if (typeof data === "string") {
  console.log(name.toUpperCase());
}

Here, we first check whether name is a string. After the check, TypeScript understands the exact type and allows string methods safely.

What is Type Narrowing?

Type narrowing means making a variable’s type more specific inside a block of code. TypeScript uses checks like typeof, instanceof, or conditions to narrow the type.

function mYFunction(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

here in first block typescript know its string and he the second block its number.

This process is called type narrowing.

Conclusion
any is risky because it disables TypeScript’s type checking and can lead to unexpected errors. On the other hand, unknown keeps the program safer by forcing proper type checks. Type narrowing helps TypeScript understand the exact type of a variable and write clean and safe code.