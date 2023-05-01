/**
 * Description placeholder
 * @date 01.05.2023 - 09:40:01
 *
 * @param {event} e
 */
const hoverKeydown = (e) => {
  const targetCode = e.code;

  document.querySelector('.app__out').focus();

  const kitKey = document.querySelectorAll('.key');
  kitKey.forEach((key) => {
    if (key.closest(`.${targetCode}`)) {
      key.classList.toggle('_on');
    }
  });
};

export default hoverKeydown;
