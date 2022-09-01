// OPDRACHT 2 //

//--2a //

//---PSEUDO-CODE---
// 1. Declareer een overschrijfbare variabele (let) waarin het totaal verkochte tv's (totalSold) wordt opgeslagen.
// 2. Declareer een for-loop die door de gehele array loopt (i < inventory.length). Zorg ervoor dat bij elke loop de sold waarde wordt toevegoegd aan totalSold.
// 3. console.log(totalSold).
// 4. Maak in het html-bestand plek waar de uitkomst van de for-loop weergeven kan worden, geef deze plek een id mee.
// 5. Declareer een variabele waarin je de verwijzing naar het HTML-bestand kan opslaan.
// 6. Zet de verwijzing in deze variabele met de getDocumentById.
// 7. Zorg ervoor dat totalSold zichtbaar wordt in de browser (textContent).

const soldTvs = document.getElementById("sold");

let totalSold = 0

for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold
}

console.log(totalSold);
soldTvs.textContent = totalSold

//--2b //

//---PSEUDO-CODE---
// 1. Maak een id selector in het css-bestand (#sold)
// 2. color: green.

// --2c //

//---PSEUDOCODE
// 1. Herhaal alle stappen van opdracht 2a, vervang 'sold' door 'bought'

const boughtTvs = document.getElementById("bought")

let totalBought = 0

for (let i = 0; i < inventory.length; i++) {
    totalBought += inventory[i].originalStock
}

console.log(totalBought);
boughtTvs.textContent = totalBought

// --2d //

//---PSEUDO-CODE---
// 1. Maak een id selector in het css-bestand (#bought)
// 2. color: blue.

// --2e //

//---PSEUDO-CODE---
// 1. Declareer een overschrijfbare variabele (let) waarin de voorraad (totalBought - totalSold) wordt opgeslagen.
// 2. console.log(inStock).
// 3. Maak in het html-bestand een plek waar de waarde van deze variabele kan worden opgeslagen.
// 4. Declareer een variabele waarin de verwijzing naar het html-bestand wordt opgeslagen (getElementById). Zet deze boven de geschreven code.
// 5. Schrijf onderaan de geschreven code de textContent zodat het getal zichtbaar wordt in de browser.
// 6. Maak het getal rood door middel van een id selector is CSS

const inStockTvs = document.getElementById("stock")

let inStock = totalBought - totalSold

console.log(inStock);

inStockTvs.textContent = inStock

