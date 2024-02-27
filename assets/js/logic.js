const mode = document.getElementById(`modeToggle`);
const body = document.getElementById(`darkMode`)
const img = document.getElementById(`img`)
const msg = document.getElementById(`message`)

// add local storage for mode toggle

mode.addEventListener(`click`, function() {
    // console.log(`click`)
    if (body.id === `darkMode`) {
        body.id = `lightMode`
        mode.textContent = `🌙`
        img.src = "https://external-preview.redd.it/SAEdDI5TATyMnMfsLw9y-gGHz886i1WEGG1FDmnKPLg.jpg?auto=webp&s=0d55abe183e736152689a5761e2f4bb02f3a99df" 
        msg.textContent = `is this blog?`
    } else {
        body.id = `darkMode`
        mode.textContent = `☀️`
        img.src = "https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/637cacc62bf87f5f23db79f0_Cyber-Corn-Woman.jpeg"
        msg.textContent = `sweet dreams, cone shaped friend`
    }
})

