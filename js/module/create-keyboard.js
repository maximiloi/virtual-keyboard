import { createElement } from './create-element.js';

/**
 * Description placeholder
 * @date 26.04.2023 - 23:54:42
 *
 * @param {Object} keyObject
 * @returns {HTMLElement}
 */
function createKeyboardKey(keyObject) {
  const row = createElement('div', 'keyboard__row row');
  keyObject.forEach((item) => {
    const { keyName, eng, rus } = item;
    const keyWrapper = createElement('div', `key ${keyName}`);

    const spanEng = createElement('span', 'eng');
    const engCaseDown = createElement('span', 'caseDown', `${eng.caseDown}`);
    const engCaseUp = createElement('span', 'caseUp hidden', `${eng.caseUp}`);
    const engCaps = createElement('span', 'caps hidden', `${eng.caps}`);
    const engShiftCaps = createElement('span', 'shiftCaps hidden', `${eng.shiftCaps}`);

    const spanRus = createElement('span', 'rus hidden');
    const rusCaseDown = createElement('span', 'caseDown hidden', `${rus.caseDown}`);
    const rusCaseUp = createElement('span', 'caseUp hidden', `${rus.caseUp}`);
    const rusCaps = createElement('span', 'caps hidden', `${rus.caps}`);
    const rusShiftCaps = createElement('span', 'shiftCaps hidden', `${rus.shiftCaps}`);

    spanEng.prepend(engCaseDown, engCaseUp, engCaps, engShiftCaps);
    spanRus.prepend(rusCaseDown, rusCaseUp, rusCaps, rusShiftCaps);
    keyWrapper.prepend(spanEng, spanRus);
    row.append(keyWrapper);
  });

  return row;
}

export { createKeyboardKey };
