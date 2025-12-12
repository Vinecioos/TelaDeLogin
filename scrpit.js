const icon1 = document.querySelector('#icon1')
const icon2 = document.querySelector('#icon2')
const icon3 = document.querySelector('#icon3')
const icon4 = document.querySelector('#icon4')
const icon5 = document.querySelector('#icon5')
const senha = document.querySelector('#senha')
const email = document.querySelector('#senha')
const btn = document.querySelector('#form_button')
const iconBackground = document.querySelector('#iconBackground')

icon1.addEventListener('mouseenter', () => {
    iconBackground.src = 'img/Aisha.png'
})
icon2.addEventListener('mouseenter', () => {
    iconBackground.src = 'img/Elaine.png'
})
icon3.addEventListener('mouseenter', () => {
    iconBackground.src = 'img/Lena.png'
})
icon4.addEventListener('mouseenter', () => {
    iconBackground.src = 'img/Nephis.png'
})
icon5.addEventListener('mouseenter', () => {
    iconBackground.src = 'img/Amy.png'
})