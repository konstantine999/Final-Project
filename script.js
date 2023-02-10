const burger = document.getElementById('burger')
const mobile = document.getElementById('mobile')
const closer = document.getElementById('closer')
burger.addEventListener('click', () => {
    mobile.classList.toggle('show')
    mobile.classList.toggle('hide')
})
closer.addEventListener('click', () => {
    mobile.classList.toggle('show')
    mobile.classList.toggle('hide')
})