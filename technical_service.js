var navigation = document.querySelector("#navigation");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 50) {
    navigation.classList.add("active");
  } else {
    navigation.classList.remove("active");
  }
}

// Get all accordion buttons
const acc = document.querySelectorAll(".accordion-button");

// Loop through all accordion buttons and add event listeners
acc.forEach((button) => {
  button.addEventListener("click", function () {
    // Close all other panels
    acc.forEach((otherButton) => {
      if (otherButton !== this) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.display = "none";
      }
    });

    // Toggle the clicked button's panel
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    // Toggle the display of the panel
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
