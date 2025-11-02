const user = { id: 1, name: "Ali", city: "Rabat" };

// Déstructuration
const { name, city } = user;
console.log(`${name} habite à ${city}`);

// Renommage
const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);
