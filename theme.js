const toggleButton = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

// 1. Logic is flipped: Default is Dark unless 'light' is stored or preferred
if (storedTheme === 'light' || (!storedTheme && prefersLight)) {
  document.documentElement.setAttribute('data-theme', 'light');
  toggleButton.textContent = 'Dark'; // In light mode, offer Dark
} else {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleButton.textContent = 'Light'; // In dark mode, offer Light
}

// 2. Handle button click
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // If current is light, go dark. If dark (or null), go light.
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  toggleButton.textContent = newTheme === 'dark' ? 'Light' : 'Dark';
});