# 📌 JavaScript `var` Keyword

## ✅ What is `var`?
`var` is used to declare variables in JavaScript. It is **function-scoped**, allows **redeclaration**, and is now mostly replaced by `let` and `const`.

---

## 🔍 Key Features
- ✅ Can be updated and redeclared
- ⚠️ Function-scoped (not block-scoped)
- 🔁 Hoisted with `undefined` value
- ❌ Avoid using in modern JavaScript

---

## 👨‍💻 Examples:
```javascript
var message = "Hello";
message = "Hi";         // ✅ Can update

var message = "Hey";    // ✅ Can redeclare

if (true) {
  var test = "inside";
}
console.log(test);      // ✅ Accessible (not block-scoped)



❓ Interview Questions
Q1: What is var used for?
A: var is used to declare variables in JavaScript (older way).

Q2: What is the scope of var?
A: var is function-scoped, not block-scoped.

Q3: Can you redeclare a var variable?
A: ✅ Yes, var allows redeclaration in the same scope.

Q4: Why is var not recommended now?
A: Because it can cause bugs due to hoisting and lack of block-scope.

Q5: What should we use instead of var?
A: Use let (changeable value) or const (fixed value) in modern JS.

markdown
Copy code
