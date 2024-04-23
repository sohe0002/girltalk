document.addEventListener("DOMContentLoaded", function () {
  var fadeElements = document.querySelectorAll(".grid_1_1_1 img");

  function checkPosition() {
    for (var i = 0; i < fadeElements.length; i++) {
      var element = fadeElements[i];
      var positionFromTop = element.getBoundingClientRect().top;

      // Tjek om elementets top-position er inden for synlighedsområdet (i dette tilfælde 0 til vinduets højde)
      if (positionFromTop - window.innerHeight < 0) {
        element.classList.add("visible");
      } else {
        element.classList.remove("visible");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);

  checkPosition();
});
