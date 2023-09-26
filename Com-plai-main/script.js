document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;


    function showSlide() {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    }


    showSlide();


    setInterval(showSlide, 3000);
});
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach((slide) => {
            slide.style.opacity = '0';
        });
        slides[slideIndex].style.opacity = '1';

        dots.forEach((dot) => {
            dot.classList.remove('active-dot');
        });
        dots[slideIndex].classList.add('active-dot');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    showSlide(currentSlide);

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
});
document.addEventListener('DOMContentLoaded', function () {
    const conteudoPrincipal = document.querySelector('body');

    conteudoPrincipal.classList.add('show');
});
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    showSlide();

    document.addEventListener('click', function () {
        showSlide();
    });
});


