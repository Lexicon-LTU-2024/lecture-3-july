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

const sports = ["Football", "Handboll", "Basketball", "Tennis"];
// console.log(sports);

// console.log(sports[0]); // "Football"
// sports[0] = "Soccer";
// console.log(sports[0]); // "Soccer"

// sports.push("Hockey"); // Add the new element to the end of the array.
// console.log(sports);

// const removedElement = sports.pop(); // Remove the last element from the array.
// console.log(sports);
// console.log(removedElement);

// console.log(sports.length);

// ########## Array Methods ##########

// sports.forEach(function (element) {
//   console.log(element);
// });

// const doesSoccerExist = sports.includes("Soccer");
// console.log(doesSoccerExist);

// const indexOfTennis = sports.indexOf("Tennis");
// console.log(indexOfTennis);

// const fewSports = sports.slice(1, 6);
// console.log(fewSports);

// console.log(sports);
// const deletedElements = sports.splice(2, 1, "Curling");
// console.log(sports);

// const numbers = [1, 2, 3, 4, 5];
// const numbersDoubled = numbers.map(function (number) {
//   if (number === 4) {
//     return number;
//   }

//   return number * 2;
// });

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(numbersDoubled); // [2, 3, 6, 4, 10]

// const numbers = [1, 23, 55, 62, 34, 99];

const filteredNumbers = numbers.filter(function (number) {
  if (number > 50) {
    return false;
  }

  return true;
});

console.log(filteredNumbers);
