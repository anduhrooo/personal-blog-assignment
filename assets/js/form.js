const mode = document.getElementById(`modeToggle`);
const body = document.getElementById(`darkMode`)

mode.addEventListener(`click`, function() {
    // console.log(`click`)
    if (body.id === `darkMode`) {
        body.id = `lightMode`
        mode.textContent = `🌙`
    } else {
        body.id = `darkMode`
        mode.textContent = `☀️`
    }
})