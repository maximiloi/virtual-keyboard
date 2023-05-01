/**
 * Description placeholder
 * @date 01.05.2023 - 09:40:01
 *
 * @param {event} e
 */
const hoverKeydown = (e, event) => {
  const targetCode = e.code;

  document.querySelector('.app__out').focus();

  const kitKey = document.querySelectorAll('.key');
  kitKey.forEach((key) => {
    if (key.closest(`.${targetCode}`)) {
      if (event === 'keydown') {
        key.classList.add('_on');
      } else {
        key.classList.remove('_on');
      }
    }
  });
};

export default hoverKeydown;
