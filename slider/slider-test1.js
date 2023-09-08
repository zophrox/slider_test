let currentIndex = 1;

function setSlides(x) {
  displaySlides((currentIndex += x));
}

function displaySlides(num) {
  let slides = document.getElementsByClassName("imageSlides");

  if (num > slides.length) {
    currentIndex = 1;
  }
  if (num < 1) {
    currentIndex = slides.length;
  }
  for (let x = 0; x < slides.length; x++) {
    slides[x].style.display = "none";
  }

  slides[currentIndex - 1].style.display = "block";
  console.log(currentIndex);
}
displaySlides(currentIndex);
