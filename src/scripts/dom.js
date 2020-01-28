import htmlConstructor from "./entryComponent.js"

// Move the code that is responsible for modifying the DOM into this file.

const injectDom = {
    addCardToDom(arrayOfCards) {
        const cardContainer = document.querySelector("#card-container");
        cardContainer.innerHTML = "";
        arrayOfCards.forEach(card => {
            cardContainer.innerHTML += htmlConstructor.cardHtml(card)
        });
    },
    addEntryToDom(arrayOfEntries) {
        const entryContainer = document.querySelector("#entry-container");
        entryContainer.innerHTML = "";
        arrayOfEntries.forEach(cardEntry => {
            entryContainer.innerHTML += htmlConstructor.htmlEntries(cardEntry)
        });
    }


}



export default injectDom