import API from "./getData.js"
import injectDom from "./dom.js"



API.getDestinations()
    .then(data => {

        injectDom.addCardToDom(data)
        document.querySelectorAll(".submit-button").forEach(item => {
            item.addEventListener("click", (event) => {
                const id = event.target.id
                let dTitle = document.querySelector(`#title--${id}`).innerText
                let dInput = document.querySelector(`#textarea--${id}`).value

                const newEntry = {
                    title: dTitle,
                    diaryInput: dInput
                };
                API.saveDescription(newEntry)
                    .then(() => {
                        document.querySelector(`#textarea--${id}`).value = "";
                        API.getEntries()
                            .then(data => {
                                injectDom.addEntryToDom(data)
                            });
                    })
            })
        });
    });


API.getEntries()
    .then(data => {
        injectDom.addEntryToDom(data)
    });



// Function that clears the text area
// const clearField = (input) => {
//     input.value = " ";
// }