const hamburger = document.getElementById('hamburger-icon')
const close = document.getElementById('close-icon')
const menuBtn = document.getElementById('menu-btn')
const nav = document.getElementById('nav')

const classes = ['hidden', 'show']
const icons = [hamburger, close]

const toggle = () => {
    classes.forEach((cl) => {
        nav.classList.toggle(cl)
    })
    icons.forEach(icon => {
        icon.classList.toggle('hidden')
    })
}

menuBtn.addEventListener('click', toggle)