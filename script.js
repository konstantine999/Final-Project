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

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      100: {
        spaceBetween: 10,
      },
      1024: {
        spaceBetween: 30,
      }
    }
  });