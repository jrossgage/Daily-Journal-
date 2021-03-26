
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = (entries) => {
    // Use the journal entry data from the data module component
    let journalHTML = ""
    for (const entry of entries) {
        journalHTML += JournalEntryComponent(entry)
    }
    return journalHTML
}