import createElement from './module/create-element.js';
import createKeyboardKey from './module/create-keyboard.js';
import {
  row1, row2, row3, row4, row5,
} from './module/keyboard.js';
// import hoverRipple from './module/button-hover-ripple.js';
import toggleCapslock from './module/toggle-capslock.js';
import toggleShift from './module/toggle-shift.js';
import keyHover from './module/keydown-hover.js';

const app = document.querySelector('.app');
// Создание элементов проекта на странице
const appWrapper = createElement('section', 'app__wrapper');
const titleElement = createElement('h1', 'app__title', 'RSS Virtual Keyboard');
const textareaOut = createElement('textarea', 'app__out');
textareaOut.setAttribute('autofocus', '');
const keyboardWrapper = createElement('div', 'app__keyboard keyboard');
const textDescription = createElement('p', 'app__text', 'Keyboard created in operating system macOs');
const textLanguage = createElement('p', 'app__text', 'To switch the language combination: left cmd + space');

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

document.addEventListener('mousedown', (e) => {
  const targetItem = e.target;
  // Добавление эффекта нажатия на клавиатуру
  // if (targetItem.closest('[data-ripple]')) {
  //   hoverRipple(targetItem, e);
  // }
  // Добавление текста кликом по клавиатуре
  if (targetItem.closest('.key')) {
    const textAreaOut = document.querySelector('.app__out');

    if (targetItem.closest('._active').textContent.toLowerCase() === 'ctrl'
    || targetItem.closest('._active').textContent.toLowerCase() === 'alt'
    || targetItem.closest('._active').textContent.toLowerCase() === 'cmd') return;

    if (targetItem.closest('._active').textContent.toLowerCase() === 'shift') {
      toggleShift(targetItem);
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'capslock') {
      toggleCapslock(targetItem);
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'tab') {
      textAreaOut.value += '    ';
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'enter') {
      textAreaOut.value += '\n';
    } else if (targetItem.closest('._active').textContent.toLowerCase() === 'backspace') {
      textAreaOut.value = textAreaOut.value.substring(0, textAreaOut.value.length - 1);
    } else {
      textAreaOut.value += targetItem.closest('._active').textContent;
    }
  }
});

document.addEventListener('mouseup', (e) => {
  const targetItem = e.target;

  if (targetItem.closest('.key')) {
    if (targetItem.closest('._active').textContent.toLowerCase() === 'shift') {
      toggleShift(targetItem);
    }
  }
});

document.addEventListener('keydown', (e) => {
  keyHover(e);
});

document.addEventListener('keyup', (e) => {
  keyHover(e);
});
