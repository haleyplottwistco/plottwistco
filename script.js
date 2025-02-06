let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = "1";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 7000); // Change slide every 7 seconds
}

// Function to select a specific slide when clicking a dot
function currentSlide(n) {
    slideIndex = n - 1; // Adjust index
    showSlides();
}

// Start the slideshow on page load
document.addEventListener("DOMContentLoaded", showSlides);
