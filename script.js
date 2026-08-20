const savedTheme = localStorage.getItem('themeState');
const myButton = document.getElementById('theme-toggle');

if (savedTheme === 'light') {
  document.body.classList.remove('dark-theme');
}

myButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('themeState', 'dark');
  } else {
    localStorage.setItem('themeState', 'light');
  }
});
