import createElement from './module/create-element.js';
import createKeyboardKey from './module/create-keyboard.js';
import {
  row1, row2, row3, row4, row5,
} from './module/keyboard.js';
import hoverRipple from './module/button-hover-ripple.js';

const app = document.querySelector('.app');
const appWrapper = createElement('section', 'app__wrapper');
const titleElement = createElement('h1', 'app__title', 'RSS Virtual Keyboard');
const textareaOut = createElement('textarea', 'app__out');
const keyboardWrapper = createElement('div', 'app__keyboard keyboard');
const textDescription = createElement('p', 'app__text', 'Клавиатура создана в операционной системе OsX');
const textLanguage = createElement('p', 'app__text', 'Для переключения языка комбинация: левыe cmd + space');

const rows = [row1, row2, row3, row4, row5];
keyboardWrapper.append(...rows.map((row) => createKeyboardKey(row)));

appWrapper.append(
  titleElement,
  textareaOut,
  keyboardWrapper,
  textDescription,
  textLanguage,
);

app.prepend(appWrapper);

document.addEventListener('click', (e) => {
  const targetItem = e.target;
  // Добавление эффекта нажатия на клавиатуру
  if (targetItem.closest('[data-ripple]')) {
    hoverRipple(targetItem, e);
  }
  // Добавление текста кликом по клавиатуре
  if (targetItem.closest('.key')) {
    const textAreaValue = document.querySelector('.app__out');

    if (targetItem.closest('._active').textContent.toLowerCase() === 'ctrl'
    || targetItem.closest('._active').textContent.toLowerCase() === 'alt'
    || targetItem.closest('._active').textContent.toLowerCase() === 'cmd') return;

    if (targetItem.closest('._active').textContent.toLowerCase() === 'shift') {
      textAreaValue.value += '----';
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'capslock') {
      textAreaValue.value += '====';
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'tab') {
      textAreaValue.value += '    ';
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'enter') {
      textAreaValue.value += '\n';
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'backspace') {
      textAreaValue.value = textAreaValue.value.substring(0, textAreaValue.value.length - 1);
    } else {
      textAreaValue.value += targetItem.closest('._active').textContent;
    }
  }
});
