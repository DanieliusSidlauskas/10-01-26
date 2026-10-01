let mokinys = {

    pazymiai: [3, 8, 5, 2, 10, 4, 7, 6, 3, 9],

    // Metodas atrinkti teigiamus pažymius
    gautiTeigiamus: function() {

        let teigiami = [];

        for (let i = 0; i < this.pazymiai.length; i++) {

            if (this.pazymiai[i] >= 4) {
                teigiami.push(this.pazymiai[i]);
            }
        }

        return teigiami;
    },

    // Metodas apskaičiuoti teigiamų pažymių vidurkį
    skaiciuotiVidurki: function() {

        let teigiami = this.gautiTeigiamus();

        let suma = 0;

        for (let i = 0; i < teigiami.length; i++) {
            suma = suma + teigiami[i];
        }

        return suma / teigiami.length;
    },

    // Metodas rasti didžiausią pažymį
    rastiDidziausia: function() {

        let teigiami = this.gautiTeigiamus();

        let didziausias = teigiami[0];

        for (let i = 1; i < teigiami.length; i++) {

            if (teigiami[i] > didziausias) {
                didziausias = teigiami[i];
            }
        }

        return didziausias;
    }
};


// Išvedame rezultatus
console.log("Visi pažymiai:", mokinys.pazymiai);
console.log("Teigiami pažymiai:", mokinys.gautiTeigiamus());
console.log("Teigiamų pažymių vidurkis:", mokinys.skaiciuotiVidurki());
console.log("Didžiausias pažymys:", mokinys.rastiDidziausia());