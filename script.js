// Sukuriame pažymių masyvą
let pazymiai = [3, 8, 5, 2, 10, 4, 7, 6, 3, 9];

// Sukuriame tuščią masyvą teigiamiems pažymiams
let teigiami = [];

// Pereiname per visus pažymius
for (let i = 0; i < pazymiai.length; i++) {

    // Tikriname, ar pažymys yra 4 arba didesnis
    if (pazymiai[i] >= 4) {

        // Įdedame teigiamą pažymį į masyvą
        teigiami.push(pazymiai[i]);
    }
}

// Skaičiuojame teigiamų pažymių sumą
let suma = 0;

for (let i = 0; i < teigiami.length; i++) {
    suma = suma + teigiami[i];
}

// Apskaičiuojame vidurkį
let vidurkis = suma / teigiami.length;

// Surandame didžiausią pažymį
let didziausias = teigiami[0];

for (let i = 1; i < teigiami.length; i++) {

    // Jeigu dabartinis pažymys didesnis už dabartinį didžiausią
    if (teigiami[i] > didziausias) {

        // Atnaujiname didžiausią pažymį
        didziausias = teigiami[i];
    }
}

// Išvedame rezultatus į konsolę
console.log("Visi pažymiai:", pazymiai);
console.log("Teigiami pažymiai:", teigiami);
console.log("Teigiamų pažymių vidurkis:", vidurkis);
console.log("Didžiausias pažymys:", didziausias);