// Move the code that deals with getting the data into this file.

const API = {
    getDestinations: () => {
        return fetch("http://localhost:8088/destinations")
            .then(response => response.json());
    },
    saveDescription: (singleEntry) => {
        return fetch("http://localhost:8088/entries",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(singleEntry)

            })
    },
    getEntries: () => {
        return fetch("http://localhost:8088/entries")
            .then(response => response.json());
    }
}



export default API