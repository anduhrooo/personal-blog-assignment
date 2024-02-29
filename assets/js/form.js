let entries = JSON.parse(localStorage.getItem(`entries`)) || [];
const formInputs = document.getElementById(`formInputs`);
const linkUrl = "blog.html";

// adds an event listener to the submit button.
formInputs.addEventListener(`submit`, function(event) {
    event.preventDefault();
    const username = document.getElementById(`username`).value.trim();
    const title = document.getElementById(`title`).value.trim();
    const content = document.getElementById(`content`).value.trim();
    // if any field is left blank, the page returns an alert
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
    // pushes user input into an array
    entries.push({username, title, content})
    // stringifies and saves to local storage
    localStorage.setItem(`entries`, JSON.stringify(entries));
    // then sends user to blog page
    window.location.href = linkUrl
})

