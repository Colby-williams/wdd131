const themeSelector = document.querySelector(".theme-selector");
const log = document.querySelector(".logo");

function changeTheme() {
    const selectedTheme = themeSelector.value;
    if (selectedTheme === "dark") {
        document.body.classList.add("dark");
        log.src = "byui-logo_white.png";
    } else {
        document.body.classList.remove("dark")
        log.src = "blue-logo.webp";
    }
}

themeSelector.addEventListener("change", changeTheme);