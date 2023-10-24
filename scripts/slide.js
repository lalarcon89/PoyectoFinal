function autoChangeSlide() {
    const currentSlide = document.querySelector('input[name="slide"]:checked');
    const slides = document.querySelectorAll('input[name="slide"]');
    const index = Array.from(slides).indexOf(currentSlide);
    const nextIndex = (index + 1) % slides.length;
    slides[nextIndex].click();
}

setInterval(autoChangeSlide, 5000);