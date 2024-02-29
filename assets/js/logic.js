const mode = document.getElementById(`modeToggle`);
const body = document.getElementById(`darkMode`)
const img = document.getElementById(`img`)
const msg = document.getElementById(`message`)
let brightness = localStorage.getItem( `brightness`)

function setBrightness() {
        body.id = brightness
    }
setBrightness()

// changes between light and dark mode
mode.addEventListener(`click`, function() {
    if (body.id === `darkMode`) {
        body.id = `lightMode`
        localStorage.setItem(`brightness`, body.id)
        mode.textContent = `☀️`
        img.src = "https://external-preview.redd.it/SAEdDI5TATyMnMfsLw9y-gGHz886i1WEGG1FDmnKPLg.jpg?auto=webp&s=0d55abe183e736152689a5761e2f4bb02f3a99df" 
        msg.textContent = `is this blog?`
    } else {
        body.id = `darkMode`
        mode.textContent = `🌙`
        localStorage.setItem(`brightness`, body.id)
        img.src = "https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/637cacc62bf87f5f23db79f0_Cyber-Corn-Woman.jpeg"
        msg.textContent = `sweet dreams, cone shaped friend`
    }
})

