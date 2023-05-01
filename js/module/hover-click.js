/**
 * Description placeholder
 * @date 01.05.2023 - 10:29:47
 *
 * @param {event} e
 * @param {*} event
 */
const hoverClick = (targetItem, event) => {
  if (event === 'mousedown') {
    targetItem.parentElement.parentElement.classList.add('_on');
  } else {
    targetItem.parentElement.parentElement.classList.remove('_on');
  }
};

export default hoverClick;
