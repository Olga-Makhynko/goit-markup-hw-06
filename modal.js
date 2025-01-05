// Отримуємо елементи
const heroBtn = document.getElementById('hero-btn');
const modalBackdrop = document.querySelector('.backdrop');
const modalCloseBtn = document.getElementById('close-btn');

// Функція для відкривання модального вікна
const openModal = () => {
  modalBackdrop.classList.add('is-open');
};

// Функція для закривання модального вікна
const closeModal = () => {
  modalBackdrop.classList.remove('is-open');
};

// Додаємо обробники подій
heroBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);

// Закривання модального вікна при кліку поза його межами
modalBackdrop.addEventListener('click', (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});
