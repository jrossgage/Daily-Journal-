export const moodEntry = (moodObj) => {
return `
<option id="mood" value="${moodObj.id}>${moodObj.name}</option>
`
}