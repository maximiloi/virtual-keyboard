import { createElement } from './module/create-element.js';

const appWrapper = createElement('section', 'app__wrapper');

const titleElement = createElement('h1', 'app__title', 'Virtual Keyboard');
const textareaOut = createElement('textarea', 'app__out');
const keyboardWrapper = createElement('div', 'app__keyboard keyboard__wrapper');
const textDescription = createElement('p', 'app__text', 'Клавиатура создана в операционной системе OsX');
const textLanguage = createElement('p', 'app__text', 'Для переключения языка комбинация: левыe cmd + space');

appWrapper.append(titleElement, textareaOut, keyboardWrapper, textDescription, textLanguage);

document.body.append(appWrapper);
