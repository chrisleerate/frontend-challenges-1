/*
  ************************************************************
  RAPID FIRE QUESTIONS
  Answer these as quickly as possible and let's move on to the next section!
  ************************************************************
*/

/*
  ************************************************************
  How would you check if the following variable is a boolean?
*/

let myVariable;
// answer here

/*
  ************************************************************
  What would be the result of 2 + 5 + "3"?
*/

let concatResult = 2 + 5 + "3"; // answer here

/*
  ************************************************************
  Assuming obj01 is an "empty" object in scope, what would the result of the code snippet be?
*/

let obj01 = {};
["zebra", "horse"].forEach(function (k) {
  obj01[k] = undefined;
});

// answer here

/*
  ************************************************************
  Please immutably create a copy of this object,
  but alter the toppings: add 'mushrooms' and remove 'jalapenos'
*/

let objectToImmutablyAlter = {
  dish: "pizza",
  crust: {
    type: "cauliflower",
  },
  toppings: ["pepperoni", "jalapenos", "onions"],
};
