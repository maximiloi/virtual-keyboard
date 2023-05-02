import createPage from './module/create-page.js';
import toggleCapslock from './module/toggle-capslock.js';
import toggleShift from './module/toggle-shift.js';
import hoverKeydown from './module/hover-keydown.js';
import hoverClick from './module/hover-click.js';
import languageChange from './module/language-change.js';

createPage();

document.addEventListener('mousedown', (e) => {
  const targetItem = e.target;

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

    hoverClick(targetItem, 'mousedown');
  }
});

document.addEventListener('mouseup', (e) => {
  const targetItem = e.target;
  hoverClick(targetItem, 'mouseup');

  if (targetItem.textContent === 'Shift') {
    toggleShift(targetItem);
  }
});

document.addEventListener('keydown', (e) => {
  const targetCode = e.code;

  if (e.shiftKey && e.ctrlKey) {
    languageChange();
  }

  if (targetCode === 'Tab') {
    e.preventDefault();
    document.querySelector('.app__out').value += '\t';
  } else if (targetCode === 'CapsLock') {
    toggleCapslock(e.target);
  } else {
    hoverKeydown(targetCode, 'keydown');
  }
});

document.addEventListener('keyup', (e) => {
  const targetCode = e.code;
  hoverKeydown(targetCode, 'keyup');
});
