const swiper = new Swiper('.sample-slider', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 30,
        depth: 200,
        stretch: 30,
        modifier: 1,
        scale: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})