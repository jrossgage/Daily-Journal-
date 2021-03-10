/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
           <div>${entry.date}</div>
           <p>${entry.concept}</p>
           <p>${entry.entry}</p>
           <p>${entry.mood}</p>
        </section>
    `
}