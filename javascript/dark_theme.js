const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

// Встановлюємо тему на основі збереженого значення
document.documentElement.setAttribute('data-bs-theme', currentTheme);

// Перемикаємо тему при кліку на кнопку
themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-bs-theme');
  if (theme === 'light') {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
