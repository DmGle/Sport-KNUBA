document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlide = carouselContainer.querySelector('.flex-news-list');
    const slides = carouselSlide.querySelectorAll('.flex-news-item');
    const prevArrow = carouselContainer.querySelector('.prev-arrow');
    const nextArrow = carouselContainer.querySelector('.next-arrow');
  
    let visibleSlides = 4;
    let currentIndex = 0;
  
    function updateVisibleSlides() {
        if (window.innerWidth <= 320) {
            visibleSlides = 1;
        } else {
            visibleSlides = 4;
        }
    }
  
    function showSlides(startIndex) {
        updateVisibleSlides();
        for (let i = 0; i < slides.length; i++) {
            if (i >= startIndex && i < startIndex + visibleSlides) {
                slides[i].style.display = 'flex';
            } else {
                slides[i].style.display = 'none';
            }
        }
        if (currentIndex === 0) {
            prevArrow.disabled = true;
            nextArrow.disabled = false;
        } else if (currentIndex >= slides.length - visibleSlides) {
            prevArrow.disabled = false;
            nextArrow.disabled = true;
        } else {
            prevArrow.disabled = false;
            nextArrow.disabled = false;
        }
    }
  
    function nextSlides() {
        currentIndex = (currentIndex + 1) % slides.length;
        if (currentIndex > slides.length - visibleSlides) {
            currentIndex = slides.length - visibleSlides;
        }
        showSlides(currentIndex);
    }
  
    function prevSlides() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        showSlides(currentIndex);
    }
  
    prevArrow.addEventListener('click', prevSlides);
    nextArrow.addEventListener('click', nextSlides);
  
    updateVisibleSlides();
    showSlides(currentIndex);
  
    window.addEventListener('resize', function() {
        showSlides(currentIndex);
    });
  });