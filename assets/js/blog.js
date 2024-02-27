const recentEntry = document.getElementById(`displayBlog`)
const divEl = document.createElement(`div`)
const headerEl = document.createElement(`h2`)
const pEl = document.createElement(`p`)
const smallHeaderEl = document.createElement(`h3`)
const backBtn = document.getElementById(`backBtn`)
const linkUrl = "index.html"

function renderMessage() {
    const lastBlog = JSON.parse(localStorage.getItem(`entry`))
    recentEntry.appendChild(divEl);
    divEl.appendChild(headerEl)
    headerEl.textContent = `Title: ${lastBlog.title}`
    divEl.appendChild(pEl)
    pEl.textContent = `${lastBlog.content}`
    divEl.appendChild(smallHeaderEl)
    smallHeaderEl.textContent = `Posted by: ${lastBlog.username}`
    
}

renderMessage()

backBtn.addEventListener (`click`, function() {
    console.log(`click`)
    window.location.href = linkUrl
})