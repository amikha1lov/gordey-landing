document.addEventListener("DOMContentLoaded", () => {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
});