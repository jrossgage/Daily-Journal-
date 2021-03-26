import { EntryListComponent } from "./JournalEntryList.js"
import { getJournalEntry } from "../src/data/dataManager.js"
import { useJournalEntries } from "../src/data/dataManager.js"

//Displaying the entries on the dom
const showJournalEntries = () => {
  const entryElement = document.querySelector("#entryLog")
  getJournalEntry()
  .then(() => {
    const entries = useJournalEntries()
    entryElement.innerHTML = EntryListComponent(entries)
   })
}

showJournalEntries()



//storing a location (the main) on the DOM in a variable.
const applicationElement = document.querySelector(".journalMain")

//applying an event to the mood drop down list. 
applicationElement.addEventListener("change", event => {
  if (event.target.id === "mood") {
    const moodValue = (event.target.value)
    console.log(`Do you feel ${moodValue}`)
    showFilteredMoodPosts(moodValue);
  }          //attempting to call a filtered list of posts.
})
//function setting the filter. Needs usePostCollection import. usePostCollection will preserve state of data. Should be put into Data Manager?
const showFilteredMoodPosts = (moodValue) => {
const filteredMood = usePostCollection().filter(singlePost =>{
  if (singlePost.mood === moodValue) {
    return singlePost
  }
})
 }

//Delete Button

