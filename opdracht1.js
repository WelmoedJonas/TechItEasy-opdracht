// OPDRACHT 1 //

//--1a //

//---PSEUDO-CODE---
// 1. Declareer de variabele 'typeTV', waarin de nieuwe array wordt opgeslagen.
// 2. Schrijf achter deze variabele de code voor een map-methode.
// 3. Geef de map-methode de parameter 'detailsTV' mee. Deze parameter representeert steeds één object (= details van de tv).
// 4. Schrijf de return functie op zo'n manier dat er een array met alle tv-types wordt teruggegeven.
// 5. Declareer een console.log(typeTV).

const typeTV = inventory.map((TVobject) => {
    return TVobject.type;
});

console.log(typeTV);

//--1b //

//---PSEUDO-CODE---
// 1. Declareer de variabele 'outOfStock', waarin de nieuwe array wordt opgeslagen.
// 2. Schrijf achter deze variabele de code voor een filter methode, geef deze als parameter TVobject mee.
// 3. Declareer een if-statement die checkt of de desbetreffende tv is uitverkocht (originalStock === sold)
// 4. Schrijf een return functie die een object teruggeeft wanneer de vergelijking in het if-statement 'true' is.
// 5. Declareer een console.log(outOfStock).

const outOfStock = inventory.filter((TVobject) => {
    if (TVobject.sold === TVobject.originalStock) {
        return TVobject
    }
});

console.log(outOfStock);

//--1c //

//---PSEUDO-CODE---
// 1. Declareer de variabele 'includesAmbiLight', waarin de nieuwe array wordt opgeslagen.
// 2. Schrijf achter deze variabele de code voor de filter methode, geen deze als parameter TVobject mee.
// 3. Declareer een if-statement die checkt of de desbetreffende TV ambilight heeft (ambiLight === true).
// 4. Schrijf een return functie die alle objecten teruggeeft die voldoen aan het if-statement.
// 5. console.log(includesAmbiLight)

const includesAmbiLight = inventory.filter((TVobject) => {
    if (TVobject.options.ambiLight === true) {
        return TVobject
    }
});

console.log(includesAmbiLight);

//--1d //

//---PSEUDO-CODE---
// 1. Declareer de variabele 'sortPrices', waarin de nieuwe array wordt opgeslagen.
// 2. Schrijf achter deze variabele de code voor de sort methode, geef deze als parameter (a, b) mee.
// 3. Return a - b.
// 4. console.log(sortPrices).

const sortPrices = inventory.sort((a, b) => {
    return a.price - b.price

});

console.log(sortPrices);