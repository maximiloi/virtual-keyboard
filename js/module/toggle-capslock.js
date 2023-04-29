function toggleCapslock(targetItem) {
  const kitActiveElement = document.querySelectorAll('._active');
  kitActiveElement.forEach((item) => {
    item.classList.remove('_active');
    item.classList.add('_hidden');

    if (targetItem.closest('._on')) {
      item.previousSibling.previousSibling.classList.remove('_hidden');
      item.previousSibling.previousSibling.classList.add('_active');
    } else {
      item.nextElementSibling.nextElementSibling.classList.remove('_hidden');
      item.nextElementSibling.nextElementSibling.classList.add('_active');
    }
  });
  targetItem.parentElement.parentElement.classList.toggle('_on');
}

export default toggleCapslock;
