const headerContainer = document.querySelector(".header-container");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 20) {
    headerContainer.classList.add('light');
  } else {
    headerContainer.classList.remove('light');
  }
});

new Glider(document.querySelector('.glider'), {
  slidesToShow: 2,
  draggable: true,
  dots: '#dots',
  arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
  }
});