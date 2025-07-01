// JavaScript Math Expressions, Operators & Concatenation
// You can use variables in math operations just like numbers.
var price = 120;
var quantity = 4;
var total = price * quantity;
console.log("Total Price :", total)//480

// practice
var  a = 10;
var b =5;

var add = a + b;
var sub = a - b;
var product = a * b;
var divison = a / b;

console.log("Addition:", add);
console.log("Subtract:", sub);
console.log("Product:", product);
console.log("Division:", divison);

//Increment / Decrement Operators
console.log("\n Increment / Decrement Operators")
var count = 5;
console.log("Original:", count);
console.log("Pre increament:", ++count);
console.log("Post increament:", count++);
console.log("After Post-increament:", count);

var a = 4; // 5, 4, 5
var b = 5; 6 
var exp = ++a + b++ - --a + a++ + b;
    //     5  +  5  - 4 +  4  +  6  //16
     
console.log("a:", a);
console.log("b", b);
console.log("exp:", exp);

//  Assignment Operators
 console.log(" \nAssignment Operators")
var score = 10;
score += 5;
score *= 2;
score -= 4;
score /= 2;
console.log("Final Score:", score) // ((10+5)*2-4)/2 = 




// Operator Precedence (BODMAS)
console.log("\n Operator Precedence (BODMAS)")
console.log(3 + 6 * 2)//15
console.log((3 + 6) * 2) //18
console.log( 2 + 4 + 5 / 15 *100);
console.log(((2 + 4 + 5 )/ 15 )*100); // 73.333
console.log(5 + 3 * 2 - (4 + 1)); // 6


// Concatenation 
console.log("\n Concatenation ")
let firstName = "Hooria";
let lastName = "Fatima";
console.log("Full Name:", firstName + " " + lastName);

let age = 22;
console.log("My age is " + age + " years.");
console.log("5" + 2); // 52
console.log(5 + "2"); // 52
console.log(5 + 2 + " years"); // 7 years


// NaN (Not a Number)
console.log("\n NaN (Not a Number)")

console.log("abc" - 2); // NaN
console.log("5a" * 3);  // NaN
console.log("hello" / 2); // NaN
console.log("23" + 2); //concatenation