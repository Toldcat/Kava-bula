//Navbar icon click listener in phone (<600px) mode
const icon = document.querySelector('.navbar__logo')

const handleLogo = (e) => {
  if (window.outerWidth < 600) {
    window.location.href = '/#contact'
  }
}

icon.addEventListener('click', handleLogo)

//COMMENT SECTION OWL CAROUSEL
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    mouseDrag: false,
    autoplayTimeout: 8000
  })
});