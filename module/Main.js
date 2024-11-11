import { Display } from './Display.js';
import { BasicCalculator } from './BasicCalculator.js';
import { ButtonHandler } from './ButtonHandler.js';
import { Theme } from './Theme.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi objek
  const display = new Display('screen');
  const calculator = new BasicCalculator();
  const buttonHandler = new ButtonHandler(calculator, display);
  const theme = new Theme();

  // Menambahkan tombol untuk mengganti tema
  const themeButton = document.createElement('button');
  themeButton.textContent = 'Toggle Theme';
  themeButton.addEventListener('click', () => theme.toggleTheme());
  document.getElementById('calculator-container').appendChild(themeButton);
});
