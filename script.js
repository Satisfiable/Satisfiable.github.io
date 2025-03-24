history.scrollRestoration = "manual";
window.onload = () => {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  const loading_page_title = document.querySelector(".splash-screen-title");
  const loading_page = document.querySelector(".splash-screen");

  loading_page.style.animationPlayState = "paused";

  document.body.style.overflowY = "hidden";

  loading_page_title.addEventListener("animationend", () => {
    loading_page.style.animationPlayState = "running";
    document.documentElement.style.overflowY = "auto";
  });
});

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
  hex = hex.replace(/\s+/g, "");
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
    img.crossOrigin = "anonymous";

    img.onload = function () {
      const canvas = document.getElementById("sigCanvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

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

document.addEventListener("DOMContentLoaded", sig_encryption);

const prevButton = document.querySelector(
  ".slider-side-controls button:first-child"
);
const nextButton = document.querySelector(
  ".slider-side-controls button:last-child"
);

const slides = document.querySelectorAll('input[name="slider"]');
const sliderImgs = document.querySelector("#slider-imgs");
let currentSlide = 0;
let autoSlideInterval;

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].checked = true;
  resetAutoSlide();
}

function nextSlide() {
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
  let currentSlide = 0;
  let autoSlideInterval;

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].checked = true;
    resetAutoSlide();
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].checked = true;
    resetAutoSlide();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  startAutoSlide();

  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].checked = true;
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

startAutoSlide();
