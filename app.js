function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses()

      slide.classList.add('active')
    })
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidesPlugin()



function myFunction() {
  var x = 1;
  if (true) {
    var x = 2; // переназначение переменной x
    console.log(x); // 2
  }
  console.log(x); // 2
}
