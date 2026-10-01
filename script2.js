let egzaminai = {

    matematika: 8,
    lietuviu: 9,
    istorija: 6,
    biologija: 3,
    informatika: 10,

    // 1 metodas
    teigiamiPazymiai: function() {

        let suma = 0;
        let kiekis = 0;

        // Einame per visus objekto elementus
        for (let dalykas in this) {

            // Patikriname, ar tai yra skaičius
            if (typeof this[dalykas] === "number") {

                // Patikriname, ar pažymys teigiamas
                if (this[dalykas] >= 4) {
                    suma = suma + this[dalykas];
                    kiekis++;
                }
            }
        }

        // Apskaičiuojame vidurkį
        let vidurkis = suma / kiekis;

        return vidurkis;
    },

    // 2 metodas
    geriausiasDalykas: function() {

        let didziausias = -1;
        let dalykoPavadinimas = "";

        // Einame per visus objekto elementus
        for (let dalykas in this) {

            // Patikriname, ar reikšmė yra skaičius
            if (typeof this[dalykas] === "number") {

                // Jeigu randame didesnį pažymį
                if (this[dalykas] > didziausias) {

                    didziausias = this[dalykas];
                    dalykoPavadinimas = dalykas;
                }
            }
        }

        return dalykoPavadinimas;
    }
};

// Išvedame pirmojo metodo rezultatą
console.log("Teigiamų pažymių vidurkis:",
    egzaminai.teigiamiPazymiai()
);

// Išvedame antrojo metodo rezultatą
console.log("Geriausiai įvertintas dalykas:",
    egzaminai.geriausiasDalykas()
);