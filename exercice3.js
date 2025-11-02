function sayHello(name) {
  return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour ${name}`;
console.log(sayHello("Alice")); 
console.log(sayHelloArrow("Bob"));