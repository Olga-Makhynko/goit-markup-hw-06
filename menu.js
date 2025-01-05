// Отримуємо кнопки та меню за їх id
const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('mobile-close-btn');

// Функція для відкривання меню
const openMenu = () => {
  mobileMenu.classList.add('is-open');
};

// Функція для закривання меню
const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
};

// Додаємо обробники подій
burgerBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
