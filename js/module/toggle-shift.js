const toggleShift = (targetItem) => {
  const kitActiveElement = document.querySelectorAll('._active');
  kitActiveElement.forEach((item) => {
    item.classList.add('_hidden');
    item.classList.remove('_active');

    if (targetItem.closest('._on')) {
      item.previousSibling.classList.remove('_hidden');
      item.previousSibling.classList.add('_active');
    } else {
      item.nextElementSibling.classList.remove('_hidden');
      item.nextElementSibling.classList.add('_active');
    }
  });
  targetItem.parentElement.parentElement.classList.toggle('_on');
};

export default toggleShift;
