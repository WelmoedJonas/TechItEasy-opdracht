// OPDRACHT 3 //

//--3a //

//---PSEUDO-CODE---
// 1. Declareer een variabele waarin de nieuwe array wordt opgeslagen (tvBrands).
// 2. Schrijf achter deze variabele de code voor map-methode.
// 3. Geef de map-methode als parameter TVobject mee.
// 4. Schrijf de return functie zo dat bij elke iteratie de merknaam van het TVobject wordt teruggegeven (TVobject.brand).
// 5. Maak een <ul> in het html-bestand, geef deze een id mee.
// 6. Declareer een variabele waarin de verwijzing naar het html-bestand op kan worden geslagen (getElementById).
// 7. Gebruik textContent om in het javascript bestand te verwijzen naar de desbetreffende id.

// const listTvBrands = document.getElementById("brand")
//
// const tvBrands = inventory.map((TVobject) => {
//     return TVobject.brand
// });
//
// console.log(tvBrands);
// listTvBrands.textContent = tvBrands;

//--3b //

const listTvBrands = document.getElementById("brand")

function getTvBrands (TVobject) {
    return inventory.map(() => {
        return TVobject.brand
    });
}

getTvBrands()



