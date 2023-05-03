/**
 * Description placeholder
 * @date 01.05.2023 - 10:29:47
 *
 * @param {event} e
 * @param {*} event
 */
const hoverClick = (targetItem, event) => {
  if (event === 'mousedown') {
    targetItem.parentElement.parentElement.classList.add('_hover');
  } else {
    targetItem.parentElement.parentElement.classList.remove('_hover');
  }
};

export default hoverClick;
