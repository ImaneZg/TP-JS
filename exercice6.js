const nums = [1, 2, 3, 4, 5];

// Multiplie chaque nombre par 2
console.log(nums.map(n => n * 2));

// Garde seulement les nombres pairs
console.log(nums.filter(n => n % 2 === 0));

// Calcule la somme totale
console.log(nums.reduce((sum, n) => sum + n, 0));