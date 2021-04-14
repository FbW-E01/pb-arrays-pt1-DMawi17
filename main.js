// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = [`Paris`, `London`, `Valletta`, `Prague`, `Rome`];
console.log(euroCities);

myCity = euroCities[1];
console.log(`The second item is: ${myCity}.`);

// Change the first item in the array to "Berlin".
euroCities[0] = `Berlin`;
console.log(euroCities);

// Print the length of the array "euroCities".
console.log(`The length of the array is: ${euroCities.length}.`);

// Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);

// Use an array method to add "Budapest" to the euroCities array.
euroCities.push(`Budapest`);
console.log(euroCities);

// Bonus: Remove the second and third items from the euroCities array.
euroCities.splice(1, 2);
console.log(euroCities);

// Create another variable named asianCities and assign an array of at least 5 cities to the variable.
let asianCities = [`Beijing`, `Taipei`, `Jakarta`, `Seoul`, `Mumbai`];
console.log(asianCities);

// Bonus: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
myFevCities = asianCities.slice(1, 4);
console.log(myFevCities);

// Bonus: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).
worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// Reverse the order of worldCities.
worldCities.reverse();
console.log(worldCities);

// Bonus: Replace the 3rd item in the array of worldCities with "Toronto"
worldCities[2] = `Toronto`;
console.log(worldCities);
// Bonus: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// Bonus Write a program to join all elements of the result (worldCities) into a string. Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"]; Expected Outputs: "Berlin , London, Bangkok, Phnom Penh" "Berlin+London+Bangkok+Phnom Penh"
console.log(worldCities.join(`+`));

// Bonus

// Write a program to reverse the string: "Hello World".
let hi = `Hello World`;
helloHi = [...hi]; // Used a spread operator to turn the string to an array
helloHi.reverse();

// Print the results to the console.
console.log(helloHi);

// Make an array of your siblings' names or your favorite movie characters' names.
const siblings = [`Cadabra`, `Bando`];

// Make an array of your parents' names.
const parents = [`Headie`, `Mizormac`];

// Combine these two arrays.
family = parents.concat(siblings);
console.log(family);

// Add your pets' names.
family.push(`natty`);
console.log(family);

// Reverse the order of the array.
family.reverse();
console.log(family);

// Access one of your parents' names.
console.log(family[4]);

// Update the name of one of your parents.
family[3] = family.slice(3).join(` `);
console.log(family);
