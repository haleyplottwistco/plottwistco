let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 7000); // Change every 7 seconds
}

// Start the slideshow
document.addEventListener("DOMContentLoaded", showSlides);
