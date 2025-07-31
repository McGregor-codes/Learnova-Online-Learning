const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
  const isVisible = menu.getAttribute('data-visible');

  if (isVisible === 'false') {
    menu.setAttribute('data-visible', 'true');
    menuToggle.setAttribute('aria-expanded', 'true');
  } else {
    menu.setAttribute('data-visible', 'false');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});
