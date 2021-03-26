let journalEntry = []

export const useJournalEntries = () => {
    return [...journalEntry]
}
export const getJournalEntry = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => 
        response.json())
    .then(parsedResponse => {
        journalEntry = parsedResponse
})
};

// export const getUser = () => {

//     return fetch("http://localhost:8088/users")
//     .then(response => 
//         response.json())
//     .then(parsedResponse => {
//         journalUser = parsedResponse
// })
// };

// export const getMood = () => {

//     return fetch("http://localhost:8088/moods")
//     .then(response => 
//         response.json())
//     .then(parsedResponse => {
//         journalMood = parsedResponse
// })
// };

// export const getConcept = () => {

//     return fetch("http://localhost:8088/concepts")
//     .then(response => 
//         response.json())
//     .then(parsedResponse => {
//         journalEntry = parsedResponse
// })
// };



