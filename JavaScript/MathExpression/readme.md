# 📘 JavaScript Basics – Definitions & Explanations

This file summarizes the concepts of naming conventions, basic math operators, and increment/decrement operators in JavaScript with simple and clear explanations — ideal for revision and interviews.

---

## ✅ Naming Conventions in JavaScript

### ➤ camelCase
- First word starts with lowercase, next words start with uppercase.
- Used for: **variables, functions**
- Example: `myVariable`, `totalAmount`

### ➤ snake_case
- Words are lowercase and separated by underscores.
- Not commonly used in JavaScript.
- Example: `my_variable`

### ➤ PascalCase
- Each word starts with an uppercase letter.
- Used for: **Class or Constructor names**
- Example: `MyClass`, `StudentInfo`

### ➤ UPPER_CASE
- All letters uppercase with underscores.
- Used for: **constants**
- Example: `MAX_LIMIT`, `PI_VALUE`

---

## 🔢 Math Expressions (Chapter 5 – Familiar Operators)

JavaScript supports the following basic math operators:

| Operator | Description                        | Example     |
|----------|------------------------------------|-------------|
| `+`      | Addition – adds two values         | `10 + 5 = 15` |
| `-`      | Subtraction – subtracts values     | `10 - 3 = 7`  |
| `*`      | Multiplication – multiplies values | `2 * 3 = 6`   |
| `/`      | Division – divides values          | `10 / 2 = 5`  |
| `%`      | Modulus – returns remainder        | `7 % 2 = 1`   |
| `**`     | Exponent – raises to power         | `2 ** 3 = 8`  |

### ➤ Important Points:
- If you add a number and a string, the result will be a **string** (concatenation).
- If the string is numeric (`"20"`), JS converts it to a number during other math operations.

---

## 🔁 Increment & Decrement Operators (Chapter 6 – Unfamiliar Operators)

JavaScript provides two types of increment/decrement:

### ➤ Increment Operators
- `++num` → **Pre-increment**: Increases value before using it.
- `num++` → **Post-increment**: Uses value first, then increases it.

### ➤ Decrement Operators
- `--num` → **Pre-decrement**: Decreases value before using it.
- `num--` → **Post-decrement**: Uses value first, then decreases it.

### 🔎 Explanation:
These operators are often used in:
- Counters
- Loops
- Math expressions
- Real-time updates

---

## 🧠 Concept Recap

- Pre (`++num`, `--num`) updates first, then uses the value.
- Post (`num++`, `num--`) uses the value first, then updates.
- Mixing these in expressions changes the final result — order matters!

---

## ❓ Interview Questions

### Q1: What naming convention is used in JS for variables?
**A:** `camelCase` is standard for variables and functions.

### Q2: What is the difference between `++num` and `num++`?
**A:**  
- `++num`: increments before using  
- `num++`: uses first, then increments

### Q3: What does `%` (modulus) operator return?
**A:** The remainder after dividing one number by another.

### Q4: What happens when a number is added to a string?
**A:** The number is converted to a string and concatenated.

### Q5: What is `2 ** 4` in JavaScript?
**A:** `16` – it's exponentiation (2 raised to the power of 4).

### Q6: Which naming style is used for classes?
**A:** `PascalCase` (like `MyClass`)

---

