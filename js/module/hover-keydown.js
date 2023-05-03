/**
 * Description placeholder
 * @date 01.05.2023 - 09:40:01
 *
 * @param {event} targetCode
 */
const hoverKeydown = (targetCode, event) => {
  document.querySelector('.app__out').focus();

  const kitKey = document.querySelectorAll('.key');
  kitKey.forEach((key) => {
    if (key.closest(`.${targetCode}`)) {
      if (event === 'keydown') {
        key.classList.add('_hover');
      } else {
        key.classList.remove('_hover');
      }
    }
  });
};

export default hoverKeydown;
