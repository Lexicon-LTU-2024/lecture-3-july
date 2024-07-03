// ########## Let ##########

let firstName = "Niklas";

//..later in the code

firstName = "Dimitiris";
console.log(firstName); // "Dimitiris"

firstName = `Marcus`;
console.log(firstName); // "Marcus"

// We can always change type and value of a let variable.
firstName = true;
console.log(firstName);

// ########## Const ##########

const birthYear = 1990;

// ..later in the code

birthYear = 1995; // The browser won't allow it.
