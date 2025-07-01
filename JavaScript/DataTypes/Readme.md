# 📚 JavaScript Data Types

Data types define the kind of data a variable can hold in JavaScript. They help the JS engine understand how to store and handle values.

---

## ✅ Primitive Data Types

| Type       | Description                       | Example                         |
|------------|-----------------------------------|---------------------------------|
| String     | Text inside quotes                | `"Hooria"`                      |
| Number     | Integers or decimals              | `22`, `99.99`                   |
| Boolean    | Logical value: true or false      | `true`, `false`                 |
| Undefined  | Declared but no value assigned    | `let x;`                        |
| Null       | Empty value (manually assigned)   | `let y = null;`                 |
| Symbol     | Unique value (advanced usage)     | `Symbol("id")`                  |
| BigInt     | Large integer numbers             | `12345678901234567890n`         |

---

## 🔸 Non-Primitive (Reference) Data Types

| Type     | Description                       | Example                                 |
|----------|-----------------------------------|-----------------------------------------|
| Object   | Key-value pairs                   | `{ name: "Hooria", age: 22 }`           |
| Array    | List of values                    | `["red", "blue", "green"]`              |
| Function | Reusable block of code            | `function greet() { console.log("Hi") }`|

---

## 🧪 `typeof` Operator

Use `typeof` to check the data type of any variable:

```javascript
typeof "hello"      // "string"
typeof 5            // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (known JS quirk)
typeof Symbol("x")  // "symbol"
typeof 123n         // "bigint"
typeof []           // "object"
typeof function(){} // "function"



❓ Interview Questions
Q1: What are data types in JavaScript?
A: Data types define what kind of data a variable can hold — like number, text, or boolean.

Q2: How many primitive data types are there in JS?
A: There are 7: string, number, boolean, undefined, null, symbol, bigint.

Q3: What is the difference between null and undefined?
A:

undefined means a variable was declared but not given a value.

null means the variable was intentionally set to “nothing”.

Q4: What is the type of an array in JavaScript?
A: Arrays are of type object, not a separate data type.

Q5: How do you check the data type of a value?
A: Using the typeof operator.

