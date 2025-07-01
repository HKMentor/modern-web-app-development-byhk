# 📝 JavaScript Variable Names (Legal & Illegal)

This note explains which variable names are allowed in JavaScript and which are not, following best practices like **camelCase**.

---

## ✅ Legal Variable Names

- Must **start** with a letter (a–z, A–Z), **$**, or **_**
- Can contain **letters**, **numbers**, **$**, or **_**
- Variable names are **case-sensitive** (e.g., `name` ≠ `Name`)
- Use **camelCase** style (recommended for readability)

### ✔ Examples
```javascript
let userName;
let $price;
let _value;
let user1;
let myVar;
let firstName; // camelCase
❌ Illegal Variable Names
❌ Starts with a number

❌ Contains spaces

❌ Uses quotes (" " or ' ')

❌ Uses special characters (@, !, #, etc.)

❌ Uses JavaScript reserved keywords (let, var, alert, etc.)

✘ Examples
javascript
Copy code
let 1user;       // ❌ starts with number
let user name;   // ❌ contains space
let "name";      // ❌ uses quotes
let var;         // ❌ reserved keyword
let @total;      // ❌ special character
🐫 camelCase Naming Convention
camelCase =

First word lowercase

Next words capitalized

Improves readability

✔ Example:
javascript
Copy code
let firstName;
let totalAmount;
let userEmail;
🧠 Interview Questions (with Answers)
Q1: Can a variable name start with a number?
A: ❌ No, variable names cannot start with a number.

Q2: What is camelCase in JavaScript?
A: A naming style where the first word is lowercase and each new word starts with a capital letter.
Example: userName, productPrice

Q3: Are variable names case-sensitive in JavaScript?
A: ✅ Yes. name and Name are considered different variables.

Q4: Is let var = 5; a valid variable name?
A: ❌ No, var is a reserved JavaScript keyword.

Q5: Can variable names contain $ and _?
A: ✅ Yes, both $ and _ are allowed and often used in JS variable names.

