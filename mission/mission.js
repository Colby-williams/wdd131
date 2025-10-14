const themeSelector = document.querySelector(".theme-selector");
const logo = document.querySelector(".logo");

function changeTheme() {
    const selectedTheme = themeSelector.value;
    if (selectedTheme === "dark") {
        document.body.classList.add("dark");
        logo.src = "byui-logo_white.png";
    } else {
        document.body.classList.remove("dark")
        logo.src = "blue-logo.webp";
    }
}

themeSelector.addEventListener("change", changeTheme);