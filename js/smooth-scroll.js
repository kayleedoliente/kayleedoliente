document.getElementById('scroll-to-carousel-wrapper').addEventListener('click', function () {
    document.querySelector('.carousel-wrapper').scrollIntoView({
        behavior: 'smooth'
    });
});
