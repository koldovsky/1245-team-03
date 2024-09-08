// Відкриття модального вікна
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

// Закриття модального вікна
document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('.modal').style.display = 'none';
});

// Закриття модального вікна при натисканні за його межами
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        document.querySelector('.modal').style.display = 'none';
    }
});
