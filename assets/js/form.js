let entries = JSON.parse(localStorage.getItem(`entries`)) || [];
const formInputs = document.getElementById(`formInputs`);
const linkUrl = "blog.html";
// const recentEntry = document.getElementById(`displayBlog`)
// const divEl = document.createElement(`div`)
// const headerEl = document.createElement(`h2`)
// const pEl = document.createElement(`p`)
// const smallHeaderEl = document.createElement(`h3`)

formInputs.addEventListener(`submit`, function(event) {
    event.preventDefault();
    const username = document.getElementById(`username`).value.trim();
    const title = document.getElementById(`title`).value.trim();
    const content = document.getElementById(`content`).value.trim();
    if (username=== "") {
        alert(`please fill out each field`)
        return
    }
    if (title=== "") {
        alert(`please fill out each field`)
        return
    }
    if (content=== "") {
        alert(`please fill out each field`)
        return
    }
    entries.push({username, title, content})
    localStorage.setItem(`entries`, JSON.stringify(entries));
    window.location.href = linkUrl
})

