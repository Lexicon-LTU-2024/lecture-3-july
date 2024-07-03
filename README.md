# Intro to JavaScript

_( for .Net developers)_

<details>
<summary>Table of content</summary>

- [What is JavaScript?](#what-is-javascript)

  - [Key Features of JavaScript](#key-features-of-javascript)
  - [Common Uses of JavaScript](#common-uses-of-javascript)

- [First things first, JavaScript vs C#](#first-things-first-js-vs-c)

  - [Compilation and Execution](#compilation-and-execution)
  - [Object-Oriented Programming](#object-oriented-programming)
  - [Concurrency and Asynchrony](#concurrency-and-asynchrony)

- [Basic Syntax](#basic-syntax)

  - [Primitive Types](#primitive-types)

    - [Number](#number)
    - [String](#string)
    - [Boolean](#boolean)
    - [Null](#null)
    - [Undefined](#undefined)

  - [Variables](#variables)

    - [let](#let)
    - [const](#const)
    - [var](#var)

  - [Object](#object)

    - [Objects](#objects)
    - [Arrays](#arrays)

      - [Array Methods](#array-methods)

  - [Functions](#functions)

</details>

## What is JavaScript?

JavaScript is a high-level, dynamic, and interpreted programming language primarily used for creating and enhancing the interactivity of web pages. It allows developers to implement complex features such as dynamically updating content, controlling multimedia, animating images, and much more. JavaScript is an essential part of modern web development, working alongside HTML and CSS.

[Back to top](#intro-to-javascript)

### Key Features of JavaScript

- **Event-Driven**: JavaScript can react to user inputs and browser events, making web pages interactive.

- **Object-Oriented**: Supports object-oriented programming principles, allowing for reusable code and modular design.

- **Versatile**: Can be used for both front-end (client-side) and back-end (server-side) development with environments like Node.js.

- **Lightweight and Fast**: JavaScript is lightweight and executed quickly by web browsers, enhancing user experience.

[Back to top](#intro-to-javascript)

### Common Uses of JavaScript

- **Web Development**: Enhancing user interfaces and creating dynamic web applications.

- **Game Development**: Creating browser-based games.
  Mobile Applications: Developing cross-platform mobile apps using frameworks like React Native.

- **Server-Side Development**: Building scalable network applications with Node.js.

[Back to top](#intro-to-javascript)

## First things first, JavaScript vs C#

Before we dive in to the code, let's look at some differences between the two languages.

### Compilation and Execution

- **JavaScript**

  - Interpreted language, typically runs in the browser's JavaScript engine.

  - Uses Just-in-Time (JIT) compilation for performance.

  - Mainly client-side, also used server-side with Node.js.

- **C#**

  - Compiled language, compiled into Intermediate Language (IL).

  - Executed by the Common Language Runtime (CLR) in the .NET framework.

  - Primarily server-side, also used for desktop and mobile applications.

[Back to top](#intro-to-javascript)

### Object-Oriented Programming

- **JavaScript**

  - Prototype-based inheritance.

  - ES6 class syntax provides syntactic sugar over prototypes.

- **C#**

  - Class-based inheritance.

  - Supports traditional OOP features like inheritance, polymorphism, and encapsulation.

[Back to top](#intro-to-javascript)

### Concurrency and Asynchrony

Since you have experience with C# and .Net, adding JavaScript to you skillset should be relatively easy.

- **JavaScript**

  - Single-threaded, uses an event loop for asynchronous operations.

  - Asynchronous programming with callbacks, Promises, and async/await.

- **C#**

  - Multi-threaded, supports parallel processing.

  - Asynchronous programming with async and await keywords.

[Back to top](#intro-to-javascript)

## Basic Syntax

### Primitive Types

Primitive types are much simplier in JavaScript, it only exist a few of them really, but those are enough.

[Back to top](#intro-to-javascript)

#### Number

The number type encompasses all the different number related types in C#. It's a double precision 64 bit value, which gives it the equvivalence of a double in C#.

`1, 2, 3, 100, 3.14, -564, 673498374`

#### String

Exactly the same as `string` in C#, but single quotes, double quotes and backticks are allowed.

Single quotes: `'Niklas'`

Double quotes: `"Dimitris"`

Backticks

```
`Marcus`
```

#### Boolean

Exactly the same as C#

`true, false`

#### Null

Exactly the same as `null` in C#. Used when we explicitly set a variable with no value.

#### Undefined

For variables that have not yet been defined.

[Back to top](#intro-to-javascript)

### Variables

In C# variables must be declared with a specific type _( and it can't be change afterwards)_ or in some cases you can use `var` in order to let the compilator try and figure out what the type is. In JavaScript we use specific keywords when declaring variables instead of a type, and we always let the compilator fiogure what type it is. We also have the opportunity to change the type of the variable whenever we feel like.

[Back to top](#intro-to-javascript)

#### let

`let` is a block-scoped variable that is used when we want to create a variabel that we might need to update during the life time of our application.

```js
let firstName = "Niklas";

//..later in the code

firstName = "Dimitiris";
firstName = `Marcus`;

console.log(firstName); // "Marcus"

// We can always change type and value of a let variable.
firstName = true;
console.log(firstName);
```

#### const

`const` is also a block-scoped variable, but we can't change the value of it later in the code. It's simply a constant.

```js
const birthYear = 1990;

// ..later in the code

birthYear = 1995; // The browser won't allow it.
```

#### var

`var` is function-scoped in JavaScript and that's a little bit harder to explain then block-scoped. In this course we should not use it, and I will be angry if you do!

_TODO: Add link to documentation_

[Back to top](#intro-to-javascript)

### Object

You might have heard that everything in JavaScript is an object but that's not really the truth. There are true objects, like arrays, objects _(!)_ _( sounds weird with object again but just leave it for now)_ and functions. Primitives are not objects but they can be treated like objects temporarily through their corresponding wrapper objects

[Back to top](#intro-to-javascript)

#### Objects _( object literals )_

The fundamental building blocks in JavaScript. An object is a collection of key-value pairs. Much like a `Dictionary` in C# but objects are way more dynamic.

```js
const person = {
  name: "Niklas",
  proffesion: "Developer",
  age: 33,
  sports: ["Football", "Handboll"],
  certified: true,
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

console.log(person);
```

As you can see, we can put basically anything inside an object! How do we use the object then?

```js
console.log(person.name); // "Niklas", dot-notation to access

console.log(person["proffesion"]); // "Developer", alternative way to access. ( bracket-notation )

person.name = "Henrik"; // Modify existing property.
person["age"] = 30; // Alternative way of modifying.

person.children = 3; // Out of the blu, just add a new property.

person.sayHi(); // Invoke the function

delete person.sports; // Remove property.
```

You can also loop through an object in Javascript. Remember to use a `for..in-loop`. There also exist an `for..of-loop` but that's for arrays.

```js
for (const key in person) {
  console.log(person.[key]);
  // Need to use bracket notation to acces dynamic properties dynamically.
}
```

[Back to top](#intro-to-javascript)

#### Arrays

In JavaScript, arrays are a special type of object that are used to store collections of data. Unlike regular objects, which use named keys, arrays use indexes to access their elements. Arrays are dynamic, meaning their size can grow or shrink as needed, and they come with a variety of built-in methods that make working with collections of data more convenient.

Basic example:

```js
const sports = ["Football", "Handboll", "Basketball", "Tennis"];

console.log(sports);
```

You can access and manipulate elements in an array using their index.

```js
console.log(sports[0]); // "Football"

sports[0] = "Soccer"; // Modify first element in array

sports.push("Hockey"); // Add the new element to the end of the array.

sports.pop(); // Remove the last element from the array.

console.log(sports.length); // Get the number of elements in the array
```

##### Array Methods

Arrays also come with many useful methods for iteration, transformation, and searching. These methods are simply called "array-methods":

**push()** => number _( the new length of the array )_

    Add a new element to the end of the array.

**pop()** => the removed element _( undefined if empty )_

    Remove the last element from the array

**unshift()** => number _( the new length of the array )_

    Add a new element to the beginning of the array.

**shift()** => the removed element _( undefined if empty )_

    Remove the first element from the array

**forEach( callback(element, index?) )** => void

ForEach is just an array method that loops through the array and returns nothing.

A callback function is just a normal function that is used as an argument _( parameter )_.

```js
sports.forEach(function (element) {
  console.log(element);

  // In each iteration we have access to the current element that is iterated over.
});
```

**includes( searchElement )** => boolean

Check wheater an element exists or not in the array.

```js
const doesSoccerExist = sports.includes("Soccer");
console.log(doesSoccerExist);
```

**indexOf( searchElement )** => The first index of searchElement in the array. -1 if not found.

Search for the index of the element in question.

```js
const indexOfTennis = sports.indexOf("Tennis");
console.log(indexOfTennis);
```

**slice( start, end )** => a new array containing extracted elements

Is used to extract subarrays from an existing array. It includes the start index but EXCLUDES the end index.

```js
const fewSports = sports.slice(1, 3);
console.log(fewSports);
```

**splice( start, deleteCount?, item1?, item2?, itemN?... )** => a new array containing the removed elements

Is used to further manipulate the content of an array, including deleting and adding elements, all in one go.

```js
console.log(sports);

// Let's remove the element on index position 2 and and the element "Curling" on that position.

const deletedElements = sports.splice(2, 1, "Curling");
console.log(sports);
```

**map( callback(element, index?) )** => A new array with each element being the result of the callback function.

This function is used to modify elements inside an array. The result will be returned in a new array. Every iteration must return a new value/element OR the orginal value/element.

```js
const numbers = [1, 2, 3, 4, 5];
const numbersDoubled = numbers.map(function (number) {
  if (number === 4) {
    return number;
  }

  return number * 2;
});

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(numbersDoubled); // [2, 3, 6, 8, 10]
```

**filter( callback(element, index?) )** => A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

The callack functions is the check here, it must return true or false. If it's true, the element will remain in the array. If it's false it will be filtered away.

```js
const numbers = [1, 23, 55, 62, 34, 99];

const filteredNumbers = numbers.filter(function (number) {
  if (number > 50) {
    return false;
  }

  return true;
});

console.log(filteredNumbers);
```

This was just a few examples of array methods, but as you can see, arrays in JavaScript are powerful and versatile, making it easy to handle lists and collections of data efficiently. They are essential tools for any JavaScript developer and can be used in a wide variety of programming tasks.

[Link to complete list of array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Back to top](#intro-to-javascript)

### Functions

A function is a reusable block of code designed to perform a particular task. Functions can be defined in several ways and can accept parameters and return values.

#### With the `function` keyword

```js
function greet(name) {
  console.log(`Hello ${name}!`);
}

// The above function has no return value, which means it will return undefined "in the background".

function add(a, b) {
  return a + b;
}
```

These functions are always "hoisted" which means they are always available, even before the row on which they are created.

#### Function Expression

A function can also be defined using a function expression. This involves assigning a function to a variable

```js
const multiply = function (a, b) {
  return a * b;
};
```

#### Arrow functions

Arrow functions provide a shorter syntax for writing functions in JavaScript. They are particularly useful for writing concise, one-line and callback functions.

```js
// With normal function syntax
const divide = function (a, b) {
  return a / b;
};

// With arrow syntax
const divide = (a, b) => {
  return a / b;
};

// If the return value is very simple, then one-line arrow function
const divide = (a, b) => a / b;
```

### The most common use case for arrow functions

#### As a callback functions

```js
const numbers = [1, 4, 6, 234, 44, 430];

const doubleNumbers = numbers.map((number) => number * 2);
const filteredNumbers = numbers.filter((number) => number < 50);
```

[Back to top](#intro-to-javascript)
