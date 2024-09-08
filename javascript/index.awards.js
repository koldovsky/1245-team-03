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
