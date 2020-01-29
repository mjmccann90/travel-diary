// Card object constructor and invokes printToTheDom function

const htmlConstructor = {
    cardHtml: function (item) {

        return `<div class="locationCard">
                <div class="card">
                    <img class="card-img-to rounded"src=${item.img}>
                    <h5 id="title--${item.id}" class="text-center">${item.title}</h5>
                    <textarea id="textarea--${item.id}" class="input" data-title="${item.title}" rows="2" cols="20">${item.description}</textarea >
                    <button class="submit-button btn btn-light" id="${item.id}">Submit</button >
                <div>
        </div >`
    },
    htmlEntries: function (item) {
        return `<div class ="output card bg-light mb-3" style="max-width: 18rem;">
         <h3 class="card-title">${item.title}</h3>
         <p class="card-text">${item.diaryInput}</p>
         </div>`
    }
}

export default htmlConstructor