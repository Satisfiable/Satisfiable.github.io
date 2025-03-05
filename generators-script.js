var navigation = document.querySelector("#navigation");
window.addEventListener("scroll", scrollFunction);

var generator_selectors = document.querySelectorAll(".generator-selector");

if (window.innerWidth <= 575) {
  var preliminary_navigation_height = getComputedStyle(navigation).height;
  generator_selectors.forEach((selector) => {
    selector.style.top = preliminary_navigation_height;
  });
}

function scrollFunction() {
  generator_selectors.forEach((selector) => {
    const generatorDisplay = getComputedStyle(selector).display;

    if (window.scrollY > 50) {
      navigation.classList.add("active");

      if (generatorDisplay === "grid") {
        const navigationHeight = getComputedStyle(navigation).height;
        selector.style.top = navigationHeight;
        selector.style.background = "rgba(0, 0, 0, 0.85)";
      }
    } else {
      navigation.classList.remove("active");

      if (generatorDisplay === "grid") {
        const navigationHeight = getComputedStyle(navigation).height;
        selector.style.top = navigationHeight;
        selector.style.background = "transparent";
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("generator-selector-button")
    .addEventListener("click", function () {
      generator_selectors.forEach((selector) => {
        if (getComputedStyle(selector).display === "none") {
          selector.style.display = "grid";
          document.querySelector("main").style.marginTop = "10rem";

          if (window.scrollY > 50) {
            selector.style.background = "rgba(0, 0, 0, 0.85)";
          } else {
            selector.style.background = "#090c1b";
          }
        } else {
          selector.style.display = "none";
          document.querySelector("main").style.marginTop = "7rem";
        }
      });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".generator-selector a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = e.target.dataset.target;
      const targetElement = document.getElementById(targetId);

      // Eğer tıklanan öğe zaten görünüyorsa çık
      if (getComputedStyle(targetElement).display === "grid") return;

      // Tüm generator öğelerini gizle
      document.querySelectorAll(".generators").forEach((generator) => {
        generator.style.display = "none";
      });

      // Seçilen öğeyi göster
      targetElement.style.display = "grid";
    });
  });
});

var navigation_premiere = document.getElementById("navigation-premiere");

var side_navigation = document.getElementById("side-navigation");

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("sidebar-button")
    .addEventListener("click", function () {
      navigation_premiere.style.display = "none";

      side_navigation.style.display = "flex";

      document.getElementById("fallback").style.display = "inline-block";

      document.body.style.overflow = "hidden";

      navigation.style.padding = "0";

      navigation.style.height = "100%";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("fallback").addEventListener("click", function () {
    navigation_premiere.style.display = "flex";
    side_navigation.style.display = "none";
    document.getElementById("fallback").style.display = "none";
    document.body.style.overflow = "auto";
    navigation.style.padding = "0.7rem 0.7rem";
    navigation.style.height = "auto";
  });
});
