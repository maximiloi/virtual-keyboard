/**
 * @param {tagName: string,
 * className?: string,
 * textContent?: unknown,
 * onClickHandler?: (event: Event) => void} objectParams
 * @returns {HTMLElement}
 */
function createElement(tagName, className, textContent, onClickHandler) {
  const element = document.createElement(tagName);
  className.split(' ').forEach((/** @type {string} */ name) => {
    element.classList.add(name);
  });
  if (textContent) {
    element.innerHTML = textContent.toString();
  }
  if (onClickHandler) {
    element.addEventListener('click', onClickHandler);
  }
  return element;
}

export { createElement };
