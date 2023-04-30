import createElement from './create-element.js';

/**
 * Description placeholder
 * @date 26.04.2023 - 23:54:42
 *
 * @param {Object} keyObject
 * @returns {HTMLElement}
 */
const createKeyboardKey = (keyObject) => {
  const row = createElement('div', 'keyboard__row row');

  keyObject.forEach((item) => {
    const { keyName, eng, rus } = item;
    const keyWrapper = createElement('div', `key ${keyName}`);
    keyWrapper.setAttribute('data-ripple', 'once');

    const spanEng = createElement('span', 'eng');
    const engCaseDown = createElement('span', 'caseDown _active', `${eng.caseDown}`);
    const engCaseUp = createElement('span', 'caseUp _hidden', `${eng.caseUp}`);
    const engCaps = createElement('span', 'caps _hidden', `${eng.caps}`);
    const engShiftCaps = createElement('span', 'shiftCaps _hidden', `${eng.shiftCaps}`);

    const spanRus = createElement('span', 'rus _hidden');
    const rusCaseDown = createElement('span', 'caseDown _hidden', `${rus.caseDown}`);
    const rusCaseUp = createElement('span', 'caseUp _hidden', `${rus.caseUp}`);
    const rusCaps = createElement('span', 'caps _hidden', `${rus.caps}`);
    const rusShiftCaps = createElement('span', 'shiftCaps _hidden', `${rus.shiftCaps}`);

    spanEng.prepend(engCaseDown, engCaseUp, engCaps, engShiftCaps);
    spanRus.prepend(rusCaseDown, rusCaseUp, rusCaps, rusShiftCaps);
    keyWrapper.prepend(spanEng, spanRus);
    row.append(keyWrapper);
  });

  return row;
};

export default createKeyboardKey;
