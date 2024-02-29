const recentEntry = document.getElementById(`displayBlog`);
const backBtn = document.getElementById(`backBtn`);
const linkUrl = "index.html";
let entries = JSON.parse(localStorage.getItem(`entries`));


renderMessage()

// renders all saved messages from local storage to page
function renderMessage() {
    for (let i = 0; i < entries.length; i++) {
        const articleEl = document.createElement(`article`);
        const headerEl = document.createElement(`h2`);
        const pEl = document.createElement(`p`);
        const smallHeaderEl = document.createElement(`h3`);
        articleEl.appendChild(headerEl)
        headerEl.textContent = `Title: ${entries[i].title}`
        articleEl.appendChild(pEl)
        pEl.textContent = `${entries[i].content}`
        articleEl.appendChild(smallHeaderEl)
        smallHeaderEl.textContent = `Posted by: ${entries[i].username}`
        recentEntry.appendChild(articleEl);
    }
    
}


// adds back button functionality
backBtn.addEventListener (`click`, function() {
    console.log(`click`)
    localStorage.setItem(`entries`, JSON.stringify(entries))
    window.location.href = linkUrl
})