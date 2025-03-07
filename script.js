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

function transmutation(hex) {
  let text = "";
  hex = hex.replace(/\s+/g, ""); // Remove spaces
  for (let i = 0; i < hex.length; i += 2) {
    text += String.fromCharCode(parseInt(hex.substring(i, i + 2), 16));
  }
  return text;
}

async function sig_encryption() {
  try {
    const url = transmutation(
      "68747470733A2F2F7261772E67697468756275736572636F6E74656E742E636F6D2F5361746973666961626C652F61707072656E746973736167652F726566732F68656164732F6D61696E2F7369676E61747572652E706E67"
    );

    const img = new Image();
    img.crossOrigin = "anonymous"; // Fixes CORS issues

    img.onload = function () {
      const canvas = document.getElementById("sigCanvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);
    };

    img.onerror = function () {
      console.error("Please contact creator for further information!");
    };

    img.src = url;
  } catch (error) {
    console.error("Please contact creator for further information!", error);
  }
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", sig_encryption);

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
