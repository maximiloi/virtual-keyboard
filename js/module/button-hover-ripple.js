import createElement from './create-element.js';

/**
 * Description placeholder
 * @date 27.04.2023 - 10:16:05
 *
 * @param {element} targetItem
 * @param {event} e
 */
function hoverRipple(targetItem, e) {
  // Создание span элемента
  const button = targetItem.closest('[data-ripple]');
  const ripple = createElement('span', 'button__ripple');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  ripple.style.width = `${diameter}px`;
  ripple.style.height = `${diameter}px`;
  ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
  ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;

  //  Работа анимации один раз или постоянно
  button.dataset.ripple === 'once' && button.querySelector('.button__ripple')
    ? button.querySelector('.button__ripple').remove() : null;

  // Добавление span элемента на страницу
  button.appendChild(ripple);

  // Удаление span елемента
  const getAnimationDuration = () => {
    const animDuration = window.getComputedStyle(ripple).animationDuration;

    return animDuration.includes('ms')
      ? animDuration.replace('ms', '')
      : animDuration.replace('s', '') * 1000;
  };

  const timeOut = getAnimationDuration(ripple);

  setTimeout(() => {
    ripple.remove();
  }, timeOut);
}

export default hoverRipple;
