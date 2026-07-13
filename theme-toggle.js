const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');

const applyTheme = (theme, toggleButton) => {
  if (theme === 'dark') {
    root.dataset.theme = 'dark';
    if (toggleButton) toggleButton.textContent = 'Light mode';
  } else {
    delete root.dataset.theme;
    if (toggleButton) toggleButton.textContent = 'Dark mode';
  }
};

const getPreferredTheme = () => {
  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.theme-toggle');
  const theme = getPreferredTheme();
  applyTheme(theme, toggle);

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const currentTheme = root.dataset.theme === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, toggle);
    localStorage.setItem('theme', nextTheme);
  });
});
