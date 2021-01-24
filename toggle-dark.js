const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
const body = document.body
window.onload = setDataTheme = () => {
    if (prefersDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark')
        console.log("SET TO " + document.documentElement.getAttribute('data-theme'))
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        console.log("SET TO " + document.documentElement.getAttribute('data-theme'))
    }
}

const btn = document.querySelector(".btn-toggle-dark")

// Handle toggle via click
btn.addEventListener("click", () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        // body.classList.toggle("light-mode")
        document.documentElement.setAttribute('data-theme', 'light')
        console.log("SET TO " + document.documentElement.getAttribute('data-theme'))
    } else {
        // body.classList.toggle("dark-mode")
        document.documentElement.setAttribute('data-theme', 'dark')
        console.log("SET TO " + document.documentElement.getAttribute('data-theme'))
    }
})