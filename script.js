const root = document.documentElement;
const status = document.querySelector('#status');
const resetButton = document.querySelector('#reset');
const swatches = document.querySelectorAll('.swatch');

function setTheme(color, name) {
  document.body.style.backgroundColor = color;
  status.textContent = `Current theme: ${name}`;
}

swatches.forEach((swatch) => {
  swatch.addEventListener('click', () => {
    const color = swatch.dataset.color;
    const name = swatch.getAttribute('aria-label').replace(' theme', '').toLowerCase();
    setTheme(color, name);
  });
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '#111';
  status.textContent = 'Current theme: dark';
});

root.style.setProperty('color-scheme', 'dark');
