const darkMode = document.querySelector(".dark-mode-btn")
const html = document.querySelector('html')

let mode = localStorage.getItem("mode")
console.log(mode)
if (!mode || mode == "light") {
    enableLight()
} else {
    enableDark()
}

darkMode.addEventListener("click", function () {
    if (html.classList.contains("dark")) {
        enableLight()
    } else {
        enableDark()
    }
})

function enableDark() {
    html.classList.add("dark")
    darkMode.innerHTML = '<i class="fa-solid fa-sun text-yellow_1"></i>'
    localStorage.setItem("mode", "dark")
}
function enableLight() {
    html.classList.remove("dark")
    darkMode.innerHTML = '<i class="fa-solid fa-moon text-dark_1"></i>'
    localStorage.setItem("mode", "light")
}
