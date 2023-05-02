import createElement from './create-element.js';
import createKeyboardKey from './create-keyboard.js';
import {
  row1, row2, row3, row4, row5,
} from './keyboard.js';

const createPage = () => {
  const app = document.querySelector('.app');
  // Создание элементов проекта на странице
  const appWrapper = createElement('section', 'app__wrapper');
  const titleElement = createElement('h1', 'app__title', 'RSS Virtual Keyboard');
  const textareaOut = createElement('textarea', 'app__out');
  textareaOut.setAttribute('autofocus', '');
  const keyboardWrapper = createElement('div', 'app__keyboard keyboard');
  const textDescription = createElement('p', 'app__text', 'Keyboard created in operating system macOs');
  const textLanguage = createElement('p', 'app__text', 'To switch the language combination: Shift + Ctrl');

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
};

export default createPage;
