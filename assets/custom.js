document.addEventListener('DOMContentLoaded', () => {
  // Exibe todos os produtos - Subheader
  const buttonShowProducts = document.getElementById('button-show-products');
  const menu = document.getElementById('custom-subheader__list');

  console.log(buttonShowProducts)
  let timeout;

  function showMenu() {
    clearTimeout(timeout);
    menu.classList.remove('is-hidden');
  }

  function hideMenu() {
    timeout = setTimeout(() => menu.classList.add('is-hidden'), 200);
  }

  buttonShowProducts.addEventListener('mouseenter', showMenu);
  buttonShowProducts.addEventListener('mouseleave', hideMenu);

  menu.addEventListener('mouseenter', showMenu);
  menu.addEventListener('mouseleave', hideMenu);

  // Menu mobile - Subheader
  const openMenuButton = document.getElementById('button-open-menu');
  const navMobile = document.querySelector('.custom-nav-mobile');
  const closeMenuButton = navMobile.querySelector('.item-menu'); 

  openMenuButton.addEventListener('click', () => navMobile.classList.add('active'));
  closeMenuButton.addEventListener('click', () => navMobile.classList.remove('active'));

  const items = document.querySelectorAll('li.grid__item');

  if (items.length > 0) {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    randomItem.style.padding = '0 8px'; 
  }

  // Slide
  new Swiper('.featured-slide', {
    slidesPerView: 4,
    spaceBetween: 20,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 
      0: { slidesPerView: 2 }, 
      578: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1100: { slidesPerView: 4 },
    }
  });
});