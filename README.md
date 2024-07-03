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

##### Array Methods

Arrays also come with many useful methods for iteration, transformation, and searching. These methods are simply called "array-methods":

**push()** => number _( the new length of the array )_

**pop()** => the removed element _( undefined if empty )_

**unshift()** => number _( the new length of the array )_

**shift()** => the removed element _( undefined if empty )_

**forEach( callback(element, index?) )** => void

**includes( searchElement )** => boolean

**indexOf( searchElement )** => The first index of searchElement in the array. -1 if not found.

**slice( start, end)** => a new array containing extracted elements

**splice( start, deleteCount?, item1?, item2?, itemN?... )** => a new array containing the removed elements

**map( callback(element, index?) )** => A new array with each element being the result of the callback function.

**filter( callback(element, index?) )** => A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

This was just a few examples of array methods, but as you can see, arrays in JavaScript are powerful and versatile, making it easy to handle lists and collections of data efficiently. They are essential tools for any JavaScript developer and can be used in a wide variety of programming tasks.

[Link to complete list of array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[Back to top](#intro-to-javascript)
