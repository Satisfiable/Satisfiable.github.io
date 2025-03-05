/**
 * @author Berkay Yavuz Göcek
 * @email gocekberkayyavuz@gmail.com
 * @year 2025
 */
var navigation = document.querySelector("#navigation");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 50) {
    navigation.classList.add("active");
  } else {
    navigation.classList.remove("active");
  }
}

const prevButton = document.querySelector(
  ".slider-side-controls button:first-child"
);
const nextButton = document.querySelector(
  ".slider-side-controls button:last-child"
);

const slides = document.querySelectorAll('input[name="slider"]');
const sliderImgs = document.querySelector("#slider-imgs");
let currentSlide = 0; // Track the current slide
let autoSlideInterval; // To store the automatic slide interval

// Function to go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].checked = true;
  resetAutoSlide(); // Reset the auto slide timer
}

// Function to go to the next slide
function nextSlide() {
  /**
   * @author Berkay Yavuz Göcek
   * @email gocekberkayyavuz@gmail.com
   * @year 2025
   */
  var navigation = document.querySelector("#navigation");
  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.scrollY > 100) {
      navigation.classList.add("active");
    } else {
      navigation.classList.remove("active");
    }
  }

  const prevButton = document.querySelector(
    ".slider-side-controls button:first-child"
  );
  const nextButton = document.querySelector(
    ".slider-side-controls button:last-child"
  );

  const slides = document.querySelectorAll('input[name="slider"]');
  const sliderImgs = document.querySelector("#slider-imgs");
  let currentSlide = 0; // Track the current slide
  let autoSlideInterval; // To store the automatic slide interval

  // Function to go to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].checked = true;
    resetAutoSlide(); // Reset the auto slide timer
  }

  // Function to go to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].checked = true;
    resetAutoSlide(); // Reset the auto slide timer
  }

  // Function to reset auto sliding (stop and restart the interval)
  function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Clear the existing interval
    startAutoSlide(); // Restart the auto slide interval
  }

  // Function to start automatic slide show
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextSlide(); // Move to the next slide automatically
    }, 5000); // Change slide every 5 seconds (adjust this duration)
  }

  // Event listeners for prev/next buttons
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  // Start the automatic slide on page load
  startAutoSlide();

  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].checked = true;
  resetAutoSlide(); // Reset the auto slide timer
}

// Function to reset auto sliding (stop and restart the interval)
function resetAutoSlide() {
  clearInterval(autoSlideInterval); // Clear the existing interval
  startAutoSlide(); // Restart the auto slide interval
}

// Function to start automatic slide show
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide(); // Move to the next slide automatically
  }, 5000); // Change slide every 5 seconds (adjust this duration)
}

// Event listeners for prev/next buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Start the automatic slide on page load
startAutoSlide();
