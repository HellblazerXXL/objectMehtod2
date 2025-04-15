// 1. Given two user profile objects (e.g., personalInfo and contactInfo), merge them into a single userProfile object.
// 2. Given a product object, log all its keys and values. Bonus: Format them as "key: value" pairs in an array or print them line by line.
// 3. Create a settings object (e.g., theme: "dark", notifications: true). Freeze it and try changing a value. Use Object.isFrozen to confirm if it's immutable.

let product = {
    name : "HP",
    type: "electronic",
    manufactureDate: 1239
}

let keys = console.log(Object.keys(product));
let values = console.log(Object.values(product));
console.log(product)