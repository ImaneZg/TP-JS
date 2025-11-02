const person = {
  name: "Sara",
  sayHello: function () {
    console.log("Bonjour " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Bonjour " + this.name);
  },
};

person.sayHello();
person.sayHelloArrow();

//*sayHelloArrow utilise une fonction fléchée, et les fonctions fléchées ne connaissent pas this donc undefined 
// s'affiche à la place du nom.