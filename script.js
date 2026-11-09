// theme toggle: remembers the choice, otherwise follows the system setting
const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme() {
  return root.dataset.theme || (systemDark.matches ? 'dark' : 'light');
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  toggle.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

try {
  const saved = localStorage.getItem('theme');
  if (saved) root.dataset.theme = saved;
} catch (e) { /* storage can be blocked */ }

applyTheme(currentTheme());

toggle.addEventListener('click', () => {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
});
