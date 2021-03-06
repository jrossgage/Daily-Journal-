/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. No longer utilized.
// const journal = [
//     {
//         id: 1,
//         date: "07/24/2025",
//         concept: "HTML & CSS",
//         entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//         mood: "Ok"
//     },
//     {
//         id: 2,
//         date: "07/25/2025",
//         concept: "HTML & CSS",
//         entry: "We did things in HTML and CSS.",
//         mood: "Content"
//     },
//     {
//         id: 3,
//         date: "07/26/2025",
//         concept: "Complex Flexbox",
//         entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
//         mood: "Sad"
//     }

// ]

// /*
//     You export a function that provides a version of the
//     raw data in the format that you want
// */
// export const getJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }