const senha = document.querySelector('#senha')
const email = document.querySelector('#senha')
const btn = document.querySelector('#form_button')
const iconBackground = document.querySelector('#iconBackground')

const icons = [
    { element: document.querySelector('#icon1'), image: 'img/Aisha.png' },
    { element: document.querySelector('#icon2'), image: 'img/Elaine.png' },
    { element: document.querySelector('#icon3'), image: 'img/Lena.png' },
    { element: document.querySelector('#icon4'), image: 'img/Nephis.png' },
    { element: document.querySelector('#icon5'), image: 'img/Amy.png' }
]

icons.forEach(icon =>{
    icon.element.addEventListener('mouseenter', () => {
        iconBackground.src = icon.image
    })
})

