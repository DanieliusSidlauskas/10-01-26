let pazymiai = [2, 5, 8, 3, 10, 4, 6, 1, 7];

// Atrenkame teigiamus pažymius
let teigiami = pazymiai.filter(pazymys => pazymys >= 4);

// Apskaičiuojame jų vidurkį
let suma = teigiami.reduce((a, b) => a + b, 0);
let vidurkis = suma / teigiami.length;

// Randame didžiausią pažymį
let didziausias = Math.max(...pazymiai);

console.log("Teigiami pažymiai:", teigiami);
console.log("Teigiamų pažymių vidurkis:", vidurkis);
console.log("Didžiausias pažymys:", didziausias);