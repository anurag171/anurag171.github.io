(function () {
  var root = document.documentElement;

  function label(theme) {
    return theme === 'dark' ? 'Light mode' : 'Dark mode';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.textContent = label(theme);
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // data-theme was already set pre-paint by the inline script in <head>;
    // this just syncs the button label and wires up the click handler.
    applyTheme(root.getAttribute('data-theme') || 'light');

    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        var next = current === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('theme', next); } catch (e) {}
        applyTheme(next);
      });
    });
  });
})();
