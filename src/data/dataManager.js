export const getJournalEntry = () => {

    return fetch("http://localhost:8088/entry")
    .then(response => response.json())
    .then(parsedResponse => {
    //     postEntries = parsedResponse
    return parsedResponse
})
};

