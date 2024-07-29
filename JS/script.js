document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.image-slider .slides');
    const socialSlides = document.querySelector('.social-links .slides');
    const images = slides.querySelectorAll('img');
    const socialImages = socialSlides.querySelectorAll('img');
    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(${-index * 50}%)`;
        socialSlides.style.transform = `translateX(${-index * 50}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showSlide(currentIndex);
    }

    function addDragEvents(element, images) {
        element.addEventListener('mousedown', function (event) {
            event.preventDefault();
            const startX = event.pageX;
            let moveX;

            function onMouseMove(event) {
                moveX = event.pageX - startX;
            }

            function onMouseUp() {
                if (moveX > 50) {
                    prevSlide();
                } else if (moveX < -50) {
                    nextSlide();
                }
                element.removeEventListener('mousemove', onMouseMove);
                element.removeEventListener('mouseup', onMouseUp);
            }

            element.addEventListener('mousemove', onMouseMove);
            element.addEventListener('mouseup', onMouseUp);
        });
    }

    function autoSlide() {
        setInterval(nextSlide, 3000);
    }

    addDragEvents(slides, images);
    addDragEvents(socialSlides, socialImages);

    autoSlide();
});
