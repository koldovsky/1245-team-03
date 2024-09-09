// Відкрити модальне вікно при натисканні на елемент
document.querySelectorAll('.awards__item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');
        
        document.querySelector('.modal-title').textContent = title;
        document.querySelector('.modal-description').textContent = description;
        
        modal.style.display = 'flex';
    });
});

// Закрити модальне вікно при натисканні на хрестик
document.querySelector('.modal-close').addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
});

// Додатково: Закрити модальне вікно при натисканні за межами вікна
window.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
