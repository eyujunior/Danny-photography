const headerContainer = document.querySelector(".header-container");
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 20) {
    headerContainer.classList.add('light');
  } else {
    headerContainer.classList.remove('light');
  }
});
