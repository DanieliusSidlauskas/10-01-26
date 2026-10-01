let egzaminai = {
    pazymiai: {
        matematika: 8,
        lietuviu: 6,
        anglu: 9,
        fizika: 3,
        istorija: 10
    },

    // 1 metodas – teigiami pažymiai ir jų vidurkis
    teigiamuVidurkis: function() {
        let teigiami = Object.values(this.pazymiai)
            .filter(pazymys => pazymys >= 4);

        let suma = teigiami.reduce((a, b) => a + b, 0);

        return suma / teigiami.length;
    },

    // 2 metodas – geriausiai įvertinto dalyko pavadinimas
    geriausiasDalykas: function() {
        let dalykai = Object.entries(this.pazymiai);

        let geriausias = dalykai.reduce((a, b) => {
            return b[1] > a[1] ? b : a;
        });

        return geriausias[0];
    }
};

console.log("Teigiamų pažymių vidurkis:", egzaminai.teigiamuVidurkis());
console.log("Geriausiai įvertintas dalykas:", egzaminai.geriausiasDalykas());