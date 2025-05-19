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
  const closeMenuButton = navMobile.querySelector('.item-menu'); // Primeiro item é o botão de fechar

  openMenuButton.addEventListener('click', function () {
    navMobile.classList.add('active');
  });

  closeMenuButton.addEventListener('click', function () {
    navMobile.classList.remove('active');
  });

  // Seleciona todos os elementos que correspondem ao seletor
  const items = document.querySelectorAll('li.grid__item');

  if (items.length > 0) {
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomItem = items[randomIndex];
    randomItem.style.padding = '0 8px'; 
  }
});