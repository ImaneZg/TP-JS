const produits = [
  { nom: "Pain", prix: 3, expireLe: "2025-11-10" },
  { nom: "Fromage", prix: 15, expireLe: "2025-01-20" },
  { nom: "Beurre", prix: 12, expireLe: "2026-05-01" },
  { nom: "Eau", prix: 6, expireLe: "2027-09-12" },
];

const aujourdHui = new Date();

const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
const total = valides.reduce((s, p) => s + p.prix, 0);

console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
