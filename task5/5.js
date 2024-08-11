const bookItems = document.querySelectorAll('.book');

bookItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Знімаємо виділення з усіх книг
    bookItems.forEach((book) => book.classList.remove('selected'));
    // Додаємо виділення для обраної книги
    item.classList.add('selected');
  });
});
