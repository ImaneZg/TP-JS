const settings = { theme: null };
console.log(settings.theme ?? "light"); // light

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email); // x@y.com
console.log(user2.address?.city);  // undefined
