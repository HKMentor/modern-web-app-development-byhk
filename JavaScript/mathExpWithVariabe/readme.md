# JavaScript Math Expressions, Operators & Concatenation - README

## 📘 Overview
This guide covers JavaScript's math expressions using variables, increment/decrement operations, operator precedence (BODMAS), assignment operators, concatenation, NaN, and type coercion. With examples, explanations, and real-world use cases.

---

## 🔢 Math Expressions with Variables

### ✅ Explanation:
You can use variables in math operations just like numbers.

```js
let price = 100;
let quantity = 2;
let total = price * quantity; // 200
console.log(total);
```

### 💡 Real-life Example:
Calculate total bill based on price and quantity.

---

## 🔁 Increment / Decrement Operators

### ✅ Explanation:
- `++` adds 1
- `--` subtracts 1

**Types:**
- Pre: `++a`, `--a` → changes value before use
- Post: `a++`, `a--` → uses value first, then updates

```js
let likes = 0;
likes++; // 1
console.log(likes); // 1
```

```js
let a = 5;
console.log(++a); // 6 (pre)
console.log(a++); // 6 (post), a is now 7
```

---

## 🧮 Assignment Operators

### ✅ Explanation:
Update a variable using its own value.

| Operator | Meaning        | Example    |
|----------|----------------|------------|
| `+=`     | Add and assign | `x += 2`   |
| `-=`     | Sub and assign | `x -= 2`   |
| `*=`     | Mul and assign | `x *= 2`   |
| `/=`     | Div and assign | `x /= 2`   |

```js
let x = 10;
x += 5; // x = 15
console.log(x);
```

---

## 📐 Operator Precedence (BODMAS)

### ✅ Explanation:
JavaScript follows math rules: Brackets → Orders → Divide/Multiply → Add/Subtract

```js
console.log(3 + 6 * 2); // 15
console.log((3 + 6) * 2); // 18
```

---

## ✨ Concatenation with `+`

### ✅ Explanation:
Joining strings using `+`. If one side is string, all are treated as strings.

```js
let name = "Hooria";
let message = "Hello, " + name + "!";
console.log(message); // Hello, Hooria!
```

```js
console.log("23" + 7); // "237"
console.log(7 + 5 + "23" + 1); // "12231"
```

---

## ❌ NaN (Not a Number)

### ✅ Explanation:
When an invalid math operation occurs with strings.

```js
console.log(2 - "abc"); // NaN
console.log("5a" * 2); // NaN
```

---

## 🔄 Type Coercion (Automatic Conversion)

### ✅ Explanation:
JavaScript auto converts types in expressions.

```js
console.log("10" + 5); // "105" (number to string)
console.log(1 + true); // 2 (true = 1)
```

---

## 🧠 Summary Table

| Concept             | Description                       | Example              |
|---------------------|-----------------------------------|----------------------|
| Math Expressions    | Use variables in math             | `price * qty`        |
| Increment/Decrement | Increase or decrease by 1         | `likes++`            |
| Assignment Operator | Shortcut for updating value       | `x += 5`             |
| BODMAS              | Follow operator precedence        | `(3+2)*4`            |
| Concatenation       | Join strings with `+`             | `"Hello" + name`     |
| NaN                 | Invalid number operation          | `2 - "abc"`          |
| Type Coercion       | Auto convert types in expressions | `1 + true` → `2`     |

---

## ❓ Interview Questions

1. What is the result of `"10" + 5`?
   - "105" (string concatenation)

2. What does `x += 2` do?
   - Adds 2 to `x` and assigns it back

3. What is the difference between `++x` and `x++`?
   - Pre-increment vs Post-increment

4. What is NaN in JavaScript?
   - A result when math is done with invalid types

5. How does JavaScript handle `1 + true`?
   - Converts true to 1, result = 2

---

## ✅ Practice More:
Try changing values, using `prompt()` and displaying with `alert()` or `document.write()`.

```js
let a = 4;
let b = 5;
let result = a * b - ++a + b++;
console.log(result);
```

Happy Coding 💻✨
