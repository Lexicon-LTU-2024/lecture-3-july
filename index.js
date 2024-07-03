// ########## Let ##########

// let firstName = "Niklas";

//..later in the code

// firstName = "Dimitiris";
// console.log(firstName); // "Dimitiris"

// firstName = `Marcus`;
// console.log(firstName); // "Marcus"

// We can always change type and value of a let variable.
// firstName = true;
// console.log(firstName);

// ########## Const ##########

// const birthYear = 1990;

// ..later in the code

// birthYear = 1995; // The browser won't allow it.

// ########## Objects ##########

// const person = {
//   name: "Niklas",
//   proffesion: "Developer",
//   age: 33,
//   sports: ["Football", "Handboll"],
//   certified: true,
//   sayHi: function () {
//     console.log(`Hi, my name is ${this.name}`);
//   },
// };

// console.log(person);
// console.log(person.name); // "Niklas", dot-notation to access
// console.log(person["proffesion"]); // "Developer", alternative way to access.

// person.name = "Henrik"; // Modify existing property.
// console.log(person);

// person.children = 3; // Out of the blu, just add a new property.
// console.log(person);

// person.sayHi(); // Invoke the function

// delete person.sports;
// console.log(person);

// for (const key in person) {
//   console.log(person[key]);
// }

// ########## Arrays ##########

