const toggle = document.querySelector('.theme-toggle');
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');

const applyTheme = (theme) => {
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark');
    toggle.textContent = 'Light mode';
  } else {
    root.removeAttribute('data-theme');
    toggle.textContent = 'Dark mode';
  }
};

const getPreferredTheme = () => {
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

applyTheme(getPreferredTheme());

if (toggle) {
  toggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  });
}
