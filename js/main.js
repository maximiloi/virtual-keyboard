import createElement from './module/create-element.js';
import createKeyboardKey from './module/create-keyboard.js';
import {
  row1, row2, row3, row4, row5,
} from './module/keyboard.js';
import toggleCapslock from './module/toggle-capslock.js';
import toggleShift from './module/toggle-shift.js';
import hoverKeydown from './module/hover-keydown.js';
import hoverClick from './module/hover-click.js';

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

  // hoverClick(targetItem, 'mousedown');
  // Добавление текста кликом по клавиатуре
  if (targetItem.closest('.key')) {
    const textAreaOut = document.querySelector('.app__out');

    if (targetItem.closest('._active').textContent === 'Ctrl'
    || targetItem.closest('._active').textContent === 'Alt'
    || targetItem.closest('._active').textContent === 'Cmd') return;

    if (targetItem.closest('._active').textContent === 'Shift') {
      toggleShift(targetItem);
    } else if (targetItem.closest('._active').textContent === 'CapsLock') {
      toggleCapslock(targetItem);
    } else if (targetItem.closest('._active').textContent === 'Tab') {
      textAreaOut.value += '\t';
    } else if (targetItem.closest('._active').textContent === 'Enter') {
      textAreaOut.value += '\n';
    } else if (targetItem.closest('._active').textContent === 'Backspace') {
      textAreaOut.value = textAreaOut.value.substring(0, textAreaOut.value.length - 1);
    } else {
      textAreaOut.value += targetItem.closest('._active').textContent;
    }
  }
});

document.addEventListener('mouseup', (e) => {
  const targetItem = e.target;
  if (targetItem.textContent === 'Shift') {
    toggleShift(targetItem);
  } else if (targetItem.textContent === 'CapsLock') {
    return;
  } else {
    return;
  }
  hoverClick(targetItem, 'mouseup');
});

document.addEventListener('keydown', (e) => {
  if (e.targetItem.textContent === 'Tab') {
    e.defaultPrevented();
  }
  hoverKeydown(e, 'keydown');
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'CapsLock') return;
  hoverKeydown(e, 'keyup');
});
