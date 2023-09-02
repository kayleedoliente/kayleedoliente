let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let intervalId; // Store the interval ID

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";

}

function nextSlide() {
  slides[slideIndex].style.display = 'none';
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = 'block';
  intervalId = setInterval(nextSlide, 10000);
}

function prevSlide() {
  slides[slideIndex].style.display = 'none';
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].style.display = 'block';
}


nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Show the first slide initially
showSlide(slideIndex);

// Automatically advance to the next slide every 6 seconds
intervalId = setInterval(nextSlide, 10000);
