const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});

p.then(result => console.log(result));
